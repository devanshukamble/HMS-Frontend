import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Departments from "./components/Departments"
import UserMain from "./components/user/UserMain";
import UserAppoinments from "./components/user/UserAppoinments";
import UserProfile from "./components/user/UserProfile";
import UserMessage from "./components/user/UserMessage";
import UserDoctors from "./components/user/UserDoctors";
import UserFile from "./components/user/UserFile";
import DoctorMain from "./components/doctor/DoctorMain"
import DoctorProfile from "./components/doctor/DoctorProfile"
import DoctorAppoinments from "./components/doctor/DoctorAppoinments"
import DoctorFile from "./components/doctor/DoctorFile"
import DoctorPatients from "./components/doctor/DoctorPatients"
import DoctorMessage from "./components/doctor/DoctorMessage"
const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/> 
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/> 
    },
    {
        path:"/contact",
        element:<Contact/> 
    },
    {
        path:"/about",
        element:<About/> 
    },
    {
        path:"/doctors",
        element:<Doctors/> 
    },
    {
        path:"/departments",
        element:<Departments/> 
    },
    {
        path:"/user",
        element:<UserMain/>,
        children:[
            {
                path:"/user",
                element:<UserProfile/>,
                index:true,
            },
            {
                path:"/user/userappoinments",
                element:<UserAppoinments/>
            },
            {
                path:"/user/userdoctors",
                element:<UserDoctors/>
            },
            {
                path:"/user/usermessages",
                element:<UserMessage/>
            },
            {
                path:"/user/userfile",
                element:<UserFile/>
            }
        ]
    },
    {
        path:"/doctor",
        element:<DoctorMain/>,
        children:[
            {
                path:"/doctor",
                element:<DoctorProfile/>,
                index:true,
            },
            {
                path:"/doctor/doctorappoinments",
                element:<DoctorAppoinments/>
            },
            {
                path:"/doctor/doctorpatient",
                element:<DoctorPatients/>
            },
            {
                path:"/doctor/doctormessages",
                element:<DoctorMessage/>
            },
            {
                path:"/doctor/doctorfile",
                element:<DoctorFile/>
            }
        ]
    },
])

export default router;