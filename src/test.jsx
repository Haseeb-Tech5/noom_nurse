import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Touch.css";
import Vector from "../../Assetss/text.svg";
import Img from "../../Assetss/Group 1000001058.png";
import Line from "../../Assetss/Line 91.png";
import Face from "../../Assetss/facebook.png";
import Insta from "../../Assetss/instagram.png";
import Link1 from "../../Assetss/linkedin.png";
import Vector1 from "../../Assetss/Vector (2).png";
import Img1 from "../../Assetss/group3.png";
import Img2 from "../../Assetss/group2.png";
import Img3 from "../../Assetss/Group 4.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { animateScroll as scroll, Events, scrollSpy } from "react-scroll";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Touch = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    message: "",
    consent: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out" });
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      consent: !formData.consent,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.role) {
      errors.role = "Please select a role";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (!formData.consent) {
      errors.consent = "You must consent to the privacy policy";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form is valid");
      return true;
    } else {
      console.log("Form is invalid");
      displayStyledAlert(Object.values(errors).join("\n"));
      return false;
    }
  };

  const displayStyledAlert = (message) => {
    const alertContainer = document.createElement("div");

    // Split error messages based on newline characters
    const messages = message.split("\n");

    // Create a div element for each error message
    messages.forEach((msg) => {
      const errorMessage = document.createElement("div");
      errorMessage.textContent = msg;
      alertContainer.appendChild(errorMessage);
    });

    alertContainer.className = "alert-container"; // Apply the external CSS class

    // Append the alert to the body
    document.body.appendChild(alertContainer);

    // Remove the alert after a certain duration (e.g., 5 seconds)
    setTimeout(() => {
      document.body.removeChild(alertContainer);
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Create a new object with only 'subject' and 'message' fields
        const formDataToSend = {
          subject: "nomadnurse.co.uk",
          message: `Name: ${formData.name}, Role: ${formData.role}, Email: ${formData.email}`,
        };

        const response = await fetch("https://nmapi.drnaiz.com/contact.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formDataToSend).toString(),
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
  return (
    <div className="touch-container">
      <div className="touch-container-full">
        <div
          className="touch-heading"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <h2>Get in touch</h2>
        </div>
        <div className="touch-img" data-aos="zoom-in" data-aos-duration="800">
          <img src={Vector} alt="" />
        </div>
        <div className="touch-para" data-aos="zoom-in" data-aos-duration="800">
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
                    <img src={Img} alt="" />
                  </div>
                </div>
                <div className="re">
                  <div className="re-heading">Office Address</div>
                  <div className="re-para">
                    Nomad Nurse, 4th Floor, Silverstream House, 45 Fitzroy
                    Street, Fitzrovia, London, W1T 6EB
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="left-section-content">
              <div className="left-section-content-container">
                <div className="le">
                  <div className="le-image1">
                    <img src={Img3} alt="" />
                  </div>
                </div>
                <div className="re">
                  <div className="re-heading">Office Timings</div>
                  <div className="re-para">
                    Monday - Friday 9:00am to 5:00pm
                  </div>
                </div>
              </div>
            </div> */}
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
              <div className="form-container" onSubmit={handleSubmit}>
                <div className="firstView">
                  <div className="flex-container">
                    <div className="flex-item">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
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
                          value={formData.role}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled hidden>
                            Choose your role
                          </option>
                          <option value="role1">Dental Nurse</option>
                          <option value="role2">Dental Practice</option>
                          <option value="role3">Dental Corporate</option>
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
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {/* {submitMessage && <div>{submitMessage}</div>} */}
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
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex-item">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleInputChange}
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
                      value={formData.role}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled hidden>
                        Choose your role
                      </option>
                      <option value="role1">Dental Nurse</option>
                      <option value="role2">Dental Practice</option>
                      <option value="role3">Dental Corporate</option>
                    </select>
                  </div>
                </div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-container">
                <div className="cccc">
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="consentCheckbox"
                      className="custom-checkbox"
                      checked={formData.consent}
                      onChange={handleCheckboxChange}
                    />
                  </div>
                  <div className="para-form1">
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
                  <button type="submit">Send Message</button>
                </div>
              </div>
              {submitMessage && <div>{submitMessage}</div>}
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
  );
};

export default Touch;
