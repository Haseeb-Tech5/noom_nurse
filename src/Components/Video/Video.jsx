import React, { useState } from "react";
import "./Video.css";
import Video1 from "../Video/video-compress.mp4";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import yourGif from "../Video/output-onlinegiftools.gif";
import home from "../../Assetss/home.jpeg";

const Video = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    consentCheckbox: false,
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);

  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({
      name: "",
      role: "",
      email: "",

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
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch(
          "http://13.60.36.203:5001/nomad/send-email",
          {
            method: "POST",
            body: JSON.stringify({
              to: formData.email,
              subject: "nomadnurse.co.uk",
              text: `Name: ${formData.name}, Role: ${formData.role}.`,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        setSubmitMessage(data.message);

        // Reset form and error state
        setFormData({
          name: "",
          role: "",
          email: "",
          consentCheckbox: false,
        });
        setErrors({});
      } catch (error) {
        console.error(error);
        setSubmitMessage("Failed to send email");
      }
    } else {
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

    if (!formData.consentCheckbox) {
      errors.consentCheckbox = "You must consent to the privacy policy";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="video-container2">
      <video
        src={Video1}
        autoPlay
        loop
        muted
        preload="auto"
        className="video"
        poster={home}
      />
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
                      <option value="Dental Nurse">Dental Nurse</option>
                      <option value="Independent Practice">
                        Independent Practice
                      </option>
                      <option value="Dental Corporate">Dental Corporate</option>
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
                      </p>
                      <div className="error-message">
                        {errors.consentCheckbox}
                      </div>
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
