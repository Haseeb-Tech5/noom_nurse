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
import axios from "axios";

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

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    consentCheckbox: false, // Initialize to false
  });
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");

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
        console.log("Submitting form data:", formData);

        const response = await axios.post(
          "/contact.php", // Updated to relative path due to the proxy configuration
          {
            subject: formData.name,
            message: formData.message,
          },
          {
            withCredentials: true,
          }
        );

        console.log("Server response:", response);

        // Check if the response contains a property indicating success
        if (response.data && response.data.success) {
          setSubmitMessage("Message submitted successfully");
          // Perform actions for a successful submission (e.g., show a success message)
        } else {
          setSubmitMessage(
            response.data.message || "Message submission failed"
          );
          // Perform actions for a failed submission (e.g., show an error message)
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitMessage("An error occurred while submitting the form");
        // Handle error, e.g., show an error message to the user
      }
    } else {
      console.log("Form validation failed");
      setSubmitMessage("Form validation failed");
    }
  };

  const validateForm = () => {
    const errors = {};

    // Example validation rules (customize based on your requirements)
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
    </div>
  );
};

export default Register;
