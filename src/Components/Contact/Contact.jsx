import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Register from "../Register/Register";
import React, { useEffect, useState } from "react";
import "./Contact.css";
import Vector from "../../Assetss/Vector (3).png";
import Img from "../../Assetss/Group 1000001058.png";
import Line from "../../Assetss/Line 91.png";
import Face from "../../Assetss/facebook.png";
import Insta from "../../Assetss/instagram.png";
import Din from "../../Assetss/linkedin.png";
import Vector1 from "../../Assetss/Vector (2).png";
import Img1 from "../../Assetss/group3.png";
import Img2 from "../../Assetss/group2.png";
import Img3 from "../../Assetss/Group 4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Img4 from "../../Assetss/Avatar1 (1).png";
import Img5 from "../../Assetss/Avatar2.png";
import Img6 from "../../Assetss/Avatar3.png";
import { BounceLoader } from "react-spinners";
import { animateScroll as scroll, Events, scrollSpy } from "react-scroll";

import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const Contact = () => {
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
  const images = [
    { src: Img4, className: "avatar1" },
    { src: Img5, className: "avatar2" },
    { src: Img6, className: "avatar3" },
  ];
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);
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
          <div>
            <Navbar />
            <div
              className="flex"
              style={{
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div className="touch-container1">
                <div className="touch-container-full">
                  <div
                    className="touch-heading1"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                  >
                    <h2>Get in touch</h2>
                  </div>
                  <div
                    className="touch-img1"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                  >
                    <img src={Vector} alt="" />
                  </div>
                  <div
                    className="touch-para1"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                  >
                    <p>Drop us a message to see how we can help you</p>
                  </div>
                  <div className="touch-container-contained1">
                    <div
                      className="left-touch2"
                      data-aos="fade-right"
                      data-aos-offset="200"
                      data-aos-duration="600"
                    >
                      <div className="left-section-content1">
                        <div className="left-section-content-container1">
                          <div className="le">
                            <div className="le-image">
                              <img src={Img} alt="" />
                            </div>
                          </div>
                          <div className="re">
                            <div className="re-heading1">Office Address</div>
                            <div className="re-para1">
                              Nomad Nurse, 4th Floor, Silverstream House, 45
                              Fitzroy Street, Fitzrovia, London, W1T 6EB
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="left-section-content1">
                        <div className="left-section-content-container1">
                          <div className="le">
                            <div className="le-image1">
                              <img src={Img3} alt="" />
                            </div>
                          </div>
                          <div className="re">
                            <div className="re-heading1">Office Timings</div>
                            <div className="re-para1">
                              Monday - Friday 9:00am to 5:00pm
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="left-section-content1">
                        <div className="left-section-content-container1">
                          <div className="le">
                            <div className="le-image">
                              <img src={Img1} alt="" />
                            </div>
                          </div>
                          <div className="re">
                            <div className="re-heading1">Emai Address</div>
                            <div className="re-para1">
                              info@nomadnurse.co.uk
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="left-section-content1">
                        <div className="left-section-content-container1">
                          <div className="le">
                            <div className="le-image">
                              <img src={Img2} alt="" />
                            </div>
                          </div>
                          <div className="re">
                            <div className="re-heading1">Phone Number</div>
                            <div className="re-para1">0204 538 6233</div>
                          </div>
                        </div>
                      </div>
                      <div className="follow-container">
                        <div className="follow-para">
                          <p>Follow us on Social Media:</p>
                        </div>
                        <div className="whole-container-right">
                          <a href="  https://www.facebook.com/nomadnurseuk">
                            {" "}
                            <img src={Face} alt="" />
                          </a>
                          <a href="https://www.instagram.com/nomadnurseuk/">
                            <img src={Insta} alt="Instagram" />
                          </a>
                          <img src={Din} alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="right-touch1"
                      data-aos="fade-left"
                      data-aos-offset="200"
                      data-aos-duration="600"
                    >
                      <div className="right-section-content1">
                        <div className="form-container">
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
                          <label htmlFor="message">Message</label>
                          <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message here"
                          ></textarea>
                        </div>
                        <div className="form-container">
                          <div className="cccc">
                            <div className="form-checkbox1">
                              <input
                                type="checkbox"
                                id="consentCheckbox"
                                className="custom-checkbox"
                              />
                            </div>
                            <div className="para-form2">
                              <p>
                                I consent to my personal data being stored and
                                used in accordance with the{" "}
                                <Link
                                  to="/privacy"
                                  onClick={scrollToTop}
                                  style={{
                                    color: "#6b7280",
                                    cursor: "pointer",
                                  }}
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
                  <div
                    className="register-container"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                  >
                    <div className="whole-contained1">
                      <div className="images-contained">
                        {images.map((image, index) => (
                          <img
                            key={index}
                            src={image.src}
                            alt=""
                            className={image.className}
                          />
                        ))}
                      </div>
                      <div className="header4">
                        <h2>
                          Register and be the first to find out when we launch!
                        </h2>
                      </div>
                      <div className="button-contained">
                        <button onClick={handleOpenForm}>Register Now</button>
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
                                        <option value="role1">
                                          Dental Nurse
                                        </option>
                                        <option value="role2">
                                          Dental Practice
                                        </option>
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
                                          <option value="role1">
                                            Dental Nurse
                                          </option>
                                          <option value="role2">
                                            Dental Practice
                                          </option>
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
                                        I consent to my personal data being
                                        stored and used in accordance with the{" "}
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
                  </div>
                  <div className="key-container4">
                    <img src={Line} alt="" />
                  </div>
                  <div className="whole-container-sb1">
                    <div className="whole-container-left">
                      <Link
                        to="/cookies"
                        style={{ textDecoration: "none" }}
                        onClick={scrollToTop}
                      >
                        <div className="whole-items">Cookie Policy</div>
                      </Link>
                      <Link
                        to="/privacy"
                        style={{ textDecoration: "none" }}
                        onClick={scrollToTop}
                      >
                        <div className="whole-items">Privacy policy</div>
                      </Link>
                      <Link
                        to="/terms&conditions"
                        style={{ textDecoration: "none" }}
                        onClick={scrollToTop}
                      >
                        <div className="whole-items">Terms & conditions</div>
                      </Link>
                    </div>
                    <div className="whole-container-right">
                      <a href="  https://www.facebook.com/nomadnurseuk">
                        <img src={Face} alt="" />
                      </a>
                      <a href="https://www.instagram.com/nomadnurseuk/">
                        <img src={Insta} alt="Instagram" />
                      </a>
                      <img src={Din} alt="" />
                    </div>
                  </div>
                  <div className="title-container1">
                    <h2>© 2023 Nomad Nurse Ltd. All rights reserved.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
