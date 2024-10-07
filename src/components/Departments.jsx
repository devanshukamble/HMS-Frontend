import React from "react";
import Navbar from "./Navbar";
import dep1 from "../images/s1.png";
import dep2 from "../images/s2.png";
import dep3 from "../images/s3.png";
import dep4 from "../images/s4.png";
import Footer from "./Footer";
import ScaleLoader from "react-spinners/ScaleLoader";
export default function Departments() {
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
                  Diagnosis is the process of identifying a disease or condition
                  based on a patient's symptoms, medical history, physical
                  examination, and diagnostic tests..
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
                  First aid is the immediate care provided to an injured or ill
                  person before professional medical help arrives. It aims to
                  preserve life, prevent the condition from worsening, and
                  promote recovery.
                </span>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
