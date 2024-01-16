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
import Icon4 from "../../Components/Icons/Icon4";
import Practice1 from "../../Components/Icons/Practice1";
import Practice2 from "../../Components/Icons/Practice2";
import Practice3 from "../../Components/Icons/Practice3";
import axios from "axios";

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
      pathData: "M7.5 50C27.5 50 52.5 10 52.5 10",
    },
    {
      img: "icon4.svg",
      demoImg: "iconn4.svg",
      title: "Reliability",
      text: "Constantly live app, diverse nurses: Unwavering reliability at your service",
      pathData:
        "M10 45V25C10 22.2386 12.2386 20 15 20H28H37H50C52.7615 20 55 22.2386 55 25V45C55 47.7615 52.7615 50 50 50H37H28H15C12.2386 50 10 47.7615 10 45Z M46.25 35.0254L46.2753 34.9973 M18.75 35.0252L18.7753 34.9972 M10 40H7.5C4.73857 40 2.5 37.7615 2.5 35V15C2.5 12.2386 4.73857 10 7.5 10H42.5C45.2615 10 47.5 12.2386 47.5 15V20 M32.5 40C29.7385 40 27.5 37.7615 27.5 35C27.5 32.2385 29.7385 30 32.5 30C35.2615 30 37.5 32.2385 37.5 35C37.5 37.7615 35.2615 40 32.5 40Z",
    },
    {
      img: "practice2.svg",
      demoImg: "practicee2.svg",
      title: " Transparency",
      text: "Clear processes, fostering trust in every transaction",
      pathData:
        "M8.9 34.2H6.6C5.38 34.2 4.20998 33.7154 3.34731 32.8527C2.48464 31.99 2 30.82 2 29.6V6.6C2 5.38 2.48464 4.20998 3.34731 3.34731C4.20998 2.48464 5.38 2 6.6 2H43.4C44.62 2 45.79 2.48464 46.6527 3.34731C47.5154 4.20998 48 5.38 48 6.6V29.6C48 30.82 47.5154 31.99 46.6527 32.8527C45.79 33.7154 44.62 34.2 43.4 34.2H41.1 M25 29.6001L36.5 43.4001H13.5L25 29.6001Z",
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
                                    <option value="role1">Dental Nurse</option>
                                    <option value="role2">
                                      Dental Practice
                                    </option>
                                    <option value="role3">
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
                        <Icon3
                          hovered={hoveredIndex === index}
                          pathData={icon.pathData}
                        />
                      ) : index === 3 ? (
                        <Icon4
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
            {/* <div className="nurse-testominal">
              <Testimonials />
            </div> */}
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
                  // data-aos="zoom-in"
                  // data-aos-duration="800"
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
                    {/* <div className="slider-item">
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
                          overall efficiency.
                        </p>
                      </div>
                    </div>{" "} */}
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
            </div>
            <Register />
            <Touch />
          </div>
        </>
      )}
    </>
  );
}
