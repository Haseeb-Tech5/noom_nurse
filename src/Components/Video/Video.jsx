import React, { useState, useEffect } from "react";
import "./Video.css";
import Video1 from "../Video/video.mp4";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import yourGif from "../Video/ezgif.gif";

const Video = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);
  return (
    <div className="video-container2">
      <video src={Video1} autoPlay loop muted className="video" />
      <div className="video-heading-container">
        <h2>Connecting Nurses to Practices Bridging Excellence Together</h2>
        <button onClick={handleOpenForm}>Join now</button>
      </div>
      <div className="video-gap">
        <img src={yourGif} alt="GIF" />
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
        {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseForm}>
              Close
            </Button>
          </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default Video;
