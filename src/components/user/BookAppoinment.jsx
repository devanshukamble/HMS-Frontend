import React from "react";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useBookAppoinmentMutation,
  useBookDoctorAppoinmentMutation,
  useViewDoctorAppoinmentQuery,
} from "../../services/hmsApi";
import axios from "axios";
export default function BookAppoinment(props) {
  const { doctors } = useSelector((state) => state.doctors);
  const [formData, setFormData] = React.useState();
  const [serverErr, setServerErr] = React.useState({});
  const [bookAppoinment] = useBookAppoinmentMutation();
  const [bookDoctorAppoinment] = useBookDoctorAppoinmentMutation();

  const navigate = useNavigate();
  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  function getOneWeekLaterDateTime() {
    const now = new Date();
    const oneWeekLater = new Date(now);
    oneWeekLater.setDate(now.getDate() + 7);
    const year = oneWeekLater.getFullYear();
    const month = (oneWeekLater.getMonth() + 1).toString().padStart(2, "0");
    const day = oneWeekLater.getDate().toString().padStart(2, "0");
    const hours = oneWeekLater.getHours().toString().padStart(2, "0");
    const minutes = oneWeekLater.getMinutes().toString().padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  function handelChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  async function handelSubmit(e) {
    e.preventDefault();
    // time slot validation
    if (
      !(
        formData.timeslot > getCurrentDateTime()
      )
    ) {
      // console.log('this is working');
      Swal.fire({
        title: "Error!",
        text: "Appoinment datetime should be of 1week range from now",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    let response = await axios.get(
      "http://127.0.0.1:8000/api/user/viewdoctorappoinment/"
    );
    let valArray = response.data;
    console.log(valArray);
    for (let i = 0; i < valArray.length; i++) {
      if (valArray[i].doctorname === formData.doctorname) {
        if (valArray[i].timeslot.slice(0,-4) === formData.timeslot) {
          Swal.fire({
            title: "Error!",
            text: "Appoinment slot unavailable plese select other time slot",
            icon: "error",
            confirmButtonText: "Ok",
          });
          return;
        }
      }
    }
    const mobileNumberRegex = /^[0-9]{10}$/;

    if (!mobileNumberRegex.test(formData.phoneno)) {
      Swal.fire({
        title: "Error!",
        text: "Mobile number must be 10 digits.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    let res = await bookAppoinment(formData);
    if (res.error) {
      setServerErr(res.error.data);
      return;
    }
    if (res.data) {
      let res2 = await bookDoctorAppoinment({
        doctorname: formData.doctorname,
        timeslot: formData.timeslot,
      });
      console.log(res2);
      Swal.fire({
        title: res.data.msg,
        icon: "success",
        background: "#f9f9f9", // Customize the background color
        backdrop: `
            rgba(0, 0, 123, 0.4)
            url('/images/celebrate.gif') // Optional background animation
            left top
            no-repeat
          `,
      }).then(() => {
        navigate("/user/userappoinments"); // Navigate to login page after the user clicks "Go to Login"
      });
    }
  }
  return (
    <div className="fixed top-0 w-[100%] h-[100%] flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-[3px]">
      <div className="lg:w-[40%] w-[90%] flex flex-col p-2 bg-white rounded-xl">
        <button className="text-xl place-self-end" onClick={props.close}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <form className="text-center" onSubmit={handelSubmit}>
          <span className="md:text-3xl text-xl font-bold tracking-wide my-2 text-[#2AC48F]">
            Appoinment Form
          </span>
          <div className="flex justify-between">
            <div className="flex flex-col my-2 p-2">
              <div className="p-2 border-b-2 border-grey my-0 mx-0 flex">
                <input
                  type="text"
                  className="ml-2 w-full border-0 outline-0"
                  placeholder={
                    serverErr.firstname
                      ? String(serverErr.firstname[0])
                      : "First Name"
                  }
                  name="firstname"
                  onChange={handelChange}
                />
              </div>
            </div>
            <div className="flex flex-col my-2 p-2">
              <div className="p-2 border-b-2 border-grey my-0 mx-0 flex">
                <input
                  type="text"
                  className="ml-2 w-full border-0 outline-0"
                  placeholder={
                    serverErr.lastname
                      ? String(serverErr.lastname[0])
                      : "Last Name"
                  }
                  name="lastname"
                  onChange={handelChange}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col my-2 p-2">
              <div className="p-2 border-b-2 border-grey my-0 mx-0 flex">
                <input
                  type="text"
                  className="ml-2 w-full border-0 outline-0"
                  placeholder={
                    serverErr.phoneno
                      ? String(serverErr.phoneno[0])
                      : "Contact Number"
                  }
                  name="phoneno"
                  onChange={handelChange}
                />
              </div>
            </div>
            <div className="flex flex-col my-2 p-2  w-[78%]">
              <div className="p-2 border-b-2 border-grey my-0 mx-0 flex">
                <input
                  type="email"
                  name="email"
                  className="ml-2 w-full border-0 outline-0"
                  placeholder={
                    serverErr.firstname
                      ? String(serverErr.firstname[0])
                      : "Email"
                  }
                  onChange={handelChange}
                />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col p-2 text-[#999] text-left">
            <span className="pl-2">Select doctor and speciality</span>
            <select
              name="doctorname"
              onChange={handelChange}
              id=""
              className="place-self-start lg:w-[35%] w-[80%] border-2 rounded-md ml-3"
            >
              <option value="">select-doctor-speclity</option>
              {doctors.map((option, index) => (
                <option
                  value={option.firstname + " " + option.lastname}
                  key={index}
                >
                  {option.firstname} {option.lastname} {option.speciality}
                </option>
              ))}
            </select>
            {serverErr.doctorname ? String(serverErr.doctorname[0]) : ""}
          </div>
          <div className="p-2 text-[#999] mt-0 flex relative bottom-3">
            <span className="place-self-start pl-2">
              (if you dont know select general doctor)
            </span>
          </div>
          <div className="flex lg:flex-row flex-col text-left p-2 text-[#999]">
            <span className="pl-2">Select time slot</span>
            <input
              type="datetime-local"
              name="timeslot"
              id=""
              className="place-self-start lg:w-[35%] w-[80%] border-2 rounded-md ml-3"
              onChange={handelChange}
            />
            {serverErr.timeslot ? String(serverErr.timeslot[0]) : ""}
          </div>
          <div className="flex flex-col items-center p-2">
            <span className="text-[#999] place-self-start p-2">
              Enter your Symptoms
            </span>
            <textarea
              name="symptoms"
              onChange={handelChange}
              id=""
              cols=""
              rows="6"
              className="border-2 rounded-md w-[96%] resize-none p-1"
              placeholder={
                serverErr.symptoms
                  ? String(serverErr.symptoms[0])
                  : "write your message here..."
              }
            />
          </div>
          <button className="lg:text-md text-sm transition-all ease-in-out duration-100 lg:w-[40%] w-[60%] mt-5 mx-auto bg-[#2AC48F] hover:bg-[#fff] hover:text-[#2AC48F] hover:border-2 rounded-full p-2 text-[#fff] tracking-widest font-bold">
            Confirm Appoinment
          </button>
        </form>
      </div>
    </div>
  );
}
