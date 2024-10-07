import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import bg from "../images/hospital.jpg";
import dep1 from "../images/s1.png";
import dep2 from "../images/s2.png";
import dep3 from "../images/s3.png";
import dep4 from "../images/s4.png";
import ScaleLoader from "react-spinners/ScaleLoader";
export default function Home() {
  let [loading, setLoading] = React.useState(false);
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
          <Hero />
          {/* about use section */}
          <section>
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
              {/* Title */}
              <h2 className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14 text-[#178066]">
                Meet MediManage
              </h2>
              <p className="mb-8 lg:w-[80%] w-full text-sm text-gray-500 sm:text-base lg:mb-24">
                Welcome to MediManage, where compassionate care and cutting-edge
                medical expertise come together to serve our community. For
                years, we have been dedicated to providing comprehensive
                healthcare services to patients of all ages. Our team of highly
                skilled doctors, nurses, and support staff are committed to
                delivering personalized care in a safe and welcoming
                environment.
              </p>
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                <img
                  src={bg}
                  alt=""
                  className="inline-block h-full w-full rounded-2xl object-cover"
                />
                <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
                  <h2 className="text-3xl font-bold md:text-5xl text-[#178066]">
                    Our Mission
                  </h2>
                  <p className="text-sm text-gray-500 sm:text-base">
                    Our mission at MediManage is to provide exceptional healthcare
                    services with compassion, respect, and integrity. We are
                    dedicated to improving the health and well-being of our
                    community by delivering high-quality, patient-centered care
                    that is accessible and affordable. Through innovation,
                    advanced technology, and a commitment to excellence, we
                    strive to create a healing environment where every patient
                    feels valued, understood, and supported. We are focused on
                    fostering a culture of continuous improvement, education,
                    and collaboration to ensure the best possible outcomes for
                    all those we serve.
                    <br />
                    <br />
                    Compassionate Care, Exceptional Outcomes.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* departments section */}
          <div>
            {/* <Navbar /> */}
            <div className="p-2">
              <div className="headline flex flex-col items-center p-2">
                <span className="uppercase sm:text-4xl text-3xl m-3 text-[#178066]">
                  our departments
                </span>
                <span className="text-lg p-2 text-center">
                  Our hospital offers specialized departments providing
                  comprehensive care across various medical fields to meet all
                  patient needs.
                </span>
              </div>
              <div className="depts flex lg:flex-row flex-col items-center justify-evenly mt-5">
                <div className="flex flex-col text-center items-center mt-5 lg:w-[18%] sm:w-[75%] w-full">
                  <div className="bg-[#62D2A2] w-fit p-4 rounded-[100%]">
                    <img src={dep1} alt="" className="h-[8vh]" />
                  </div>
                  <span className="uppercase font-bold text-xl mt-2">
                    cardiology
                  </span>
                  <span className="text-sm">
                    Cardiology is a branch of medicine that focuses on the
                    diagnosis, treatment, and prevention of diseases and
                    conditions related to the heart and blood vessels.
                  </span>
                </div>
                <div className="flex flex-col text-center items-center mt-5 lg:w-[18%] sm:w-[75%] w-full">
                  <div className="bg-[#62D2A2] w-fit p-4 rounded-[100%]">
                    <img src={dep2} alt="" className="h-[8vh]" />
                  </div>
                  <span className="uppercase font-bold text-xl mt-2">
                    Diagnosis
                  </span>
                  <span className="text-sm">
                    Diagnosis is the process of identifying a disease or
                    condition based on a patient's symptoms, medical history,
                    physical examination, and diagnostic tests..
                  </span>
                </div>
                <div className="flex flex-col text-center items-center mt-5 lg:w-[18%] sm:w-[75%] w-full">
                  <div className="bg-[#62D2A2] w-fit p-4 rounded-[100%]">
                    <img src={dep3} alt="" className="h-[8vh]" />
                  </div>
                  <span className="uppercase font-bold text-xl mt-2">
                    Surgery
                  </span>
                  <span className="text-sm">
                    Surgery is a medical specialty that involves the use of
                    operative techniques to investigate, treat, or manage
                    diseases, injuries, or deformities.
                  </span>
                </div>
                <div className="flex flex-col text-center items-center mt-5 lg:w-[18%] sm:w-[75%] w-full">
                  <div className="bg-[#62D2A2] w-fit p-4 rounded-[100%]">
                    <img src={dep4} alt="" className="h-[8vh]" />
                  </div>
                  <span className="uppercase font-bold text-xl mt-2">
                    First Aid
                  </span>
                  <span className="text-sm">
                    First aid is the immediate care provided to an injured or
                    ill person before professional medical help arrives. It aims
                    to preserve life, prevent the condition from worsening, and
                    promote recovery.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* contact us section */}
          <div className="mt-16 w-full flex md:flex-row flex-col justify-center">
            <div className="md:w-[40%] w-full">
              <form action="#" className="w-full h-full p-2 flex flex-col">
                <span className="text-3xl text-bold ml-5 text-[#178066]">GET IN TOUCH</span>
                <div className="flex justify-between m-4">
                  <input
                    type="text"
                    className="bg-[#EEEEEE] w-[45%] border-0 h-9 p-2 border-0 rounded-lg text-black"
                    placeholder="Your name"
                  />
                  <input
                    type="text"
                    className="bg-[#EEEEEE] w-[45%] border-0 h-9 p-2 border-0 rounded-lg text-black"
                    placeholder="Phone Number"
                  />
                </div>
                <input
                  type="text"
                  className="bg-[#EEEEEE] m-4 h-9 p-2 border-0 rounded-lg text-black"
                  placeholder="Email"
                />
                <textarea
                  name="message"
                  cols="5"
                  rows="5"
                  className="bg-[#EEEEEE] border-0 m-4  p-2 border-0 rounded-lg text-black"
                  placeholder="Message"
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
