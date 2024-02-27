import React, { useEffect } from "react";
import Vector from "../../Assetss/text.svg";
import "./Story.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Story = () => {
  useEffect(() => {
    AOS.init({ easing: "ease-out" });
  }, []);
  return (
    <div className="story-container">
      <div className="width-container">
        <div
          className="story-heading"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <h2>The dental industry’s most innovative recruitment agency</h2>
        </div>
        <div className="story-img" data-aos="zoom-in" data-aos-duration="800">
          <img src={Vector} alt="" />
        </div>
        <div className="story-para" data-aos="zoom-in" data-aos-duration="800">
          <p>
            Our tailored recruitment services are exclusively designed for
            dental professionals and led by individuals with firsthand
            experience in dentistry. We specialise in harmonising dental staff
            with practices, streamlining the entire process and efficiently
            matching qualified professionals with fitting job roles.
          </p>
        </div>
        <div className="story-para" data-aos="zoom-in" data-aos-duration="800">
          <p>
            Our dedicated team ensures a smooth and optimised experience,
            offering invaluable support to both oral healthcare professionals
            seeking opportunities and practices in need of skilled staff.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
