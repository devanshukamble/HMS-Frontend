import React from "react";
import Navbar from "./Navbar";
import aboutBg from "../images/about-img.jpg";
import Footer from "./Footer";
import ScaleLoader from "react-spinners/ScaleLoader";
export default function About() {
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
          <section>
            {/* Container */}
            <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
              {/* Component */}
              <div className="flex flex-col items-center gap-14 lg:gap-20">
                {/* Image */}
                <img src={aboutBg} alt="" className="w-[80%] rounded-xl" />
                {/* Content */}
                <div className="flex flex-col items-center gap-14 lg:gap-20">
                  <div className="w-[80%] flex flex-col md:flex-row gap-5">
                    <h2 className="text-[#178066] text-3xl md:text-5xl font-bold flex-1">
                      Vision
                    </h2>
                    <p className="flex-1">
                      To be a leading provider in healthcare services, we shall
                      achieve 2000 beds under our management by 2026 and become
                      the most preferred destination for comprehensive medical
                      care and treatment.
                    </p>
                  </div>
                  <div className="w-[80%] flex flex-col md:flex-row gap-5">
                    <h2 className="text-[#178066] text-3xl md:text-5xl font-semibold flex-1">
                      Mission
                    </h2>
                    <p className="flex-1">
                      To provide world standard healthcare solutions to the
                      community by leveraging advances in medical research
                      science and technology and adoption of best management
                      practices.
                    </p>
                  </div>
                  <div className="w-[80%] flex flex-col md:flex-row gap-5">
                    <h2 className="text-[#178066] text-3xl md:text-5xl font-bold flex-1">
                      our core values
                    </h2>
                    <p className="flex-1">
                      We, the members of the Zydus Hospitals, hold the following
                      values to be the foundation of our identity. We shall
                      endeavour to think and act at all times in accordance with
                      these values.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      )}
    </>
  );
}
