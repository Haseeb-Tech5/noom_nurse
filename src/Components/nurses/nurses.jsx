import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { BounceLoader } from "react-spinners";
import "./nurses.css";
import Testimonials from "../Testimonials/Testimonials";
import Register from "../Register/Register";
import Touch from "../Touch/Touch";
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
import Icon2 from "../../Components/Icons/Icon2";
import Icon3 from "../../Components/Icons/Icon3";
import Icon4 from "../../Components/Icons/Icon4";
import Icon6 from "../../Components/Icons/Icon6";
import Icon5 from "../../Components/Icons/Icon5";
import axios from "axios";

export default function Nurses() {
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
    // autoplay: true,
    arrows: false,
  };

  const [isLoading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      title: "Industry Leading Pay",
      text: "From £18/ph",
      pathData:
        "M44.5363 48.264V53.128H15.9923L14.9683 49.8C16.7603 47.7947 18.0829 45.8747 18.9363 44.04C19.8323 42.2053 20.2803 39.944 20.2803 37.256C20.2803 36.1467 20.0883 34.824 19.7043 33.288H12.4723V29.192H18.2963C17.7416 27.6987 17.3149 26.2907 17.0163 24.968C16.7176 23.6027 16.5683 22.1093 16.5683 20.488C16.5683 17.7573 17.1443 15.3893 18.2963 13.384C19.4909 11.336 21.1336 9.75733 23.2243 8.648C25.3576 7.53866 27.7896 6.984 30.5203 6.984C34.8723 6.984 38.2216 8.24266 40.5683 10.76C42.9149 13.2773 44.1736 16.456 44.3443 20.296H38.9683C38.8829 17.7787 38.1149 15.752 36.6643 14.216C35.2563 12.68 33.2083 11.912 30.5203 11.912C28.0456 11.912 26.0189 12.6373 24.4403 14.088C22.9043 15.5387 22.1363 17.7573 22.1363 20.744C22.1363 22.152 22.2856 23.496 22.5843 24.776C22.8829 26.0133 23.3309 27.4853 23.9283 29.192H36.3443V33.288H25.2083C25.5923 34.824 25.7843 36.1467 25.7843 37.256C25.7843 41.3093 24.2696 44.9787 21.2403 48.264H44.5363Z",
    },
    {
      img: "icon2.svg",
      demoImg: "iconn2.svg",
      title: "Weekly payments",
      text: "Greater financial stability",
      pathData:
        "M293.155 199.954c.256-.358.512-.768.717-1.126 3.942-6.81 3.994-15.155.102-21.965a23.677 23.677 0 0 0 7.424-14.08c.87-6.042-.256-11.622-2.918-16.179 4.659-4.506 7.526-10.803 7.475-17.766 0-5.581-1.946-10.752-5.12-14.899 4.147-4.454 6.707-10.445 6.707-16.998-.051-12.442-9.574-22.835-21.76-24.269l8.602-14.848s0-.051.051-.051c0-.051.051-.102.051-.102.051-.102.102-.256.205-.41 0-.051.051-.051.051-.102 3.482-6.861 2.714-15.667-2.099-23.04a24.717 24.717 0 0 0-12.339-9.83c-.154-6.195-2.509-12.032-6.758-16.486a25.034 25.034 0 0 0-26.931-6.144l-5.069 1.946c-.051 0-.102.051-.154.051-.051 0-.102.051-.154.051-4.71 2.048-10.086 2.048-14.746 0-.051 0-.051 0-.102-.051-.051 0-.051-.051-.102-.051l-4.864-1.946h-.051s-.051 0-.051-.051a25.034 25.034 0 0 0-26.931 6.144c-3.277 3.43-5.376 7.782-6.144 12.595-5.478-.307-11.059 1.434-15.514 5.069-7.987 6.656-10.496 17.459-6.042 26.368 0 .051.051.102.051.154 0 0 0 .051.051.051l1.382 2.56c-7.475 2.816-13.67 7.424-18.842 14.08l-.102.102-.102.102c-2.97 4.096-6.656 7.68-10.547 10.342-4.198 2.867-9.114 4.403-14.182 4.403l-49.203.205c-4.813 0-8.704 3.942-8.653 8.755 0 4.813 3.891 8.653 8.704 8.653h.051l49.203-.205c8.55-.051 16.845-2.611 23.91-7.424 5.53-3.789 10.445-8.55 14.592-14.234 3.635-4.659 7.987-7.629 13.517-9.216l.819 1.485c1.28 2.406 3.789 3.738 6.298 3.738 1.126 0 2.304-.256 3.379-.87 3.482-1.894 4.762-6.246 2.918-9.728l-4.147-7.68c-.102-.256-.256-.461-.358-.666l-5.99-11.059c-1.382-2.867-.358-6.605 2.406-8.909 2.099-1.741 4.966-2.253 7.526-1.434l10.24 38.4c-3.123 1.331-5.325 4.454-5.325 8.038a8.696 8.696 0 0 0 8.704 8.704l80.128-.205c3.84.051 6.963 3.226 7.014 7.066 0 3.891-3.226 7.27-7.066 7.373h-38.4c-4.813 0-8.704 3.891-8.704 8.704s3.891 8.704 8.704 8.704h37.069c3.789.154 6.758 3.277 6.81 7.066a7.193 7.193 0 0 1-6.605 7.168h-36.403c-4.813 0-8.704 3.891-8.704 8.704s3.891 8.704 8.704 8.704h35.533c3.533 1.382 3.226 5.478 3.072 6.758-.461 3.021-2.867 5.171-6.093 5.427h-33.434c-4.813 0-8.704 3.891-8.704 8.704s3.891 8.704 8.704 8.704h30.157c1.638 0 3.174.819 3.994 2.253.87 1.434.87 3.226 0 4.71a4.766 4.766 0 0 1-4.096 2.304h-.204l-78.643.205c-16.333-.307-32.205-5.376-45.926-14.694-7.117-4.813-15.411-7.373-24.013-7.373h-.256l-50.534.461c-4.813.051-8.653 3.994-8.602 8.806.051 4.762 3.942 8.602 8.704 8.602h.102l50.483-.461h.102a25.609 25.609 0 0 1 14.234 4.352c8.858 5.99 18.483 10.547 28.518 13.517a118.068 118.068 0 0 0-19.814 29.286c-7.526 15.872-11.52 33.536-11.469 51.098s4.096 35.174 11.776 50.995c7.629 15.77 18.944 29.952 32.666 40.909 14.694 11.776 33.075 18.227 51.866 18.227s37.171-6.451 51.866-18.176c28.006-22.374 44.083-55.859 44.186-91.904.05-32.359-13.467-63.899-36.558-86.171zM265.2 29.663c0 .051-.051.102-.051.154s-.051.102-.051.154L251.99 72.569l-37.734.102-11.315-42.394v-.102c-.563-1.843-1.997-8.448 1.792-12.442 2.97-3.123 7.475-4.147 11.469-2.611l4.762 1.894h.051c4.096 1.741 8.499 2.611 12.851 2.611s8.704-.87 12.8-2.611l5.069-1.946a10.624 10.624 0 0 1 11.52 2.611c2.764 2.92 3.532 7.63 1.945 11.982zm16.793 21.197-12.646 21.76h-2.355l10.445-33.894a10.923 10.923 0 0 1 3.277 3.226c1.945 3.071 2.457 6.655 1.279 8.908zm-7.372 313.6c-24.115 19.302-57.805 19.302-81.971 0-23.962-19.149-37.786-47.718-37.888-78.336-.051-29.542 12.595-57.242 34.867-76.442 1.997.154 3.994.256 5.99.307h.154l78.746-.205h.307a19.92 19.92 0 0 0 3.021-.205c21.658 19.149 34.458 47.462 34.406 76.595-.052 30.67-13.773 59.188-37.632 78.286z M254.909 291.5c-6.298-2.458-12.698-3.328-18.842-4.147-3.635-.512-7.066-.973-10.342-1.741-5.325-1.229-9.574-3.328-12.595-6.246-2.304-2.202-3.584-5.069-3.584-8.09 0-2.867 1.178-5.632 3.328-7.731 4.096-3.994 10.342-6.758 16.64-7.373 7.322-.666 17.408.922 23.501 6.093 3.021 2.56 4.608 5.632 4.864 9.421.256 3.942 3.686 6.912 7.629 6.656 3.942-.256 6.912-3.686 6.656-7.629-.512-7.629-3.942-14.285-9.882-19.354-6.195-5.274-14.029-7.987-21.555-9.062v-17.306c0-3.942-3.226-7.168-7.168-7.168s-7.168 3.226-7.168 7.168v17.101c-8.96 1.229-17.459 5.222-23.552 11.162-4.966 4.864-7.68 11.264-7.629 18.074.051 6.912 2.918 13.466 8.038 18.33 4.915 4.71 11.418 8.038 19.251 9.882 3.942.922 7.885 1.434 11.674 1.997 5.581.768 10.854 1.485 15.565 3.328 5.171 1.997 8.96 5.581 10.086 9.574.922 3.277.512 5.99-1.382 8.55-4.659 6.246-16.486 10.086-25.293 10.189h-.358c-7.168 0-17.254-2.458-22.784-7.936-2.458-2.458-3.635-5.171-3.635-8.294 0-3.942-3.226-7.168-7.168-7.168s-7.168 3.226-7.168 7.168c0 7.014 2.714 13.414 7.936 18.534 7.168 7.117 17.613 10.547 26.47 11.622v16.998c0 3.942 3.226 7.168 7.168 7.168s7.168-3.226 7.168-7.168v-17.203c10.752-1.69 22.784-6.656 29.235-15.36 4.608-6.195 5.837-13.466 3.635-21.043-2.458-8.449-9.267-15.361-18.739-18.996z",
    },
    {
      img: "icon3.svg",
      demoImg: "iconn3.svg",
      title: "Flexible",
      text: "A diary to suit your needs",
      pathData:
        "M471 511H41c-22.056 0-40-17.944-40-40V81c0-22.056 17.944-40 40-40h30c5.522 0 10 4.478 10 10v19.523c0 5.587 4.32 10.284 9.632 10.47C96.178 81.233 101 76.77 101 71V51c0-5.522 4.477-10 10-10h70c5.522 0 10 4.478 10 10v19.523c0 5.587 4.32 10.284 9.632 10.47C206.216 81.233 211 76.73 211 71V51c0-5.522 4.477-10 10-10h70c5.522 0 10 4.478 10 10v19.523c0 5.587 4.32 10.284 9.632 10.47C316.162 81.232 321 76.782 321 71V51c0-5.522 4.478-10 10-10h70c5.522 0 10 4.478 10 10v19.523c0 5.587 4.32 10.284 9.632 10.47C426.197 81.233 431 76.752 431 71V51c0-5.522 4.478-10 10-10h30c22.056 0 40 17.944 40 40v390c0 22.056-17.944 40-40 40zM41 61c-11.028 0-20 8.972-20 20v390c0 11.028 8.972 20 20 20h430c11.028 0 20-8.972 20-20V81c0-11.028-8.972-20-20-20h-20v10c0 16.964-14.004 30.569-31.068 29.981C403.708 100.413 391 87.034 391 70.523V61h-50v10c0 16.973-14.014 30.569-31.068 29.981C293.708 100.413 281 87.034 281 70.523V61h-50v10c0 16.951-13.993 30.57-31.068 29.981C183.708 100.413 171 87.034 171 70.523V61h-50v10c0 16.92-13.959 30.57-31.068 29.981C73.708 100.413 61 87.034 61 70.523V61z M501 161H11c-5.523 0-10-4.477-10-10s4.477-10 10-10h490c5.522 0 10 4.477 10 10s-4.478 10-10 10zM421 101c-16.542 0-30-13.458-30-30V31c0-16.542 13.458-30 30-30 16.576 0 30 13.425 30 30v40c0 16.542-13.458 30-30 30zm0-80c-5.514 0-10 4.486-10 10v40c0 5.514 4.486 10 10 10s10-4.486 10-10V31c0-5.519-4.479-10-10-10zM311 101c-16.542 0-30-13.458-30-30V31c0-16.542 13.458-30 30-30 16.576 0 30 13.425 30 30v40c0 16.542-13.458 30-30 30zm0-80c-5.514 0-10 4.486-10 10v40c0 5.514 4.486 10 10 10s10-4.486 10-10V31c0-5.519-4.479-10-10-10zM201 101c-16.542 0-30-13.458-30-30V31c0-16.542 13.458-30 30-30 16.576 0 30 13.425 30 30v40c0 16.542-13.458 30-30 30zm0-80c-5.514 0-10 4.486-10 10v40c0 5.514 4.486 10 10 10s10-4.486 10-10V31c0-5.519-4.479-10-10-10zM91 101c-16.542 0-30-13.458-30-30V31C61 14.458 74.458 1 91 1c16.575 0 30 13.425 30 30v40c0 16.542-13.458 30-30 30zm0-80c-5.514 0-10 4.486-10 10v40c0 5.514 4.486 10 10 10s10-4.486 10-10V31c0-5.519-4.479-10-10-10zM131 261H81c-5.523 0-10-4.478-10-10v-50c0-5.523 4.477-10 10-10h50c5.522 0 10 4.477 10 10v50c0 5.522-4.478 10-10 10zm-40-20h30v-30H91zM231 261h-50c-5.523 0-10-4.478-10-10v-50c0-5.523 4.477-10 10-10h50c5.523 0 10 4.477 10 10v50c0 5.522-4.477 10-10 10zm-40-20h30v-30h-30zM331 261h-50c-5.522 0-10-4.478-10-10v-50c0-5.523 4.478-10 10-10h50c5.522 0 10 4.477 10 10v50c0 5.522-4.478 10-10 10zm-40-20h30v-30h-30zM431 261h-50c-5.522 0-10-4.478-10-10v-50c0-5.523 4.478-10 10-10h50c5.522 0 10 4.477 10 10v50c0 5.522-4.478 10-10 10zm-40-20h30v-30h-30zM331 361h-50c-5.522 0-10-4.478-10-10v-50c0-5.522 4.478-10 10-10h50c5.522 0 10 4.478 10 10v50c0 5.522-4.478 10-10 10zm-40-20h30v-30h-30zM431 361h-50c-5.522 0-10-4.478-10-10v-50c0-5.522 4.478-10 10-10h50c5.522 0 10 4.478 10 10v50c0 5.522-4.478 10-10 10zm-40-20h30v-30h-30zM331 461h-50c-5.522 0-10-4.478-10-10v-50c0-5.522 4.478-10 10-10h50c5.522 0 10 4.478 10 10v50c0 5.522-4.478 10-10 10zm-40-20h30v-30h-30zM431 461h-50c-5.522 0-10-4.478-10-10v-50c0-5.522 4.478-10 10-10h50c5.522 0 10 4.478 10 10v50c0 5.522-4.478 10-10 10zm-40-20h30v-30h-30zM131 361H81c-5.523 0-10-4.478-10-10v-50c0-5.522 4.477-10 10-10h50c5.522 0 10 4.478 10 10v50c0 5.522-4.478 10-10 10zm-40-20h30v-30H91zM231 361h-50c-5.523 0-10-4.478-10-10v-50c0-5.522 4.477-10 10-10h50c5.523 0 10 4.478 10 10v50c0 5.522-4.477 10-10 10zm-40-20h30v-30h-30zM131 461H81c-5.523 0-10-4.478-10-10v-50c0-5.522 4.477-10 10-10h50c5.522 0 10 4.478 10 10v50c0 5.522-4.478 10-10 10zm-40-20h30v-30H91zM231 461h-50c-5.523 0-10-4.478-10-10v-50c0-5.522 4.477-10 10-10h50c5.523 0 10 4.478 10 10v50c0 5.522-4.477 10-10 10zm-40-20h30v-30h-30z",
    },
    {
      img: "icon4.svg",
      demoImg: "iconn4.svg",
      title: "Bonuses",
      text: "Financial incentives recognising your efforts",
      pathData:
        "M471.27 271.174h-53.03c-5.046 0-9.149 3.994-9.313 8.952h-15.205c-3.669 0-6.539 2.886-6.539 6.569v5.964h-1.466c-33.332-30.141-62.358-26.009-99.002-20.798-4.443.631-9.002 1.277-13.724 1.888-28.411 3.781-37.886 2.682-73.141-1.425l-9.669-1.125c-12.04-1.43-28.09 1.68-34.878 11.984-2.188 3.323-3.989 8.295-2.479 14.91-13.068-5.455-24.126-10.589-34.873-15.581-13.378-6.213-27.21-12.641-44.725-19.582-22.533-8.89-41.484-1.979-46.802 9.842-3.211 7.13-1.801 18.076 12.737 25.454 26.233 13.251 48.323 25.449 69.681 37.24 21.414 11.826 43.555 24.05 69.904 37.356 4.794 2.423 10.804 5.959 17.165 9.705 20.121 11.841 44.293 26.07 62.928 26.07 3.984 0 7.715-.652 11.098-2.112 23.927-10.314 52.725-17.928 88.021-23.266h29.225v4.773c0 3.618 2.931 6.564 6.539 6.564h15.22c.238 4.969 4.3 8.952 9.298 8.952h53.03a3.729 3.729 0 0 0 3.73-3.73V274.905a3.73 3.73 0 0 0-3.73-3.731zM357.678 375.759c-.188 0-.371.015-.555.041-36.069 5.44-65.553 13.236-90.142 23.836-15.745 6.809-45.535-10.732-67.284-23.536-6.468-3.806-12.58-7.404-17.592-9.933-26.222-13.246-48.302-25.439-69.655-37.229-21.419-11.827-43.57-24.06-69.92-37.367-8.356-4.239-11.832-10.122-9.302-15.734 2.168-4.824 9.379-9.516 20.086-9.516 5.013 0 10.788 1.028 17.17 3.547 17.312 6.859 31.046 13.241 44.323 19.409 13.007 6.045 26.457 12.289 43.407 19.078.222.091.454.115.684.16.106.051.181.14.294.181 33.79 12.452 65.319 18.727 94.005 18.727 5.761 0 11.409-.25 16.936-.758 2.051-.188 3.562-2.005 3.374-4.056s-2.03-3.542-4.056-3.374c-31.785 2.919-67.848-2.93-107.169-17.367-3.008-5.725-3.335-10.652-.749-14.58 4.259-6.457 15.948-10.101 27.774-8.676l9.684 1.125c35.993 4.188 45.667 5.313 74.968 1.409 4.738-.61 9.333-1.262 13.811-1.898 36.456-5.175 62.786-8.931 93.97 19.882a3.73 3.73 0 0 0 2.529.993h2.916v75.64h-29.507zm36.965 3.73v-91.903h14.253v99.512h-14.253zm72.897-64.154h-30.242a3.73 3.73 0 1 0 0 7.46h30.242v73.253h-49.3c-1.038 0-1.883-.87-1.883-1.939V280.425c0-.957.88-1.791 1.883-1.791h49.3z M223.116 261.628c25.51 0 46.267-20.946 46.267-46.695s-20.757-46.699-46.267-46.699c-25.515 0-46.272 20.95-46.272 46.699-.001 25.749 20.756 46.695 46.272 46.695zm0-85.935c21.398 0 38.807 17.603 38.807 39.24 0 21.632-17.409 39.235-38.807 39.235-21.404 0-38.812-17.602-38.812-39.235 0-21.637 17.408-39.24 38.812-39.24z M223.262 229.552c-3.25 0-5.17-1.641-5.318-5.52h-7.385c0 7.012 3.545 11.488 9.454 12.532v4.624h6.056v-4.624c6.204-1.044 9.749-5.819 9.749-11.637 0-13.128-16.987-13.427-16.987-20.737 0-2.536 1.625-4.027 4.284-4.027 2.807 0 4.432 1.64 4.579 4.923h7.533c-.148-6.415-3.398-10.742-9.158-11.786v-4.625h-6.056v4.625c-5.465 1.194-8.715 5.222-8.715 10.593 0 12.831 16.84 13.427 16.84 21.036-.002 2.684-1.626 4.623-4.876 4.623zM327.4 184.645c25.51 0 46.267-20.879 46.267-46.547 0-25.749-20.757-46.695-46.267-46.695-25.515 0-46.273 20.946-46.273 46.695 0 25.668 20.758 46.547 46.273 46.547zm0-85.782c21.398 0 38.807 17.602 38.807 39.235 0 21.55-17.409 39.087-38.807 39.087-21.403 0-38.812-17.536-38.812-39.087 0-21.633 17.409-39.235 38.812-39.235z M327.398 152.72c-3.102 0-5.022-1.641-5.17-5.52h-7.533c.148 7.012 3.693 11.339 9.602 12.532v4.476h6.056v-4.476c6.204-1.194 9.749-5.819 9.749-11.637 0-13.278-16.986-13.427-16.986-20.886 0-2.387 1.477-3.879 4.283-3.879s4.431 1.641 4.579 4.924h7.533c-.148-6.416-3.398-10.742-9.158-11.786v-4.625h-6.056v4.625c-5.466 1.045-8.715 5.222-8.715 10.593 0 12.681 16.839 13.278 16.839 21.036-.001 2.683-1.625 4.623-5.023 4.623z",
    },
    {
      img: "icon6.svg",
      demoImg: "iconn6.svg",
      title: "Cosmopolitan Scrubs",
      text: "Where comfort meets professionalism, on us",
      pathData:
        "m9.52 4.66-7.13 5.55a1 1 0 0 0-.34 1.11l3 9a1 1 0 0 0 1.27.68L11 19.39V45a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V19.39L41.68 21a1 1 0 0 0 1.32-.68l3-9a1 1 0 0 0-.34-1.11l-7.18-5.55a11 11 0 0 0-4.6-2.1L31.2 2H16.8l-2.68.54a11 11 0 0 0-4.6 2.12ZM6.63 18.73l-2.46-7.38 1.24-1L8 18.27ZM28 44H13v-2h15Zm7 0h-5v-2h5Zm8.83-32.65-2.46 7.38-1.37-.46 2.63-7.88ZM31.61 4.14l1.88.38a9.09 9.09 0 0 1 3.76 1.72l3.67 2.85-2.85 8.55-1.75-.59a1 1 0 0 0-.9.14A1 1 0 0 0 35 18v22h-5V30a1 1 0 0 0-.11-.45L25.1 20ZM29.51 4 24 17.37 18.49 4Zm-13.12.14 6.68 16.23v.05L28 30.24V40H13V18a1 1 0 0 0-.42-.81 1 1 0 0 0-.9-.14l-1.75.58-2.85-8.54 3.67-2.85a9.09 9.09 0 0 1 3.76-1.72Z",
    },
    {
      img: "icon5.svg",
      demoImg: "iconn5.svg",
      title: "Discounted Dental Treatments",
      text: "Investing in your smile, our priority",
      pathData:
        "M42.5 47.5C39.7385 47.5 37.5 45.2615 37.5 42.5C37.5 39.7385 39.7385 37.5 42.5 37.5C45.2615 37.5 47.5 39.7385 47.5 42.5C47.5 45.2615 45.2615 47.5 42.5 47.5Z M17.5 22.5C14.7386 22.5 12.5 20.2614 12.5 17.5C12.5 14.7386 14.7386 12.5 17.5 12.5C20.2614 12.5 22.5 14.7386 22.5 17.5C22.5 20.2614 20.2614 22.5 17.5 22.5Z M47.5 12.5L12.5 47.5",
    },
  ];
  // const preloadImages = (imageArray) => {
  //   imageArray.forEach((image) => {
  //     new Image().src = image;
  //   });
  // };

  // useEffect(() => {
  //   const allImages = icons.reduce((acc, icon) => {
  //     return acc.concat([icon.img, icon.demoImg]);
  //   }, []);
  //   preloadImages(allImages);
  // }, []);
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
            {/* <div className="nurses-video"> */}
            <div className="nurses-video">
              <img src="hello.jpeg" alt="" />
              <div className="nurses-video-cont">
                <div className="nurse-video-head">
                  <div className="nurses-flex">
                    <div className="nurses-img1">
                      <p>Nurses</p>
                      <img src="text.svg" alt="" />
                    </div>
                    <div className="nurses-buttons">
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
                                    <option value="  Independent Practice">
                                      Independent Practice
                                    </option>
                                    <option value="Dental Corporate">
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
                    </Modal>
                    {/* </div> */}
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
                    onMouseOver={() => setHoveredIndex(index)}
                    onMouseOut={() => setHoveredIndex(null)}
                  >
                    <div className="image-box">
                      {index === 0 ? (
                        <Icon1
                          hovered={hoveredIndex === index}
                          pathData={icon.pathData}
                        />
                      ) : index === 1 ? (
                        <Icon2
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
                        <Icon6
                          hovered={hoveredIndex === index}
                          pathData={icon.pathData}
                        />
                      ) : index === 5 && icon ? (
                        <Icon5
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

            {/* <div className="testimonial-container1">
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
                <div className="slider-container">
                  <Slider ref={(c) => setSlider(c)} {...settings}>
                    <div className="slider-item">
                      <div className="h3-heading">
                        <h3>Yasmine</h3>
                      </div>
                      <div className="h5-heading">
                        <p>Locum Dental Nurse</p>
                      </div>
                      <div className="p-para">
                        <p>
                          “The platform has given me access to a wide range of
                          opportunities, and the process of securing positions
                          is seamless. I appreciate the consistent support and
                          the chance to work with various dental practices."
                        </p>
                      </div>
                    </div>{" "}
                    <div className="slider-item">
                      <div className="h3-heading">
                        <h3>Abigail</h3>
                      </div>
                      <div className="h5-heading">
                        <p>Locum Dental Nurse</p>
                      </div>
                      <div className="p-para">
                        <p>
                          “Working through Nomad Nurse has been a fantastic
                          experience. The platform is easy to navigate, and I've
                          been able to find rewarding positions quickly. The
                          reliability and professionalism of the company make it
                          my go-to for locum opportunities."
                        </p>
                      </div>
                    </div>{" "}
                    <div className="slider-item">
                      <div className="h3-heading">
                        <h3>Lucy</h3>
                      </div>
                      <div className="h5-heading">
                        <p>Locum Dental Nurse</p>
                      </div>
                      <div className="p-para">
                        <p>
                          “Nomad Nurses has simplified my job search process.
                          The ease of using the app, has made finding locum
                          positions a breeze. The variety of available
                          opportunities make it a go-to platform for any dental
                          nurse."
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
