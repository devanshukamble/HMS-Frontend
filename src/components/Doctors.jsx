// import React from "react";
// import Navbar from "./Navbar";
// import ScaleLoader from "react-spinners/ScaleLoader";
// import { useGetDoctorsDetailQuery } from "../services/hmsApi";
// export default function Doctors() {
//   let [loading, setLoading] = React.useState(false);
//   const { data, isSuccess, isLoading, isError } = useGetDoctorsDetailQuery();
//   // const [doctors, setDoctors] = React.useState([]);
//   React.useEffect(() => {
//     if (data && isSuccess) {
//       setLoading(false);
//       // setDoctors(data);
//       // console.log(doctors);
//     }
//   }, [data, isSuccess]);
//   if (isLoading) {
//     setLoading(true);
//     // return <div>Loading...</div>; // Show a loading message while fetching data
//   }

//   if (isError || !data) {
//     return <div>Error fetching user data.</div>; // Show an error message if there was a problem
//   }
//   // React.useEffect(() => {
//   //   setLoading(true);
//   //   setTimeout(() => {
//   //     setLoading(false);
//   //   }, 1000);
//   // }, []);
//   return (
//     <div>
//       <Navbar />
//       {loading ? (
//         <div className="flex justify-center h-[90vh] text-center items-center">
//           <ScaleLoader
//             color={"#32AD94"}
//             loading={loading}
//             size={150}
//             aria-label="Loading Spinner"
//             data-testid="loader"
//           />
//         </div>
//       ) : (
//         <div className="doctors lg:w-[95%] lg:h-[100%] w-full h-full bg-[#F5FEFD] rounded-xl pt-2">
//           <div className="doctors-con flex flex-col items-center h-[100%] w-[100%] p-0  overflow-x-hidden overflow-y-scroll scrollbar scrollbar-thumb-[#178066] scrollbar-track-slate-300 scrollbar-thin">
//             {data.map((doctor, index) => {
//               return (
//                 <div
//                   key={index}
//                   className="doctor flex lg:flex-row flex-col lg:w-[50%] w-[90%] p-2 bg-[#fffefc] rounded-lg shadow-md m-5"
//                 >
//                   <img
//                     src={doctor.image}
//                     alt=""
//                     className="h-[20vh] rounded-lg"
//                   />
//                   <div className="lg:ml-5 p-2 flex flex-col">
//                     <span className="text-xl font-bold mb-3">
//                       Dr. {doctor.firstname} {doctor.lastname}
//                     </span>
//                     <span>Specialty: {doctor.speciality}</span>
//                     {/* <span>Experience: 8 years</span> */}
//                     <span>Education: {doctor.education}</span>
//                     <span>Email: {doctor.email}</span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import ScaleLoader from "react-spinners/ScaleLoader";
import { useGetDoctorsDetailQuery } from "../services/hmsApi";
import { useDispatch } from "react-redux";
import { setDoctors } from "../features/doctorSlice";
export default function UserDoctors() {
  const { data, isSuccess, isLoading, isError } = useGetDoctorsDetailQuery();
  // const [doctors, setDoctors] = React.useState([]);
  let [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch()
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    if (data && isSuccess) {
      setDoctors(data);
      dispatch(setDoctors({doctors:data}));
      // console.log(doctors);
    }
  }, [data, isSuccess,dispatch]);
  if (isLoading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  if (isError || !data) {
    return <div>Error fetching user data.</div>; // Show an error message if there was a problem
  }
  return (
    <>
    <Navbar/>
    {loading ? (
        <div className="flex justify-center h-[90vh] text-center items-center">
          <ScaleLoader
            color={"#32AD94"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
    <div className="doctors lg:w-[95%] lg:h-[100%] w-full h-full rounded-xl pt-2">
      <div className="doctors-con flex flex-col items-center h-[100%] w-[100%] p-0">
        {data.map((doctor,index) => {
          return (
            <div key={index} className="doctor flex lg:flex-row flex-col lg:w-[50%] w-[90%] p-2 bg-[#fffefc] rounded-lg shadow-md m-5">
              <img src={doctor.image} alt="" className="h-[20vh] rounded-lg" />
              <div className="lg:ml-5 p-2 flex flex-col">
                <span className="text-xl font-bold mb-3">Dr. {doctor.firstname} {doctor.lastname}</span>
                <span>Specialty: {doctor.speciality}</span>
                {/* <span>Experience: 8 years</span> */}
                <span>Education: {doctor.education}</span>
                <span>Email: {doctor.email}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>)}
    <Footer/>
    </>
  );
}
