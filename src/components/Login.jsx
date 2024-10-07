import React from "react";
import wave from "../images/wave.png";
import bg from "../images/login-bg.svg";
import avatar from "../images/avatar.svg";
import { Link, useNavigate } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useLoginUserMutation } from "../services/hmsApi";
import Swal from "sweetalert2";
import { storeToken , getToken } from "../services/localStorageService";
import { setUserToken } from "../features/hmsSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  let [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({});
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [serverErr, setServerErr] = React.useState({});
  function handelChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  async function handelSubmit(e) {
    e.preventDefault();
    const res = await loginUser(formData);
    if (res.error) {
      if(res.error.data.errors.non_field_errors){
        console.log(res.error.data.errors.non_field_errors);
        Swal.fire({
          title: "Login Failed",
          text: String(res.error.data.errors.non_field_errors[0]),
          icon: "error",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#d33",
        });
        return;
      }
      console.log(res.error.data.errors);
      setServerErr(res.error.data.errors);
    }
    if(res.data){ 
      console.log(res.data);
      storeToken(res.data.token)
      let {access_token} = getToken()
      dispatch(setUserToken({access_token:access_token}))
      Swal.fire({
        title: "Login Successful!",
        icon: "success",
        background: "#f9f9f9", // Customize the background color
        backdrop: `
            rgba(0, 0, 123, 0.4)
            url('/images/celebrate.gif') // Optional background animation
            left top
            no-repeat
          `,
      }).then(() => {
        navigate("/user"); // Navigate to login page after the user clicks "Go to Login"
      });
    }
    // console.log(res);
  }
  React.useEffect(() => {
    let {access_token} = getToken()
    if(access_token){
      navigate("/user");
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  let {access_token} = getToken();
  return (
    <>
      {loading ? (
        <div className="flex justify-center h-[95vh] text-center items-center">
          <ScaleLoader
            color={"#32AD94"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="h-[100vh]">
          <Link
            to="/"
            className="lg:text-[1rem] text-xs border-2 border-[#37AE96] bg-[#37AE96] lg:duration-100 px-3 py-2 rounded-full text-[#fff] m-5 font-bold absolute right-0 hover:text-[#37AE96] hover:bg-[#fff]"
          >
            Go Back
          </Link>
          <img
            src={wave}
            alt=""
            className="h-full absolute z-[-1] lg:block hidden"
          />
          <div className="flex justify-evenly items-center h-[100%]">
            <div className="lg:block hidden">
              <img src={bg} alt="" className="h-[40vh]" />
            </div>
            <div className="lg:w-[50%] md:w-[60%] lg:p-0 p-2 w-full flex justify-center">
              <form
                className="text-center flex flex-col lg:w-[50%] w-full p-2"
                onSubmit={handelSubmit}
              >
                <img src={avatar} alt="" className="lg:h-[20vh] h-[10vh]" />
                <span className="text-3xl font-bold tracking-wide my-2 text-[#2AC48F]">
                  Welcome
                </span>
                <div className="flex flex-col my-2">
                  {/* <span className="text-left mx-8 mt-2">Username</span> */}
                  <div className="p-2 border-b-2 border-grey my-0 mx-0 flex">
                    <span className="text-[#999]">
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="ml-2 w-full border-0 outline-0"
                      placeholder={serverErr.email?String(serverErr.email):"Enter Email"}
                      name="email"
                      onChange={handelChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col my-2">
                  {/* <span className="text-left mx-8 mt-2">Password</span> */}
                  <div className="p-2 border-b-2 border-grey my-0 mx-0 flex">
                    <span className="text-[#999]">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="ml-2 w-full border-0 outline-0"
                      placeholder={serverErr.password?String(serverErr.password):"Enter Password"}
                      name="password"
                      onChange={handelChange}
                    />
                  </div>
                </div>
                {/* <div className="place-self-start p-2 text-[#999] flex items-center">
                  <input type="checkbox" name="isdoctor" id="" />
                  <span className="pb-1 pl-2">are you doctor</span>
                </div> */}
                <div className="flex justify-between mx-0 my-5">
                  <Link
                    to=""
                    className="text-sm text-[#2AC48F] hover:text-[#999]"
                  >
                    {/* forget password */}
                  </Link>
                  <span className="text-sm">
                    don't have account{" "}
                    <Link
                      to="/signup"
                      className="text-[#2AC48F] hover:text-[#999]"
                    >
                      create one
                    </Link>
                  </span>
                </div>
                <button className="transition-all ease-in-out duration-100 bg-[#2AC48F] hover:bg-[#fff] border-2 border-[#2AC48F] hover:text-[#2AC48F] rounded-full p-2 text-[#fff] tracking-widest font-bold">
                  LOGIN
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
