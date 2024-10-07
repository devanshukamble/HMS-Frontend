import React from "react";
import { useViewAppoinmentQuery } from "../../services/hmsApi";
import { useSelector } from "react-redux";
import { getToken } from "../../services/localStorageService";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export default function UserAppoinments() {
  const { data, isSuccess, isLoading, isError } = useViewAppoinmentQuery();
  const [appoinments, setAppoinments] = React.useState([]);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate()
  React.useEffect(() => {
    if (data && isSuccess && user) {
      console.log(data);
      setAppoinments(
        data.filter((appoinment) => appoinment.email === user.email)
      );
    }
  }, [data, isSuccess]);
  if (isLoading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  if (isError || !data) {
    const {refresh_token} = getToken()
        const assignNewTokens = async (token)=>{
            const response = await axios.post('http://127.0.0.1:8000/api/user/refreshtoken/',{refresh:token})
            if (response.error){
                navigate()
            }
            localStorage.removeItem('access_token')
            localStorage.setItem('access_token',response.data.access)
        }
        assignNewTokens(refresh_token)
        return <div>Error fetching user data.</div>; // Show an error message if there was a problem
  }
  return (
    <div className="appoinment lg:w-[95%] lg:h-[100%] w-full h-full bg-[#F5FEFD] rounded-xl p-2">
      <h1 className="text-center text-2xl font-bold text-[#178066] p-2">
        Apponments
      </h1>
      <table className="text-center w-full">
        <thead>
          <tr className="table-row bg-[#178066] text-[#fff]">
            {/* <th className="p-2 border-2 border-[#fff]">Patient Name</th> */}
            <th className="p-2 border-2 border-[#fff]">Doctor Name</th>
            <th className="p-2 border-2 border-[#fff]">Date</th>
            <th className="p-2 border-2 border-[#fff]">Time</th>
            <th className="p-2 border-2 border-[#fff]">Symptoms</th>
          </tr>
        </thead>
        <tbody>
          {appoinments.map((appoinment, index) => {
            return (
              <tr key={index} className="border-b-2">
                {/* <td>{appoinment.firstname} {appoinment.lastname}</td> */}
                <td>{appoinment.doctorname}</td>
                <td>{new Date(appoinment.timeslot).toLocaleDateString()}</td>
                <td>{new Date(appoinment.timeslot).getUTCHours()}:{new Date(appoinment.timeslot).getUTCMinutes()}</td>
                <td>{appoinment.symptoms}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
