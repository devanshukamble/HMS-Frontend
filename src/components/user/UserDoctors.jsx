import React from "react";
import { useDispatch } from "react-redux";
import { useGetDoctorsDetailQuery } from "../../services/hmsApi";
import { setDoctors } from "../../features/doctorSlice";
export default function UserDoctors() {
  const { data, isSuccess, isLoading, isError } = useGetDoctorsDetailQuery();
  const [doctors, setpageDoctors] = React.useState([]);
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (data && isSuccess) {
      setpageDoctors(data);
      dispatch(setDoctors({doctors:data}));
    }
  }, [data, isSuccess,dispatch]);
  if (isLoading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  if (isError || !data) {
    return <div>Error fetching user data.</div>; // Show an error message if there was a problem
  }
  return (
    <div className="doctors lg:w-[95%] lg:h-[100%] w-full h-full bg-[#F5FEFD] rounded-xl pt-2">
      <div className="doctors-con flex flex-col items-center h-[100%] w-[100%] p-0  overflow-x-hidden overflow-y-scroll scrollbar scrollbar-thumb-[#178066] scrollbar-track-slate-300 scrollbar-thin">
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
    </div>
  );
}
