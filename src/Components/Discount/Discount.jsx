import React, { useState, useEffect } from "react";
import "./Discount.css";
import Video1 from "../Discount/video.mp4";
import Tooth from "../../Assetss/tooth.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import yourGif from "../Discount/ezgif.gif";
import axios from "axios";
import imgg from "../../Components/Discount/video-0.jpg";

const Data = [
  { animation: "fadeInFromLeft", text: "Efficiency" },
  { animation: "fadeOutToRight", text: "Efficiency" },
  { animation: "fadeInFromRight", text: "Convenience" },
  { animation: "fadeOutToBottom", text: "Convenience" },
  { animation: "fadeInFromBottom", text: "Reliability" },
  { animation: "fadeOutToTop", text: "Reliability" },
  { animation: "fadeInFromTop", text: "Flexibility" },
  { animation: "fadeOutToLeft", text: "Flexibility" },
  { animation: "fadeInFromLeft", text: "Transparency" },
  { animation: "fadeOutToBottom", text: "Transparency" },
  { animation: "fadeInFromBottom", text: "Instantaneous Bookings" },
  { animation: "fadeOutToRight", text: "Instantaneous Bookings" },
];

const Discount = () => {
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
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const handleVideoError = () => setVideoError(true);
  const handleVideoLoaded = () => setVideoLoaded(true);
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
    <div className="discount-container">
      {/* <video
        src={Video1}
        autoPlay
        loop
        muted
        className="back-video"
        onError={handleVideoError}
        onLoadedData={handleVideoLoaded}
      />
      <div
        className="video-gap2"
        style={
          videoLoaded || videoError ? { display: "none" } : { display: "block" }
        }
      >
        <img src={imgg} alt="" />
      </div> */}
      <img
      src={yourGif}
      className="back-video"
      style={{
        width:"100%"
      }}
      />

      <div className="video-gap1">
        <img src={yourGif} alt="GIF" />
      </div>
      <div
        className="flex-width"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <div className="discount-container-full">
          <div className="left-discount">
            <p className={data.animation}>{data.text}</p>
          </div>
          <div
            className="nurse-left"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-duration="600"
          >
            <div className="nurse-logo">
              <img src={Tooth} alt="" />
            </div>
            <div className="nurse-heading">
              <h2>
                Why <span style={{ color: "#497367" }}>Practices</span> should
                join us!
              </h2>
            </div>
            <div className="nurse-para2">
              <p>
                At Nomad Nurse, we invite dental practices to elevate their
                staffing experience by joining our dynamic platform. We
                understand the pivotal role that a skilled dental nurse plays in
                ensuring the smooth functioning of a practice. Our user-friendly
                interface streamlines the recruitment process, allowing you to
                find the perfect match quickly and efficiently. Join us in
                transforming the way you staff your practice and experience the
                convenience of finding the right dental nurse with ease
              </p>
            </div>

            <div className="nurse-button">
              <button onClick={handleOpenForm}>Join now</button>
            </div>
            {/* <div className="video-gap1">
              <img src={yourGif} alt="GIF" />
            </div> */}
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
                              I consent to my personal data being stored and
                              used in accordance with the{" "}
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
        </div>
      </div>
    </div>
  );
};

export default Discount;
