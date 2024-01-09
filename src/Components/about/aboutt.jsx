import Navbar from "../Navbar/Navbar";
import video2 from "../about/hmm.mp4";
import Vector from "../../Assetss/text.svg";
import Touch from "../Touch/Touch";
import "./about.css";
import Testimonials from "../Testimonials/Testimonials";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Line from "../../Assetss/Line 91.png";
import Img from "../../Assetss/text.svg";
import Img22 from "../../Assetss/Group 1000001058.png";

import AOS from "aos";
import "aos/dist/aos.css";
import Face from "../../Assetss/facebook.png";
import Insta from "../../Assetss/instagram.png";
import Link1 from "../../Assetss/linkedin.png";
import Img1 from "../../Assetss/group3.png";
import Img2 from "../../Assetss/group2.png";
import Img3 from "../../Assetss/Group 4.png";
import { Link } from "react-router-dom";
import { animateScroll as scroll, Events, scrollSpy } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import yourGif from "../about/ezgi22f.gif";

export default function About() {
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
  const [isLoading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const delay = 3000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out" });
  }, []);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      {isLoading ? (
        <div className="loading-overlay">
          <BounceLoader
            color="rgba(174, 156, 127, 0.607)"
            loading={isLoading}
            size={100}
          />
          <img src="tooth.png" alt="Tooth Image" className="centered-image" />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="video-container">
            <video src={video2} autoPlay loop muted className="video" />
            <div className="video-gap22">
              <img src={yourGif} alt="GIF" />
            </div>
            <div className="video-heading-container">
              {/* <div className="about-head"> */}
              <h2 style={{ color: "white" }}>Our Mission</h2>

              <img src={Vector} alt="" />

              <div className="about-para2">
                <p>Empowering dental staffing through seamless connections</p>
              </div>
              {/* <div className="video-gap22">
                <img src={yourGif} alt="GIF" />
              </div> */}
              {/* </div> */}
              {/* <div className="story-container">
                <div className="width-container">
                  <div className="about-heading">
                    <h2>About us</h2>
                  </div>
                  <div className="about-img">
                    <img src={Vector} alt="" />
                  </div>
                  <div className="about-para2">
                    <p>
                      The inception of Nomad Nurses arose from our personal
                      experiences within the dental profession. We encountered
                      difficulties in booking and securing nurses, realising
                      that nurses lacked the means and access to practices
                      seeking locum professionals.
                    </p>
                  </div>
                  <div className="about-para2">
                    <p>
                      Through the creation of our ground-breaking app and
                      website, we successfully filled this void, facilitating
                      communication between locum nurses and dental practices to
                      minimise the disruption faced by dentists and patients.
                    </p>
                  </div>
                  <div className="about-para2">
                    <p>
                      As practicing dentists without a dedicated nurse, we
                      recognised the vital significance of this venture for the
                      dental industry. Our objective is to streamline the
                      process of booking dental nurses for practices, ensuring a
                      seamless experience and enabling nurses to find
                      opportunities with the touch of a button.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="story-container">
            <div className="width-container">
              <div
                className="story-heading"
                // data-aos="zoom-in"
                // data-aos-duration="800"
              >
                <h2>About us</h2>
              </div>
              <div
                className="story-img"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <img src={Vector} alt="" />
              </div>
              <div
                className="story-para"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <p>
                  The inception of Nomad Nurses arose from our personal
                  experiences within the dental profession. We encountered
                  difficulties in booking and securing nurses, realising that
                  nurses lacked the means and access to practices seeking locum
                  professionals.
                </p>
              </div>
              <div
                className="story-para"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <p>
                  Through the creation of our ground-breaking app and website,
                  we successfully filled this void, facilitating communication
                  between locum nurses and dental practices to minimise the
                  disruption faced by dentists and patients.
                </p>
              </div>
              <div
                className="story-para"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <p>
                  As practicing dentists without a dedicated nurse, we
                  recognised the vital significance of this venture for the
                  dental industry. Our objective is to streamline the process of
                  booking dental nurses for practices, ensuring a seamless
                  experience and enabling nurses to find opportunities with the
                  touch of a button.
                </p>
              </div>
            </div>
          </div>
          <div className="flex" style={{ overflow: "hidden" }}>
            {/* <Testimonials /> */}
            <div className="testimonial-container">
              <div className="testi-full-container">
                <div
                  className="testi-heading"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  <h2>Testimonials</h2>
                </div>
                <div
                  className="testi-img"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
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
                          opportunities, and the process of securing positions
                          is seamless. I appreciate the consistent support and
                          the chance to work with various dental practices."
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
                          experience. The platform is easy to navigate, and I've
                          been able to find rewarding positions quickly. The
                          reliability and professionalism of the company make it
                          my go-to for locum opportunities."
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
                          “The Nomad Nurse platform has become an indispensable
                          tool for our dental practice. Its user-friendly
                          interface and advanced features simplify the
                          recruitment process, allowing us to find qualified
                          dental nurses swiftly. The efficiency and reliability
                          of the platform make it an essential asset in managing
                          our staffing needs."
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
                          recruitment ensures that we can access a diverse pool
                          of skilled nurses with just a few clicks. It's a
                          modern solution that has significantly improved our
                          overall efficiency.
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
              {/* <div className="line-contained3">
                <img src={Line} alt="" />
              </div> */}
            </div>
            {/* <div style={{ marginTop: "-1%" }}>
              <Touch />
            </div> */}
            <div className="touch-container10">
              <div className="touch-container-full">
                <div
                  className="touch-heading"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  <h2>Get in touch</h2>
                </div>
                <div
                  className="touch-img"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  <img src={Vector} alt="" />
                </div>
                <div
                  className="touch-para"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  <p>Drop us a message to see how we can help you</p>
                </div>
                <div className="touch-container-contained">
                  <div
                    className="left-touch"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="600"
                  >
                    <div className="left-section-content">
                      <div className="left-section-content-container">
                        <div className="le">
                          <div className="le-image">
                            <img src={Img22} alt="" />
                          </div>
                        </div>
                        <div className="re">
                          <div className="re-heading">Office Address</div>
                          <div className="re-para">
                            Nomad Nurse, 4th Floor, Silverstream House, 45
                            Fitzroy Street, Fitzrovia, London, W1T 6EB
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="left-section-content">
                      <div className="left-section-content-container">
                        <div className="le">
                          <div className="le-image">
                            <img src={Img1} alt="" />
                          </div>
                        </div>
                        <div className="re">
                          <div className="re-heading">Email Address</div>
                          <div className="re-para">info@nomadnurse.co.uk</div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="left-section-content">
                      <div className="left-section-content-container">
                        <div className="le">
                          <div className="le-image">
                            <img src={Img2} alt="" />
                          </div>
                        </div>
                        <div className="re">
                          <div className="re-heading">Phone Number</div>
                          <div className="re-para">0204 538 6233</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="right-touch"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-duration="600"
                  >
                    <div className="right-section-content">
                      <div className="form-container">
                        <div className="firstView">
                          <div className="flex-container">
                            <div className="flex-item">
                              <label htmlFor="name">Name</label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                              />
                            </div>

                            <div className="flex-item">
                              <label htmlFor="role">Your Role</label>
                              <div className="custom-select">
                                <select
                                  id="role"
                                  name="role"
                                  defaultValue=""
                                  className="ddd"
                                >
                                  <option value="" disabled hidden>
                                    Choose your role
                                  </option>
                                  <option value="role1">Dental Nurse</option>
                                  <option value="role2">Dental Practice</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                          />
                        </div>

                        <div className="scndview">
                          <>
                            <div className="flex-container">
                              <div className="flex-item">
                                <label htmlFor="name">Name</label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Your name"
                                />
                              </div>
                              <div className="flex-item">
                                <label htmlFor="email">Email</label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  placeholder="Your email"
                                />
                              </div>
                            </div>
                          </>

                          <label htmlFor="role">Your Role</label>
                          <div className="custom-select">
                            <select
                              id="role"
                              name="role"
                              defaultValue=""
                              className="ddd"
                            >
                              <option value="" disabled hidden>
                                Choose your role
                              </option>
                              <option value="role1">Dental Nurse</option>
                              <option value="role2">Dental Practice</option>
                            </select>
                          </div>
                        </div>
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Write your message here"
                        />
                      </div>
                      <div className="form-container">
                        <div className="cccc">
                          <div className="form-checkbox">
                            <input
                              type="checkbox"
                              id="consentCheckbox"
                              className="custom-checkbox"
                            />
                          </div>
                          <div className="para-form1">
                            <p>
                              I consent to my personal data being stored and
                              used in accordance with the{" "}
                              <Link
                                to="/privacy"
                                onClick={scrollToTop}
                                style={{ color: "#6b7280" }}
                              >
                                privacy policy.
                              </Link>
                            </p>
                          </div>
                        </div>

                        <div className="form-button">
                          <button>Send Message</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="key-container">
                  <img src={Line} alt="" />
                </div>

                <div className="whole-container-sb">
                  <div className="whole-container-left">
                    <Link
                      to="/cookies"
                      onClick={scrollToTop}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="whole-items">Cookie Policy</div>
                    </Link>
                    <Link
                      to="/privacy"
                      onClick={scrollToTop}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="whole-items">Privacy policy</div>
                    </Link>
                    <Link
                      to="/terms&conditions"
                      onClick={scrollToTop}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="whole-items">Terms & conditions</div>
                    </Link>
                  </div>

                  <div className="whole-container-right">
                    <a href="  https://www.facebook.com/nomadnurseuk">
                      <img src={Face} alt="Face" />
                    </a>

                    <a href="https://www.instagram.com/nomadnurseuk/">
                      <img src={Insta} alt="Instagram" />
                    </a>

                    <a>
                      <img src={Link1} alt="Din" />
                    </a>
                  </div>
                </div>
                <div className="title-container1">
                  <h2>© 2023 Nomad Nurse Ltd. All rights reserved.</h2>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
