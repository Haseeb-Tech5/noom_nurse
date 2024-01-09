import React from "react";
import logo from "../../Assetss/logo.png";
// import logo1 from "../../Assests/Monochrome on Transparent 4.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    fontFamily: "'Poppins', sans-serif",
    width: "100%",
    backgroundColor: "white",
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white" style={navbarStyle}>
        <div
          className="container-fluid"
          style={{ position: "fixed", top: "0", backgroundColor: "white" }}
        >
          <a className="navbar-brand" href="/">
            <div className="sss">
              {/* <div className="d-flex flex-column align-items-center"> */}
              <img
                src={logo}
                alt="Your Logo"
                height="40"
                className="d-inline-block align-top yup"
              />
              {/* </div> */}
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center justify-content-lg-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 text-center mx-auto">
              <li className="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    style={{
                      fontWeight: "500",
                      color: "#222222",
                      fontSize: "17px",
                    }}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    style={{
                      fontWeight: "500",
                      color: "#222222",
                      fontSize: "17px",
                    }}
                  >
                    About us
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/nurse"
                  style={{ textDecoration: "none", fontSize: "17px" }}
                >
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    style={{
                      fontWeight: "500",
                      color: "#222222",
                      fontSize: "17px",
                    }}
                  >
                    Nurses
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/practice" style={{ textDecoration: "none" }}>
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    style={{
                      fontWeight: "500",
                      color: "#222222",
                      fontSize: "17px",
                    }}
                  >
                    Practices
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" style={{ textDecoration: "none" }}>
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    style={{
                      fontWeight: "500",
                      color: "#222222",
                      fontSize: "17px",
                    }}
                  >
                    FAQ's
                  </a>
                </Link>
              </li>
            </ul>
            <div className="eee">
              <form className="d-flex justify-content-center" role="search">
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <button
                    className="btn responsive-button"
                    type="submit"
                    style={{
                      backgroundColor: "#AE9C7F",
                      color: "#F3F4F6",
                      padding: "10px 25px",
                      // marginRight: "20px",
                      margin: "10px auto",
                      borderRadius: "8px",
                      // display: "flex",
                      // alignItems: "center",
                      // justifyContent: "center",
                    }}
                  >
                    Contact us
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
