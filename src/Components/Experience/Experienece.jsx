import React, { useEffect } from "react";
import "./Experience.css";
import "./responsive.css";
import Phone from "../../Assetss/Iphone.svg";
import Vector from "../../Assetss/Vector 57.png";
import logo1 from "../../Assetss/apple (1).png";
import logo2 from "../../Assetss/Group.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out" });
  }, []);
  return (
    <div className="experience-container">
      <div className="experience-full-container">
        <div className="container-flux-container-contained">
          <div
            className="left-sectionn"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="600"
          >
            <div className="left-fluxxx">
              <div className="img-experience-contained">
                <img src={Vector} alt="Experience" />
              </div>
              <div className="heading-conatiner">
                <h2>Experience Nurse Booking, Redefined</h2>
              </div>
            </div>
            <div className="para-container">
              <p>
                At Nomad Nurse, we redefine the experience of dental nurse
                recruitment offering a platform that goes beyond the
                conventional. By choosing to work with us, dental nurses gain
                access to a seamless and user-friendly platform that
                effortlessly connects them with diverse opportunities
              </p>
            </div>
            <div className="button-container">
              <button>
                <div className="img-btn-flex-flux">
                  <img src={logo1} alt="Button 1 Logo" />
                  <span className="banggg text-svg">Download App</span>
                </div>
              </button>
              <button>
                <div className="img-btn-flex-flux">
                  <img src={logo2} alt="Button 1 Logo" />
                  <span className=" text-svg">Download App</span>
                </div>
              </button>
            </div>
          </div>

          <div
            className="right-sectionn"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="600"
          >
            <div className="image-conatiner">
              <img src={Phone} alt="Right Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
