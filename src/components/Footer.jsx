import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function Footer() {
  const [formData,setFormData] = React.useState({});
  function handleChange(e){
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
  }
  async function handleSubmit(e){
    e.preventDefault();
    const response = axios.post('http://127.0.0.1:8000/api/user/newsleter/',formData)
    if(response.data){
      alert('email sent')
    }
  } 
  return (
    <div className='footer-con w-full bg-[#178066] text-white p-6'>
      <div className='footer-links flex md:flex-row flex-col justify-evenly w-full'>
        <div className='foot1 flex flex-col md:w-1/4 w-full p-1'>
            <span className='text-2xl my-3'>Reach at..</span>
            <span><i className="fa-solid fa-location-dot"></i> Location</span>
            <span className='whitespace-nowrap'><i className="fa-solid fa-phone"></i> Call +91 9512587536</span>
            <span><i className="fa-solid fa-envelope"></i> demo@gmail.com</span>
            <div className='my-3 flex justifyLinkevenly items-center w-fit'>
                <a href="#" className='text-2xl mx-2 ml-0'><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className='text-2xl mx-2'><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" className='text-2xl mx-2'><i className="fa-brands fa-linkedin"></i></a>
                <a href="#" className='text-2xl mx-2'><i className="fa-brands fa-instagram"></i></a>
            </div>
        </div>
        <div className='foot2 flex flex-col md:w-1/4 w-full p-1'>
            <span className='text-2xl my-3'>About</span>
            <span className='w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate maiores nam inventore autem libero.</span>
        </div>
        <div className='foot3 flex flex-col md:w-1/4 w-full p-1 md:pl-14'>
        <span className='text-2xl my-3'>Links</span>
            <div className='flex my-1'>
            <Link to="/">Home</Link>
            <Link to=".about" className='mx-4'>About</Link>
            </div>
            <Link to="/departments" className=' mt-1'>Departments</Link>
            <Link to="/doctors" className=' mt-1'>Doctors</Link>
            <Link to="/contact" className=' mt-1'>Contact us</Link>
            <Link to="/login" className=' mt-1'>login/signup</Link>
        </div>
        <div className='foot4 flex flex-col md:w-1/4 w-full p-1'>
            <form className='flex flex-col p-2' onSubmit={handleSubmit}>
              <span className='text-2xl my-3'>Newsletter</span>
              <input type="text" name='email' onChange={handleChange} placeholder='Enter email' className='h-9 p-2 border-0 rounded-lg text-black'/>
              <button className='bg-[#62D2A2] hover:bg-[#62D2B4] my-4 h-10 p-1 border-0 rounded-lg'>Subscribe</button>
            </form>
        </div>
      </div>
      <div className='copyrights text-center mt-10'>
        <span className='text-sm'><i className="fa-regular fa-copyright"></i> All rights reserved by MediManage</span>
      </div>
    </div>
  )
}