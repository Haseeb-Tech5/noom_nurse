import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Touch from "./Touch/Touch";
import Vector3 from "../Assetss/Vector (3).png";

export default function Cookies() {
  return (
    <>
      <Navbar />
      <div className="terms-main">
        <div className="terms-head">
          <p>Cookie Policy</p>
          <img src={Vector3} alt="" />
        </div>
        <div className="terms-para">
          <p>
            Our website uses cookies to distinguish you from other users of our
            website. This helps us to provide you with a good experience when
            you browse our website and also allows us to improve our site. 
          </p>
          <p>
            A cookie is a small file of letters and numbers that we store on
            your browser or the hard drive of your computer if you agree.
            Cookies contain information that is transferred to your computer's
            hard drive. 
          </p>
          <h4>We use the following cookies:</h4>
          <ul>
            <li>
              Strictly necessary cookies. These are cookies that are required
              for the operation of our website. They include, for example,
              cookies that enable you to log into secure areas of our website.
            </li>
          </ul>
          <p>
            You can find more information about the individual cookies we use
            and the purposes for which we use them in the table below: 
          </p>
          <table style={{ width: "100%" }}>
            <thead>
              <tr style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}>
                <th style={{ display: "flex", flexDirection: "column" }}>
                  <p>Cookie Title</p>
                  <p>Cookie Name</p>
                </th>
                <th style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}>
                  <center>Purpose</center>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}>
                <td style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}>
                  laravel_session
                </td>
                <td style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}>
                  To identify a session instance for a user, cookie expires
                  after two hours.
                </td>
              </tr>
              <tr style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}>
                <td style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}>
                  XSRF-TOKEN
                </td>
                <td style={{ border: "1px solid rgba(128, 128, 128, 0.575)" }}>
                  This cookie is written to help with site security in
                  preventing cross-site request forgery attacks.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            We do not share the information collected by the cookies with any
            third parties. 
          </p>
          <p>
            If you do not want to accept any cookies which are essential to the
            services requested, you may be able to change your browser settings
            so that cookies are not accepted. However, if you block all
            essential cookies then please be aware that you may lose some of the
            functionality of our website and not be able to access all or parts
            of our website. For further information about cookies and how to
            disable them please go to the 
            <strong>
              <Link>guidance on cookies</Link>
            </strong>{" "}
            published by the UK Information Commissioner’s Office, 
            <strong>
              <Link>www.allaboutcookies.org</Link>
            </strong>
            .
          </p>
        </div>
      </div>
      <br />
      <Touch />
    </>
  );
}
