import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register";
import Testimonials from "../Testimonials/Testimonials";
import Touch from "../Touch/Touch";
import "../nurses/nurses.css";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
// import Touch from "../Touch/Touch";
import Img from "../../Assetss/text.svg";
// import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img4 from "../../Assetss/Avatar1 (1).png";
import Img1 from "../../Assetss/Avatar2.png";
import Img2 from "../../Assetss/Avatar3.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import Icon1 from "../../Components/Icons/Icon1";
import Icon3 from "../../Components/Icons/Icon3";
import Icon10 from "../../Components/Icons/Icon10";
import Icon11 from "../../Components/Icons/Icon11";

import Practice1 from "../../Components/Icons/Practice1";
import Practice2 from "../../Components/Icons/Practice2";
import Practice3 from "../../Components/Icons/Practice3";
import axios from "axios";
import IconReliability from "../Icons/IconReliability";

export default function Practice() {
  const images = [
    { src: Img4, className: "avatar1" },
    { src: Img1, className: "avatar2" },
    { src: Img2, className: "avatar3" },
  ];
  const [slider, setSlider] = useState(null);
  const [activeArrow, setActiveArrow] = useState("next");

  const handleNext = () => {
    if (slider) {
      slider.slickNext();
      setActiveArrow("next");
    }
  };

  const handlePrev = () => {
    if (slider) {
      slider.slickPrev();
      setActiveArrow("prev");
    }
  };

  const settings = {
    infinite: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const delay = 3000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const icons = [
    {
      img: "icon1.svg",
      demoImg: "iconn1.svg",
      title: "Cost-Effective",
      text: "Save time, cut paperwork, and enjoy competitive rates with our platform",
      pathData:
        "M44.5363 48.264V53.128H15.9923L14.9683 49.8C16.7603 47.7947 18.0829 45.8747 18.9363 44.04C19.8323 42.2053 20.2803 39.944 20.2803 37.256C20.2803 36.1467 20.0883 34.824 19.7043 33.288H12.4723V29.192H18.2963C17.7416 27.6987 17.3149 26.2907 17.0163 24.968C16.7176 23.6027 16.5683 22.1093 16.5683 20.488C16.5683 17.7573 17.1443 15.3893 18.2963 13.384C19.4909 11.336 21.1336 9.75733 23.2243 8.648C25.3576 7.53866 27.7896 6.984 30.5203 6.984C34.8723 6.984 38.2216 8.24266 40.5683 10.76C42.9149 13.2773 44.1736 16.456 44.3443 20.296H38.9683C38.8829 17.7787 38.1149 15.752 36.6643 14.216C35.2563 12.68 33.2083 11.912 30.5203 11.912C28.0456 11.912 26.0189 12.6373 24.4403 14.088C22.9043 15.5387 22.1363 17.7573 22.1363 20.744C22.1363 22.152 22.2856 23.496 22.5843 24.776C22.8829 26.0133 23.3309 27.4853 23.9283 29.192H36.3443V33.288H25.2083C25.5923 34.824 25.7843 36.1467 25.7843 37.256C25.7843 41.3093 24.2696 44.9787 21.2403 48.264H44.5363Z",
    },
    {
      img: "practice1.svg",
      demoImg: "practicee1.svg",
      title: "Efficiency",
      text: "Elevate your practice with us!",
      pathData: "M19.5 48.6667V19.5 M37 48.6667V2 M2 48.6667V37",
    },
    {
      img: "icon3.svg",
      demoImg: "iconn3.svg",
      title: "Convenience",
      text: "Simplifies tasks, saves time through paperless transactions",
      pathData:
        "M16.21 49.21C16.21 62.33 26.88 73 40 73s23.79-10.67 23.79-23.79c0-12.19-9.21-22.26-21.04-23.63v-1.24a8.834 8.834 0 0 0 6.14-8.45C48.89 10.99 44.9 7 40 7s-8.89 3.99-8.89 8.89c0 3.9 2.49 7.27 6.14 8.45v1.24c-11.83 1.37-21.04 11.44-21.04 23.63zm45.58 0C61.79 61.22 52.02 71 40 71s-21.79-9.78-21.79-21.79 9.77-21.8 21.79-21.8 21.79 9.78 21.79 21.8zM36.62 19.27v-1.51h6.77v1.51h-5.14zm6.13 2h1.54c-.47.37-.98.69-1.54.93zm-9.64-5.38C33.11 12.09 36.2 9 40 9s6.89 3.09 6.89 6.89c0 1.62-.56 3.1-1.51 4.29v-3.41c0-.55-.45-1-1-1h-8.77c-.55 0-1 .45-1 1v3.41a6.88 6.88 0 0 1-1.5-4.29zm2.6 5.38h1.54v.93a6.65 6.65 0 0 1-1.54-.93zm3.54 4.14v-4.13h1.51v4.13z M20.2 49.21C20.2 60.12 29.08 69 40 69s19.79-8.88 19.79-19.79S50.91 29.42 40 29.42s-19.8 8.87-19.8 19.79zm37.59 0C57.79 59.02 49.81 67 40 67s-17.8-7.98-17.8-17.79 7.98-17.79 17.79-17.79 17.8 7.97 17.8 17.79z M39 33.5v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM40 62c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1zM26.25 48.25h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zM53.75 50.25h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM49.72 40.53c.26 0 .51-.1.71-.29l1.42-1.41a.996.996 0 1 0-1.41-1.41l-1.42 1.41a.996.996 0 0 0 .7 1.7zM29.57 58.27l-1.41 1.41a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l1.41-1.41c.39-.39.39-1.02 0-1.41s-1.03-.39-1.42 0zM29.57 37.41a.996.996 0 1 0-1.41 1.41l1.41 1.41c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41zM50.43 61.09c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41l-1.42-1.41a.996.996 0 1 0-1.41 1.41zM41 40c0-.55-.45-1-1-1s-1 .45-1 1v6.18c-1.16.41-2 1.51-2 2.82s.84 2.4 2 2.82V54c0 .55.45 1 1 1s1-.45 1-1v-2.18c1.16-.41 2-1.51 2-2.82s-.84-2.4-2-2.82zm-1 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
    },
    {
      img: { IconReliability },
      demoImg: { IconReliability },
      title: "Reliability",
      text: "Constantly live app, diverse nurses: Unwavering reliability at your service",
      pathData:
        "M19 25.86a1 1 0 0 1-.035-2 100.408 100.408 0 0 0 14.649-1.24.961.961 0 0 1 .262-.018 7.184 7.184 0 0 1 3.425 1.08 1 1 0 0 1-.581 1.809 1.029 1.029 0 0 1-.647-.229 4.99 4.99 0 0 0-2.205-.653 103.883 103.883 0 0 1-14.842 1.251z M55.58 49.65a4.032 4.032 0 0 1-2.375-.77l-.215-.149a.98.98 0 0 1-.119-.1L41.1 40.154a1 1 0 1 1 1.161-1.628l.8.57 11.015 7.943a.943.943 0 0 1 .094.077l.191.133a2.083 2.083 0 0 0 2.841-.393A2.051 2.051 0 0 0 57.561 45a2.006 2.006 0 0 0-.665-1.011L41.152 31.162c-6.029 3.2-10.3 1.554-12.339.251a2.3 2.3 0 0 1 .195-3.969l9.012-4.786a4.919 4.919 0 0 1 3.768-.33l5.331 1.73a6.932 6.932 0 0 0 4.8-.173l2.322-.951A1 1 0 1 1 55 24.785l-2.32.95a8.916 8.916 0 0 1-6.182.224l-5.326-1.729a2.9 2.9 0 0 0-2.219.2l-9.014 4.787a.3.3 0 0 0-.172.263.274.274 0 0 0 .128.255c2.1 1.342 5.705 2.326 10.866-.639a1 1 0 0 1 1.13.092l16.26 13.25a3.987 3.987 0 0 1 1.328 2 4.083 4.083 0 0 1-.7 3.645 4.032 4.032 0 0 1-3.199 1.567z M51.442 54.285a4.077 4.077 0 0 1-2.365-.753l-10.81-7.67a1 1 0 0 1 1.157-1.631l10.81 7.669a2.1 2.1 0 0 0 2.44-3.414L41.9 40.721a1 1 0 0 1 1.166-1.621l10.777 7.766a4.1 4.1 0 0 1-2.4 7.421z M46.775 58.292a3.941 3.941 0 0 1-2.251-.707l-9.687-6.71a1 1 0 0 1 1.139-1.645l9.687 6.71a1.969 1.969 0 0 0 2.74-.5 1.976 1.976 0 0 0-.48-2.725l-9.64-6.838a1 1 0 1 1 1.157-1.631l9.64 6.838a3.983 3.983 0 0 1 .969 5.493 3.942 3.942 0 0 1-2.549 1.65 4 4 0 0 1-.725.065z M41.061 61.58a4 4 0 0 1-1.991-.542l-5.377-3.1a1 1 0 0 1 1-1.732l5.376 3.1a2 2 0 0 0 2.7-.716 1.96 1.96 0 0 0-.587-2.621l-6.87-4.759a1 1 0 0 1 1.139-1.644l6.869 4.758a3.982 3.982 0 0 1-2.26 7.256z M29.738 60.983a4.02 4.02 0 0 1-2.656-7.043l2.671-2.34a4.022 4.022 0 0 1 5.676.369 4.022 4.022 0 0 1-.37 5.676l-2.671 2.345a4.006 4.006 0 0 1-2.65.993zm2.667-8.383a2.013 2.013 0 0 0-1.333.5L28.4 55.443a2.022 2.022 0 1 0 2.667 3.04l2.671-2.345a2.021 2.021 0 0 0-1.333-3.538z M23.684 58.259c-.089 0-.178 0-.267-.008a4 4 0 0 1-2.762-1.36A4.036 4.036 0 0 1 21 51.182l4.462-3.917a4.022 4.022 0 0 1 5.676.369l-.723.693.751-.66a4.021 4.021 0 0 1-.369 5.676l-4.466 3.917a3.99 3.99 0 0 1-2.647.999zm4.425-9.994a2.007 2.007 0 0 0-1.331.5l-4.462 3.917a2.052 2.052 0 0 0 1.231 3.57 2 2 0 0 0 1.465-.5l4.462-3.917a2.022 2.022 0 0 0 .186-2.854l-.029-.033a2.006 2.006 0 0 0-1.384-.679 3.293 3.293 0 0 0-.139-.003z M18.638 54.588c-.088 0-.177 0-.267-.008a4 4 0 0 1-2.762-1.36l-.109-.13a4.022 4.022 0 0 1 .371-5.674l5.173-4.541a4.021 4.021 0 0 1 5.676.369l.113.129a4.021 4.021 0 0 1-.371 5.674l-5.173 4.541a3.992 3.992 0 0 1-2.651 1zm5.053-10.712a2.008 2.008 0 0 0-1.331.5l-5.173 4.541A2.024 2.024 0 0 0 17 51.773l.113.129a2.023 2.023 0 0 0 2.853.184l5.173-4.541a2.022 2.022 0 0 0 .186-2.854l-.111-.127a2.007 2.007 0 0 0-1.387-.682 1.581 1.581 0 0 0-.136-.006z M14.291 50.137c-.088 0-.178 0-.267-.009a4.048 4.048 0 0 1-2.424-7.075l3.239-2.843a4.021 4.021 0 0 1 5.676.369l.035.04a4.021 4.021 0 0 1-.369 5.676l-3.239 2.843a3.991 3.991 0 0 1-2.651.999zm3.2-8.927a2.008 2.008 0 0 0-1.331.5l-3.239 2.843a2.022 2.022 0 0 0-.186 2.854 2.036 2.036 0 0 0 2.888.226l3.239-2.843a2.022 2.022 0 0 0 .186-2.854l-.035-.04a2.007 2.007 0 0 0-1.388-.683l-.139-.003z M12.477 44.612a.994.994 0 0 1-.6-.2l-3.417-2.6a1 1 0 0 1 1.211-1.592l3.417 2.6a1 1 0 0 1-.606 1.8zM58.519 45.72a1 1 0 0 1-.707-1.707l5.611-5.613a1 1 0 0 1 1.414 1.414l-5.611 5.611a1 1 0 0 1-.707.295z M66.17 43.645a1 1 0 0 1-.853-.476l-12.21-19.86a1 1 0 0 1 .24-1.314l12.093-9.366a1 1 0 0 1 1.587.567l5.947 25.947a1 1 0 0 1-.485 1.1l-5.831 3.277a.994.994 0 0 1-.488.125zm-10.889-20.62L66.517 41.3l4.341-2.44-5.43-23.692zM7.83 44a1 1 0 0 1-.489-.128L1.51 40.6a1 1 0 0 1-.485-1.1l5.948-25.944a1 1 0 0 1 1.587-.567l12.094 9.365a1 1 0 0 1 .24 1.314L8.683 43.528A1 1 0 0 1 7.83 44zm-4.688-4.778 4.341 2.439 11.236-18.276-10.147-7.857z",
    },
    {
      img: "practice2.svg",
      demoImg: "practicee2.svg",
      title: " Transparency",
      text: "Clear processes, fostering trust in every transaction",
      pathData:
        "m43.018 42.784-3.9-3.912a9.015 9.015 0 1 0-4.243 4.242l3.911 3.9a2.994 2.994 0 1 0 4.236-4.233zM26.05 39.95a7 7 0 1 1 9.9 0 7.007 7.007 0 0 1-9.9 0zM41.6 45.6a1 1 0 0 1-1.406 0l-3.581-3.573a8.489 8.489 0 0 0 1.414-1.413L41.6 44.2a.991.991 0 0 1 0 1.406z M25 44H12a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h17.38a2.973 2.973 0 0 1 .62.067V10a3 3 0 0 0 3 3h5.923a3 3 0 0 1 .077.651V27a1 1 0 0 0 2 0V13.651a4.975 4.975 0 0 0-1.456-3.527l-6.62-6.651A4.965 4.965 0 0 0 29.38 2H12a5.006 5.006 0 0 0-5 5v34a5.006 5.006 0 0 0 5 5h13a1 1 0 0 0 0-2zm12.594-33H33a1 1 0 0 1-1-1V5.38z M14 13h11a1 1 0 0 0 0-2H14a1 1 0 0 0 0 2zM34 17H17a1 1 0 0 0 0 2h17a1 1 0 0 0 0-2zM35 23a1 1 0 0 0-1-1H14a1 1 0 0 0 0 2h20a1 1 0 0 0 1-1zM21 28a1 1 0 0 0-1-1h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 1-1zM14 34h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2zM14 39h5a1 1 0 0 0 0-2h-5a1 1 0 0 0 0 2zM31 38a3 3 0 0 1-3-3 1 1 0 0 0-2 0 5.006 5.006 0 0 0 5 5 1 1 0 0 0 0-2z",
    },
    {
      img: "practice3.svg",
      demoImg: "practicee3.svg",
      title: "Instantaneous Bookings",
      text: "Investing in your smile, our priority",
      pathData: "M29.5 37L52 19.5L29.5 2V37Z M2 37L24.5 19.5L2 2V37Z",
    },
  ];
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
          <Navbar />
          <div style={{ width: "100%", overflow: "hidden" }}>
            <div className="nurses-video">
              <img src="practice.jpeg" alt="" />
              <div className="nurses-video-cont">
                <div className="nurse-video-head">
                  <div className="nurses-flex">
                    <div className="nurses-img">
                      <p>Practices</p>
                      <img src="text.svg" alt="" />
                    </div>
                    <div className="nurses-buttons">
                      {/* <button>Login</button> */}
                      <button onClick={handleOpenForm}>Register</button>
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
                                <div className="error-message">
                                  {errors.name}
                                </div>

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
                                    <option value="Dental Nurse">
                                      Dental Nurse
                                    </option>
                                    <option value="   Independent Practice">
                                      Independent Practice
                                    </option>
                                    <option value=" Dental Corporate">
                                      Dental Corporate
                                    </option>
                                  </select>
                                </div>
                                <div className="error-message">
                                  {errors.role}
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
                                <div className="error-message">
                                  {errors.email}
                                </div>
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
                                      I consent to my personal data being stored
                                      and used in accordance with the{" "}
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
            <div className="nurses-icons-main">
              <div className="nurses-icons">
                {icons.map((icon, index) => (
                  <div
                    key={index}
                    className={`icon-box ${
                      hoveredIndex !== null && hoveredIndex !== index
                        ? "blur"
                        : ""
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="image-box">
                      {index === 0 ? (
                        <Icon1
                          hovered={hoveredIndex === index}
                          pathData={icon.pathData}
                        />
                      ) : index === 1 ? (
                        <Practice1
                          hovered={hoveredIndex === index}
                          pathData={icon.pathData}
                        />
                      ) : index === 2 ? (
                        <Icon11
                          hovered={hoveredIndex === index}
                          pathData={icon.pathData}
                        />
                      ) : index === 3 ? (
                        <Icon10
                          hovered={hoveredIndex === index}
                          pathData={icon.pathData}
                        />
                      ) : index === 4 && icon ? (
                        <Practice2
                          hovered={hoveredIndex === index}
                          pathData={icon.pathData}
                        />
                      ) : index === 5 && icon ? (
                        <Practice3
                          hovered={hoveredIndex === index}
                          pathData={icon.pathData}
                        />
                      ) : null}
                    </div>
                    <div className="title-box">
                      <p>{icon.title}</p>
                    </div>
                    <div className="text-box">
                      <p>{icon.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/*          
            <div className="testimonial-container1">
              <div className="testi-full-container">
                <div
                  className="testi-heading"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  <h2>Testimonials</h2>
                </div>
                <div
                  className="testi-img"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  <img src={Img} alt="" />
                </div>
                <div
                  className="testi-para"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                >
                  <p>Hear how others have found the Nomad Nurse experience</p>
                </div>
                <div
                  className="slider-container"
                 
                >
                  <Slider ref={(c) => setSlider(c)} {...settings}>
                    <div className="slider-item">
                      <div className="h3-heading">
                        <h3>Expert Dental Care</h3>
                      </div>
                      <div className="h5-heading">
                        <p>Dental Practice</p>
                      </div>
                      <div className="p-para">
                        <p>
                          “Nomad Nurses has exceeded our expectations. The
                          platform's reliability in providing skilled nurses has
                          been crucial for our practice's success. The time
                          saved on administrative tasks, thanks to the efficient
                          interface, allows us to focus more on patient care."
                        </p>
                      </div>
                    </div>{" "}
                    <div className="slider-item">
                      <div className="h3-heading">
                        <h3>The Witterings Dental Practice</h3>
                      </div>
                      <div className="h5-heading">
                        <p>Dental Practice</p>
                      </div>
                      <div className="p-para">
                        <p>
                          “The Nomad Nurse platform has become an indispensable
                          tool for our dental practice. Its user-friendly
                          interface and advanced features simplify the
                          recruitment process, allowing us to find qualified
                          dental nurses swiftly. The efficiency and reliability
                          of the platform make it an essential asset in managing
                          our staffing needs."
                        </p>
                      </div>
                    </div>{" "}
                    <div className="slider-item">
                      <div className="h3-heading">
                        <h3>Dentistry @ Oceana Boulevard</h3>
                      </div>
                      <div className="h5-heading">
                        <p>Dental Practice</p>
                      </div>
                      <div className="p-para">
                        <p>
                          “The platform's innovative approach to dental nurse
                          recruitment ensures that we can access a diverse pool
                          of skilled nurses with just a few clicks. It's a
                          modern solution that has significantly improved our
                          overall efficiency."
                        </p>
                      </div>
                    </div>{" "}
                  
                  </Slider>
                  <div className="custom-arrows">
                    <div
                      className={`custom-arrow custom-prev ${
                        activeArrow === "prev" ? "active" : ""
                      }`}
                      onClick={handlePrev}
                    >
                      {">"}
                    </div>
                    <div
                      className={`custom-arrow custom-next ${
                        activeArrow === "next" ? "active" : ""
                      }`}
                      onClick={handleNext}
                    >
                      {"<"}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <Register />
            <Touch />
          </div>
        </>
      )}
    </>
  );
}
