import React from 'react'
import avtar from "../../images/avatar.svg"
import { useGetLoggedUserQuery } from '../../services/hmsApi'
import {getToken} from '../../services/localStorageService'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../features/userSclice';
import { setUserToken } from '../../features/hmsSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function UserProfile() {
    const {access_token}= getToken();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    dispatch(setUserToken({access_token:access_token}))
    const [userdata,setUserData] = React.useState({})
    const { data, isSuccess, isLoading, isError } = useGetLoggedUserQuery(access_token);
    dispatch(setUser({user:data})) 
    React.useEffect(()=>{
        if(data && isSuccess){
            dispatch(setUser({user:data}))
            setUserData(data)
        }
    },[data,isSuccess,dispatch])
    if (isLoading) {
        return <div>Loading...</div>; // Show a loading message while fetching data
    } 

    if (isError || !data) {
        const {refresh_token} = getToken()
        // const {newToken} = useGetNewTokensQuery(refresh_token)
        // console.log(newToken);
        const assignNewTokens = async (token)=>{
            const response = await axios.post('http://127.0.0.1:8000/api/user/refreshtoken/',{refresh:token})
            if (response.error){
                navigate()
            }
            localStorage.removeItem('access_token')
            console.log(response.data);
            localStorage.setItem('access_token',response.data.access)
        }
        assignNewTokens(refresh_token)
        return <div>Error fetching user data.</div>; // Show an error message if there was a problem
    }
    return (
      <div className="profile lg:w-[95%] lg:h-[100%] w-full h-full bg-[#F5FEFD] rounded-xl pt-2">
        <span className="p-2 lg:text-3xl text-xl font-bold text-[#178066]">User Profile</span>
        <div className='flex lg:flex-row flex-col justify-evenly'>
            <div className="personal-details border-2 border-[#178066] rounded-xl lg:w-[30%] w-full p-2 mt-5">
                <div className="flex p-2 items-center">
                    <img src={avtar} alt="" className="h-[8vh]"/>
                    <span className="text-2xl ml-5 text-[#178066]">Mr. {userdata.firstname} {userdata.lastname}</span>
                </div>
                <div className="p-2 flex flex-col justify-evenly">
                    <span className="text-xl text-[#178066]">Contact details:</span>
                    <span className="mt-2"><i className="fa-solid fa-envelope text-[#178066] mr-2 "></i> {data.email}</span>
                    <span className="mt-2"><i className="fa-solid fa-house text-[#178066] mr-2"></i> {data.address1} , {data.address2}</span>
                </div>
            </div>
            <div className="lg:w-[50%] lg:w-fit w-full h-fit overview border-2 border-[#178066] rounded-xl mt-5 p-2">
                <span className='text-2xl p-2 font-bold text-[#178066]'>Overview:</span>
                <div className='flex lg:flex-row flex-col lg:gap-[5rem] gap-[1rem] justify-start p-1'>
                    <div className='flex flex-col p-1'>
                        <span className='text-sm text-[#178066] font-bold'>Gender:</span>
                        <span className='text-lg tracking-wider font-bold'>{userdata.gender === 'M'?"Male":"Female"}</span>
                    </div>
                    <div className='flex flex-col p-1'>
                        <span className='text-sm text-[#178066] font-bold'>Date of Birth:</span>
                        <span className='text-lg tracking-wider font-bold'>{userdata.dateofbirth}</span>
                    </div>
                    {/* <div className='flex flex-col p-1'>
                        <span className='text-sm text-[#178066] font-bold'>Doctors number:</span>
                        <span className='text-lg tracking-wider font-bold'>85214 76545</span>
                    </div> */}
                </div>
                <div className='flex lg:flex-row flex-col lg:gap-[5rem] gap-[1rem] justify-start p-1'>
                    {/* <div className='flex flex-col p-1'>
                        <span className='text-sm text-[#178066] font-bold'>Previous Visit:</span>
                        <span className='text-lg tracking-wider font-bold'>14/05/2023</span>
                    </div>
                    <div className='flex flex-col p-1'>
                        <span className='text-sm text-[#178066] font-bold'>Next Visit:</span>
                        <span className='text-lg tracking-wider font-bold'>18/10/20023</span>
                    </div> */}
                    {/* <div className='flex flex-col p-1'>
                        <span className='text-sm text-[#178066] font-bold'>Disease:</span>
                        <span className='text-lg tracking-wider font-bold'>Diabetes</span>
                    </div> */}
                </div>
            </div>
        </div>
      </div>
  )
}
