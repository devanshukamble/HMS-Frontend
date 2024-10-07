import React from "react";
// import profile from "../images/profile-bg.png"
import { Link,Outlet } from "react-router-dom";
export default function UserMain() {
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
  return (
    <div className="bg-[#ECF3F9]">
      <div className="user-navbar bg-[#178066] flex lg:flex-col flex-row justify-between text-white text-md p-2 pt-2  lg:w-[15vw] lg:h-[100vh] w-full items-center">
        <div>
          <span className="lg:text-3xl text-xl tracking-widest">ORTHOC</span>
        </div>
        <div
          className="bg-[#178066] w-full lg:block  lg:static delay-300 absolute hidden left-0 top-[5rem] items-center lg:h-[70%]"
          id="nav-menu"
        >
          <ul className="flex justify-evenly lg:h-full flex-col items-center">
            <Link
              to="/doctor"
              className="lg:border-2 border-white lg:p-2 lg:w-[90%] text-center rounded-xl lg:hover:bg-[#fff] lg:hover:text-[#178066] lg:hover:text-xl transition-all ease-in-out duration-200 lg:m-1 m-2"
            >
              <i className="fa-solid fa-house"></i> Home
            </Link>
            <Link
              to="/doctor/doctorappoinments"
              className="lg:border-2 border-white lg:p-2 lg:w-[90%] text-center rounded-xl lg:hover:bg-[#fff] lg:hover:text-[#178066] lg:hover:text-xl transition-all ease-in-out duration-200 lg:m-1 m-2"
            >
              <i className="fa-solid fa-calendar-day"></i> Appointments
            </Link>
            <Link
              to="/doctor/doctorpatient"
              className="lg:border-2 border-white lg:p-2 lg:w-[90%] text-center rounded-xl lg:hover:bg-[#fff] lg:hover:text-[#178066] lg:hover:text-xl transition-all ease-in-out duration-200 lg:m-1 m-2"
            >
              <i className="fa-solid fa-bed"></i> Patients
            </Link>
            <Link
              to="/doctor/doctormessages"
              className="lg:border-2 border-white lg:p-2 lg:w-[90%] text-center rounded-xl hover:bg-[#fff] hover:text-[#178066] hover:text-xl transition-all ease-in-out duration-200 lg:m-1 m-2"
            >
              <i className="fa-solid fa-message"></i> Messages
            </Link>
            <Link
              to="/doctor/doctorfile"
              className="lg:border-2 border-white lg:p-2 lg:w-[90%] text-center rounded-xl lg:hover:bg-[#fff] lg:hover:text-[#178066] lg:hover:text-xl transition-all ease-in-out duration-200 lg:m-1 m-2"
            >
              <i className="fa-solid fa-file-medical"></i> File
            </Link>
            <button
              className="lg:border-2 border-white lg:p-2 lg:w-[90%] text-center rounded-xl lg:hover:bg-[#fff] lg:hover:text-[#178066] lg:hover:text-xl transition-all ease-in-out duration-200 lg:m-1 m-2"
            >
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </button>
          </ul>
        </div>
        <div className="p-1">
          <ul className="flex items-center justify-between">
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
    </div>
  );
}
