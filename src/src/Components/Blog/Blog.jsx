import React, { useEffect } from "react";
import "./Blog.css";
import Line from "../../Assetss/text.svg";
import Img from "../../Assetss/pexels-anna-shvets-3845761 2 (2).png";
import AOS from "aos";
import "aos/dist/aos.css";
const Blog = () => {
  useEffect(() => {
    AOS.init({ easing: "ease-out" });
  }, []);
  return (
    <div className="whole-Container">
      <div className="blog-container-full">
        <div className="blog-container">
          <h2 className="blog" data-aos="zoom-in" data-aos-duration="800">
            Blog
          </h2>
          <div
            className="blog-image-container"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <img src={Line} alt="Image" />
          </div>
        </div>

        <div className="blog-img-cont">
          <div className="blog-cards-cont">
            <div
              className="blog-card"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="600"
            >
              <div className="card-blog1">
                <div className="blog-card-img">
                  <img src="doctor.png" alt="" />
                  <div className="card-logo2">
                    <p
                      style={{
                        color: "rgba(73, 115, 103, 1)",
                      }}
                    >
                      Health
                    </p>
                  </div>
                </div>
                <div className="blog-card-head">
                  <p>Knowing where to go makes it a bit easier</p>
                </div>
                <div className="blog-card-text">
                  <p>
                    At Nomad Nurse, we redefine the experience of dental nurse
                    recruitment offering a platform that goes beyond the
                    conventional. By choosing to work with us, dental nurses
                    gain access to a seamless and user-friendly platform that
                    effortlessly connects them with diverse opportunities
                  </p>
                </div>
                <div className="blog-card-button">
                  <button>Read blog</button>
                </div>
              </div>
            </div>
            <div
              className="blog-cards"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="600"
            >
              <div className="blog-card1">
                <div className="blog-cardd">
                  <div className="blog-card-img2">
                    <img src="nurse.png" alt="" />
                  </div>
                  <div className="card-flex">
                    <div className="card-logo">
                      <p style={{ color: "rgba(73, 115, 103, 1)" }}>Health</p>
                    </div>
                    <div className="blog-card-head2">
                      <p>Real impact of nurses on dentists</p>
                    </div>
                    <div className="blog-card-text2">
                      <p>At Nomad Nurse, we redefine the experience...</p>
                    </div>
                    <div className="blog-card-button2">
                      <button>Read more</button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="blog-card1">
                <div className="blog-cardd">
                  <div className="blog-card-img2">
                    <img src={Img} alt="" />
                  </div>
                  <div className="card-flex">
                    <div className="card-logo">
                      <p style={{ color: "rgba(185, 28, 28, 1)" }}>Nursing</p>
                    </div>
                    <div className="blog-card-head2">
                      <p>The nursing crunch is getting real</p>
                    </div>
                    <div className="blog-card-text2">
                      <p>At Nomad Nurse, we redefine the experience...</p>
                    </div>
                    <div className="blog-card-button2">
                      <button>Read more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
