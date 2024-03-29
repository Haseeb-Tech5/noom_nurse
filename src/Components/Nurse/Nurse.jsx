import React, { useState, useEffect, useRef } from "react";
import "./Nurse.css";
import Tooth from "../../Assetss/tooth.png";
import Rect from "../../Assetss/Rectangle.jpg";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import emailjs from "@emailjs/browser";

import background from "../../Assetss/Capawad 2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
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
  const form = useRef(); // Create a ref for the form element
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
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          body: JSON.stringify({
            to: formData.email,
            subject: "nomadnurse.co.uk",
            text: `Name: ${formData.name}, Role: ${formData.role}.`,
          }),
          headers: { "Content-Type": "application/json" },
        });
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
          {/* <div className="nurse-logo ">
            <img src={Tooth} alt="" />
          </div> */}
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
          <div className="nurse-para">
            <p>
              At Nomad Nurse, we are redefining the experience as we understand
              the challenges faced by both dental practices and nurses in the
              industry. By choosing to work with us, dental nurses gain access
              to a seamless and user-friendly platform that connects them with
              unlimited opportunities.
            </p>
          </div>
          <div className="nurse-para">
            <p>
              We prioritise transparency, reliability, and efficiency in the
              recruitment process, ensuring that every match is not just a
              placement but a harmonious collaboration.
            </p>
          </div>
          <div className="nurse-para">
            <p>
              Join us in shaping the future of dental care staffing, where your
              skills are valued, and your career is empowered.
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
              <form onSubmit={handleSubmit} ref={form}>
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
                          <option value="Dental Corporate">
                            Dental Corporate
                          </option>
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
                            I consent to my personal data being stored and used
                            in accordance with the{" "}
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
