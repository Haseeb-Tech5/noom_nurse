import React, { useState, useEffect } from "react";
import "./Register.css";
import Img from "../../Assetss/Avatar1 (1).png";
import Img1 from "../../Assetss/Avatar2.png";
import Img2 from "../../Assetss/Avatar3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Register = () => {
  useEffect(() => {
    AOS.init({ easing: "ease-out" });
  }, []);

  const [showForm, setShowForm] = useState(false);

  const images = [
    { src: Img, className: "avatar1" },
    { src: Img1, className: "avatar2" },
    { src: Img2, className: "avatar3" },
  ];

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div
      className="register-container"
      data-aos="zoom-in"
      data-aos-duration="800"
    >
      <div className="whole-contained">
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
        <div className="header1">
          <h2>Register and be the first to find out when we launch!</h2>
        </div>
        <div className="button-contained">
          <button onClick={handleOpenForm}>Register Now</button>
        </div>

        <Modal show={showForm} onHide={handleCloseForm} centered>
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
                          I consent to my personal data being stored and used in
                          accordance with the{" "}
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
        </Modal>
      </div>
    </div>
  );
};

export default Register;
