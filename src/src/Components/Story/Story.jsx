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
          <h2>Our Story</h2>
        </div>
        <div className="story-img" data-aos="zoom-in" data-aos-duration="800">
          <img src={Vector} alt="" />
        </div>
        <div className="story-para" data-aos="zoom-in" data-aos-duration="800">
          <p>
            The inception of Nomad Nurses arose from our personal experiences
            within the dental profession. We encountered difficulties in booking
            and securing nurses, realising that nurses lacked the means and
            access to practices seeking locum professionals. Through the
            creation of our ground-breaking app and website, we successfully
            filled this void, facilitating communication between locum nurses
            and dental practices. As practicing dentists without a dedicated
            nurse, we recognised the vital significance of this venture for the
            dental industry. Our objective is to streamline the process of
            booking dental nurses for practices, ensuring a seamless experience
            and enabling nurses to find opportunities with the touch of a
            button.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
