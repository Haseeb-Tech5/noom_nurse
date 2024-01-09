import React, { useState, useEffect } from "react";
import "./Nurse.css";
import Tooth from "../../Assetss/tooth.png";
import Rect from "../../Assetss/Rectangle.jpg";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";

import background from "../../Assetss/Capawad 2.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Data = [
  { animation: "fadeInFromLeft", text: "Industry Leading Pay" },
  { animation: "fadeOutToRight", text: "Industry Leading Pay" },
  { animation: "fadeInFromRight", text: "Weekly Payments" },
  { animation: "fadeOutToBottom", text: "Weekly Payments" },
  { animation: "fadeInFromBottom", text: "Flexibility" },
  { animation: "fadeOutToTop", text: "Flexibility" },
  { animation: "fadeInFromTop", text: "Bonuses" },
  { animation: "fadeOutToLeft", text: "Bonuses" },
  { animation: "fadeInFromLeft", text: "Cosmopolitan Scrubs" },
  { animation: "fadeOutToBottom", text: "Cosmopolitan Scrubs" },
  { animation: "fadeInFromBottom", text: "Discounted Dental Treatments" },
  { animation: "fadeOutToRight", text: "Discounted Dental Treatments" },
  { animation: "fadeInFromRight", text: "Interactive App" },
  { animation: "fadeOutToLeft", text: "Interactive App" },
];

const Nurse = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out" });
  }, []);
  const [counter, setCounter] = React.useState(0);
  const [data, setData] = React.useState(Data[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % Data.length);
    }, 1500);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []); // Empty dependency array to run effect only once on mount

  useEffect(() => {
    setData(Data[counter]);
  }, [counter]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);
  return (
    <div className="nurse-container">
      <div className="background">
        <img src={background} alt="" />
      </div>
      <div className="nurse-full-contained">
        <div
          className="nurse-left"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="600"
        >
          <div
            className="nurse-logo"
            // data-aos="zoom-in"
            // data-aos-duration="800"
          >
            <img src={Tooth} alt="" />
          </div>
          <div
            className="nurse-heading"
            // data-aos="zoom-in"
            // data-aos-duration="800"
          >
            <h2>
              Why <span style={{ color: "#497367" }}>Nurses</span> should join
              us!
            </h2>
          </div>
          <div
            className="nurse-para"
            // data-aos="zoom-in"
            // data-aos-duration="800"
          >
            <p>
              At Nomad Nurse, we redefine the experience of dental nurse
              recruitment offering a platform that goes beyond the conventional.
              We understand the unique challenges faced by both dental practices
              and nurses in the industry. By choosing to work with us, dental
              nurses gain access to a seamless and user-friendly platform that
              effortlessly connects them with diverse opportunities. We
              prioritize transparency, reliability, and efficiency in the
              recruitment process, ensuring that every match is not just a
              placement but a harmonious collaboration. Join us in shaping the
              future of dental care staffing, where your skills are valued, and
              your career is empowered.
            </p>
          </div>

          <div className="nurse-button">
            <button onClick={handleOpenForm}>Join now</button>
          </div>
          <Modal
            show={showForm}
            onHide={handleCloseForm}
            centered // Add this prop to center the modal vertically
          >
            <Modal.Header closeButton>
              <Modal.Title>Registration Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="right-touch3">
                  <div className="right-section-content">
                    <div className="form-container2">
                      <div className="firstView">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your name"
                        />
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
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                          />
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
                        </>

                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="form-container2">
                      <div className="cccc">
                        <div className="form-checkbox">
                          <input
                            type="checkbox"
                            id="consentCheckbox"
                            className="custom-checkbox"
                          />
                        </div>
                        <div className="para-form10">
                          <p>
                            I consent to my personal data being stored and used
                            in accordance with the{" "}
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
                        <button>Register</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Modal.Body>
            {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseForm}>
              Close
            </Button>
          </Modal.Footer> */}
          </Modal>
        </div>
        <div
          className="nurse-right"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="600"
        >
          <div className="hmmmmm"></div>
          <div className="nurse-animation ">
            <p className={data.animation}>{data.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nurse;
