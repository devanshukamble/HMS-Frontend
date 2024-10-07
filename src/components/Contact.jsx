import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useInsertContactUsMutation } from "../services/hmsApi";
export default function Contact() {
  let [loading, setLoading] = React.useState(false);
  const [formData,setFormData] = React.useState({});
  const [insertContact] = useInsertContactUsMutation();
  const [serverErr,setServerErr] = React.useState({});
  function handleChange(e){
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  }
  async function handleSubmit(e){
    e.preventDefault()
    const res = await insertContact(formData)
    if (res.error){
      setServerErr(res.error.data)
      console.log(serverErr);
    }
    if(res.data){
      alert('message sent')
    }
  }
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <Navbar />
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
        <div>
          <div className="pt-16 w-full flex md:flex-row flex-col justify-center">
            <div className="md:w-[40%] w-full">
              <form className="w-full h-full p-2 flex flex-col" onSubmit={handleSubmit}>
                <span className="text-3xl text-bold ml-5">GET IN TOUCH</span>
                <div className="flex justify-between m-4">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    className="bg-[#EEEEEE] w-[45%] border-0 h-9 p-2 border-0 rounded-lg text-black"
                    placeholder={serverErr.name?String(serverErr.name[0]):"Your name"}
                  />
                  <input
                    type="text"
                    name="phoneno"
                    onChange={handleChange}
                    className="bg-[#EEEEEE] w-[45%] border-0 h-9 p-2 border-0 rounded-lg text-black"
                    placeholder={serverErr.phoneno?String(serverErr.phoneno[0]):"Phone Number"}
                  />
                </div>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  className="bg-[#EEEEEE] m-4 h-9 p-2 border-0 rounded-lg text-black"
                  placeholder={serverErr.email?String(serverErr.email[0]):"Your Email"}
                />
                <textarea
                  name="message"
                  onChange={handleChange}
                  cols="5"
                  rows="5"
                  className="bg-[#EEEEEE] border-0 m-4  p-2 border-0 rounded-lg text-black"
                  placeholder={serverErr.name?String(serverErr.name[0]):"Message"}
                />
                <button className="text-white ml-3 w-[95%] bg-[#178066] hover:bg-[#62D2A2] my-4 h-10 p-1 border-0 rounded-lg">
                  SEND
                </button>
              </form>
            </div>
            <div className="md:w-[40%] w-full md:p-4 p-1">
              <iframe
                title="iframe"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8859920873338!2d72.48585367513958!3d22.991219479195784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bc4ce73bf61%3A0x323634959dab072f!2sLJ%20University!5e0!3m2!1sen!2sin!4v1723838794466!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
