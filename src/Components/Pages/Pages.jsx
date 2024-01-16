import React from "react";
import Video from "../Video/Video";
import Story from "../Story/Story";
import Nurse from "../Nurse/Nurse";
import Testimonials from "../Testimonials/Testimonials";
import Discount from "../Discount/Discount";
import Navbar from "../Navbar/Navbar";
import Blog from "../Blog/Blog";
import Experience from "../Experience/Experienece";
import Register from "../Register/Register";
import Touch from "../Touch/Touch";
// import Experience from "../Experience/Experience";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import "./Pages.css";
const Pages = () => {
  const [isLoading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const delay = 3000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);
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
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              // display: "flex",
              // justifyContent: "center",
            }}
          >
            {/* <div style={{ maxWidth: "1440px" }}> */}
            <Navbar />
            <Video />
            <Story />
            <Nurse />
            <div className="blurred-line" />

            <Discount />
            <Testimonials />
            {/* <Blog /> */}
            {/* <Experience /> */}
            <Register />
            <Touch />
            {/* </div> */}
          </div>
        </>
      )}
    </>
  );
};

export default Pages;
