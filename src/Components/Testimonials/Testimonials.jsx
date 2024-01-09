import React, { useState, useEffect } from "react";
import Img from "../../Assetss/text.svg";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Line from "../../Assetss/Line 91.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const [slider, setSlider] = useState(null);
  const [activeArrow, setActiveArrow] = useState("next");

  const handleNext = () => {
    if (slider) {
      slider.slickNext();
      setActiveArrow("next");
    }
  };

  const handlePrev = () => {
    if (slider) {
      slider.slickPrev();
      setActiveArrow("prev");
    }
  };

  const settings = {
    infinite: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <>
      <div className="testimonial-container">
        <div className="testi-full-container">
          <div
            className="testi-heading"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <h2>Testimonials</h2>
          </div>
          <div className="testi-img" data-aos="zoom-in" data-aos-duration="800">
            <img src={Img} alt="" />
          </div>
          <div
            className="testi-para"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <p>Hear how others have found the Nomad Nurse experience</p>
          </div>
          <div
            className="slider-container"
            // data-aos="zoom-in"
            // data-aos-duration="800"
          >
            <Slider ref={(c) => setSlider(c)} {...settings}>
              <div className="slider-item">
                <div className="h3-heading">
                  <h3>Yasmine</h3>
                </div>
                <div className="h5-heading">
                  <p>Locum Dental Nurse</p>
                </div>
                <div className="p-para">
                  <p>
                    “The platform has given me access to a wide range of
                    opportunities, and the process of securing positions is
                    seamless. I appreciate the consistent support and the chance
                    to work with various dental practices."
                  </p>
                </div>
              </div>{" "}
              <div className="slider-item">
                <div className="h3-heading">
                  <h3>Abigail</h3>
                </div>
                <div className="h5-heading">
                  <p>Locum Dental Nurse</p>
                </div>
                <div className="p-para">
                  <p>
                    “Working through Nomad Nurse has been a fantastic
                    experience. The platform is easy to navigate, and I've been
                    able to find rewarding positions quickly. The reliability
                    and professionalism of the company make it my go-to for
                    locum opportunities."
                  </p>
                </div>
              </div>{" "}
              <div className="slider-item">
                <div className="h3-heading">
                  <h3>The Witterings Dental Practice</h3>
                </div>
                <div className="h5-heading">
                  <p>Dental Practice</p>
                </div>
                <div className="p-para">
                  <p>
                    “The Nomad Nurse platform has become an indispensable tool
                    for our dental practice. Its user-friendly interface and
                    advanced features simplify the recruitment process, allowing
                    us to find qualified dental nurses swiftly. The efficiency
                    and reliability of the platform make it an essential asset
                    in managing our staffing needs."
                  </p>
                </div>
              </div>{" "}
              <div className="slider-item">
                <div className="h3-heading">
                  <h3>Dentistry @ Oceana Boulevard</h3>
                </div>
                <div className="h5-heading">
                  <p>Dental Practice</p>
                </div>
                <div className="p-para">
                  <p>
                    “The platform's innovative approach to dental nurse
                    recruitment ensures that we can access a diverse pool of
                    skilled nurses with just a few clicks. It's a modern
                    solution that has significantly improved our overall
                    efficiency.
                  </p>
                </div>
              </div>{" "}
            </Slider>
            <div className="custom-arrows">
              <div
                className={`custom-arrow custom-prev ${
                  activeArrow === "prev" ? "active" : ""
                }`}
                onClick={handlePrev}
              >
                {">"}
              </div>
              <div
                className={`custom-arrow custom-next ${
                  activeArrow === "next" ? "active" : ""
                }`}
                onClick={handleNext}
              >
                {"<"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          // maxWidth: "1440px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // alignSelf: "center",
          // width: "100%",
          // backgroundColor: "red",
        }}
      >
        {/* <div className="line-contained">
          <img src={Line} alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Testimonials;
