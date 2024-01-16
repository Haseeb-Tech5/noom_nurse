import React, { useState } from "react";
import "./Video.css";
import Video1 from "../Video/video.mp4";
import imgg from "../../Components/Video/video-0.jpg";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import yourGif from "../Video/ezgif.gif";

const Video = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    subject: "",
    message: "",
    consentCheckbox: false,
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoError = () => setVideoError(true);
  const handleVideoLoaded = () => setVideoLoaded(true);

  const handleOpenForm = () => setShowForm(true);

  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({
      name: "",
      role: "",
      email: "",
      subject: "",
      message: "",
      consentCheckbox: false,
    });
    setErrors({});
    setSubmitMessage("");
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    // Clear the error when the user starts typing in the field
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("https://nmapi.drnaiz.com/contact.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log("Server response:", responseData);

          if (responseData.success) {
            setSubmitMessage("Message submitted successfully");
          } else {
            setSubmitMessage(
              responseData.message || "Message submission failed"
            );
          }
        } else {
          console.error("Failed to submit the form");
          setSubmitMessage("Failed to submit the form");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitMessage("An error occurred while submitting the form");
      }
    } else {
      console.log("Form validation failed");
      setSubmitMessage("Form validation failed");
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.role) {
      errors.role = "Please select a role";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (!formData.consentCheckbox) {
      errors.consentCheckbox = "You must consent to the privacy policy";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="video-container2">
      {/* <video
        src={Video1}
        autoPlay
        loop
        muted
        className="video"
        onError={handleVideoError}
        onLoadedData={handleVideoLoaded}
      /> */}
      <img
      src={yourGif}
      className="video"
      style={{
        width:"100%",
        opacity:"50%"
      }}
      />

      {/* <div
        style={
          !videoLoaded && !videoError
            ? { display: "block" }
            : { display: "none" }
        }
        className="video-gap1"
      >
        <img src={imgg} alt="" />

      </div> */}

      <div className="video-heading-container">
        <h2>Connecting Nurses to Practices Bridging Excellence Together</h2>
        <button onClick={handleOpenForm}>Join now</button>
      </div>
      <div className="video-gap">
        <img src={yourGif} alt="GIF" />
      </div>
      <Modal show={showForm} onHide={handleCloseForm} centered>
        <Modal.Header closeButton>
          <Modal.Title>Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="right-touch3">
              <div className="right-section-content">
                <div className="form-container2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <div className="error-message">{errors.name}</div>

                  <label htmlFor="role">Your Role</label>
                  <div className="custom-select">
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="ddd"
                    >
                      <option value="" disabled hidden>
                        Choose your role
                      </option>
                      <option value="role1">Dental Nurse</option>
                      <option value="role2">Dental Practice</option>
                      <option value="role3">Dental Corporate</option>
                    </select>
                  </div>
                  <div className="error-message">{errors.role}</div>

                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <div className="error-message">{errors.email}</div>
                </div>
                <div className="form-container2">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  <div className="error-message">{errors.subject}</div>

                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  <div className="error-message">{errors.message}</div>
                </div>
                <div className="form-container2">
                  <div className="cccc">
                    <div className="form-checkbox">
                      <input
                        type="checkbox"
                        id="consentCheckbox"
                        name="consentCheckbox"
                        className="custom-checkbox"
                        checked={formData.consentCheckbox}
                        onChange={handleInputChange}
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
                        <div className="error-message">
                          {errors.consentCheckbox}
                        </div>
                      </p>
                    </div>
                  </div>
                  <div className="form-button">
                    <button type="submit">Register</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Video;
