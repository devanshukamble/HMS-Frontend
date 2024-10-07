import React from "react";
// import profile from "../images/profile-bg.png"
import { Link,Outlet,useNavigate } from "react-router-dom";
import BookAppoinment from "./BookAppoinment";
import { removeToken } from "../../services/localStorageService";
import { useDispatch } from "react-redux";
import { unSetUserToken } from "../../features/hmsSlice";
import { unSetUser } from "../../features/userSclice";
export default function UserMain() {
  const [isOpen,changeIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function toggleNavbar() {
    if (document.getElementById("nav-icon").classList.contains("fa-bars")) {
      console.log("bars -> close");
      document.getElementById("nav-icon").classList.add("fa-xmark");
      document.getElementById("nav-icon").classList.remove("fa-bars");
      document.getElementById("nav-menu").classList.remove("hidden");
    } else {
      document.getElementById("nav-icon").classList.add("fa-bars");
      document.getElementById("nav-icon").classList.remove("fa-xmark");
      document.getElementById("nav-menu").classList.add("hidden");
    }
  }
  function handelLogout(){
    dispatch(unSetUserToken({access_token:null}))
    dispatch(unSetUser({user:null}))
    removeToken();
    navigate('/'); 
  }
  return (
    <div className="bg-[#ECF3F9]">
      <div className="user-navbar bg-[#178066] flex lg:flex-col flex-row justify-between text-white text-md p-2 pt-2  lg:w-[15vw] lg:h-[100vh] w-full items-center">
        <div>
          <Link to="/"><span className="lg:text-3xl text-xl">MediManage</span></Link>
        </div>
        <div
          className="bg-[#178066] w-full lg:block  lg:static delay-300 absolute hidden left-0 top-[5rem] items-center lg:h-[70%]"
          id="nav-menu"
        >
          <ul className="flex justify-evenly lg:h-full flex-col items-center">
            <Link
              to="/user"
              className="lg:border-2 border-white lg:p-2 lg:w-[90%] text-center rounded-xl lg:hover:bg-[#fff] lg:hover:text-[#178066] lg:hover:text-xl transition-all ease-in-out duration-200 lg:m-1 m-2"
            >
              <i className="fa-solid fa-house"></i> Home
            </Link>
            <Link
              to="/user/userappoinments"
              className="lg:border-2 border-white lg:p-2 lg:w-[90%] text-center rounded-xl lg:hover:bg-[#fff] lg:hover:text-[#178066] lg:hover:text-xl transition-all ease-in-out duration-200 lg:m-1 m-2"
            >
              <i className="fa-solid fa-calendar-day"></i> Appointments
            </Link>
            <Link
              to="/user/userdoctors"
              className="lg:border-2 border-white lg:p-2 lg:w-[90%] text-center rounded-xl lg:hover:bg-[#fff] lg:hover:text-[#178066] lg:hover:text-xl transition-all ease-in-out duration-200 lg:m-1 m-2"
            >
              <i className="fa-solid fa-user-doctor"></i> Doctors
            </Link>
            {/* <Link
              to="/user/usermessages"
              className="lg:border-2 border-white lg:p-2 lg:w-[90%] text-center rounded-xl hover:bg-[#fff] hover:text-[#178066] hover:text-xl transition-all ease-in-out duration-200 lg:m-1 m-2"
            >
              <i className="fa-solid fa-message"></i> Messages
            </Link>
            <Link
              to="/user/userfile"
              className="lg:border-2 border-white lg:p-2 lg:w-[90%] text-center rounded-xl lg:hover:bg-[#fff] lg:hover:text-[#178066] lg:hover:text-xl transition-all ease-in-out duration-200 lg:m-1 m-2"
            >
              <i className="fa-solid fa-file-medical"></i> File
            </Link> */}
            <button
              className="lg:border-2 border-white lg:p-2 lg:w-[90%] text-center rounded-xl lg:hover:bg-[#fff] lg:hover:text-[#178066] lg:hover:text-xl transition-all ease-in-out duration-200 lg:m-1 m-2"
              onClick={handelLogout}
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </button>
          </ul>
        </div>
        <div className="p-1">
          <ul className="flex items-center justify-between">
            <li>
              <button
                onClick={()=>changeIsOpen(true)}
                className="lg:text-[0.85rem] hover:border-2 text-[0.6rem] bg-[#178066] lg:duration-100 px-3 py-2 rounded-xl border-2 lg:border-[#178066] border-[#fff] lg:text-[#fff] font-bold lg:hover:bg-[#fff] lg:hover:text-[#178066] lg:hover:text-[1rem] lg:absolute top-0 right-0 m-5"
              >
                BOOK APPOINTMENT
              </button>
            </li>
            <li
              className="text-2xl lg:hidden mx-5"
              id="toggle"
              onClick={toggleNavbar}
            >
              <i className="fa-solid fa-bars" id="nav-icon"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:w-[85vw] lg:h-[90vh] w-full h-[100%] p-2 lg:absolute lg:bottom-0 lg:right-0 flex justify-center">
      <Outlet></Outlet>
      </div>
      {isOpen && <BookAppoinment showHide={isOpen} close={()=>changeIsOpen(false)}/>}
    </div>
  );
}
