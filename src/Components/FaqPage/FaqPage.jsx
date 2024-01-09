import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Vector3 from "../../Assetss/text.svg";
import Touch from "../Touch/Touch";
import "./FaqPage.css";
import Faq from "react-faq-component";
import { Tab, Row, Col, Nav, NavItem } from "react-bootstrap";
import { BounceLoader } from "react-spinners";
import Switch from "react-switch"; // Import the Switch from react-switch

const dataNurse = {
  rows: [
    {
      title: "How can I sign up and create a profile on your platform?",
      content: (
        <span style={{ color: "#606060" }}>
          You register on the website or the App and follow the steps required.
        </span>
      ),
    },
    {
      title:
        "What types of locum positions are available for dental nurses on your platform?",
      content: (
        <span style={{ color: "#606060" }}>
          We have both short and long term locum positions available.
          Furthermore, some of these roles have specialties aswell.
        </span>
      ),
    },
    {
      title: "Is there a fee for dental nurses to use your platform?",
      content: <span style={{ color: "#606060" }}>No.</span>,
    },
    {
      title: "How quickly can I find locum positions through your platform?",
      content: `You will be able to search all the locum positions straight away.`,
    },
    {
      title: "What documents should I upload to register?",
      content: `a) GDC registration certificate<br>
                b) DBS<br>
                c) Indemnity<br>
                d) Hepatitis B<br>
                e) CV<br>`,
    },

    {
      title:
        "Can I book multiple locum positions simultaneously on your platform?",
      content: `Yes you can.`,
    },
    {
      title:
        "Is there a review or rating system for dental nurses on your platform?",
      content: `Yes there is. Dental practices will have a review form to fill at the end of your shift.`,
    },
    {
      title:
        "Can I specify my availability and preferences for locum positions on your platform?",
      content: `Yes.`,
    },
    {
      title: "Can I view my upcoming/past locum work",
      content: `Yes.`,
    },
    {
      title: "What benefits does your platform offer to dental nurses?",
      content: `Our platform provides dental nurses with access to a diverse range of locum positions, offering flexibility in scheduling and the opportunity to connect with reputable dental practices. With an easy-to-use interface and real-time notifications, dental nurses can efficiently manage their schedules, check their accounts, review their past and present locum positions, all in one easy to use App. `,
    },
    {
      title:
        "Can I communicate directly with dental practices through your platform?",
      content: `Yes, once the booking is confirmed.`,
    },
    {
      title:
        "Is my personal information kept private and secure on your platform? ",
      content: `Yes. We follow all data protection regulations.`,
    },
    {
      title:
        "How do I receive notifications about new locum opportunities on your platform?",
      content: `You will have live notifications on the App & website platform as soon as practices post new locum positions.`,
    },
    {
      title:
        "What types of dental practices use your platform to find locum nurses?",
      content: `All types of practices ranging from independent fully private to large corporates.`,
    },
    {
      title:
        "Is there customer support available for dental nurses using your platform?",
      content: `Yes, we have a maintenance team available 24/7 for any technical issues encountered.  `,
    },
    {
      title:
        "Can I leave feedback or reviews for dental practices I work with through your platform? ",
      content: `Yes.`,
    },
    {
      title: "What happens if I need to cancel my booking? ",
      content: `If you cancel within 48hrs you might incur a fee. If you find a substitute no fee is incurred.   `,
    },
    {
      title: "What happens if the practice cancels on me?",
      content: `If the clinic cancels within 48hrs you will get paid 50% of that shift. If the practice cancels within 24hs you will get paid for the full shift.`,
    },
  ],
};
const dataPractice = {
  //title: "Frequently Asked Questions",
  rows: [
    {
      title: "How does your platform work for dental practices?",
      content: (
        <span style={{ color: "#606060" }}>
          Our App/Website allows practices to book locum dental nurses
          instantaneously.{" "}
        </span>
      ),
    },
    {
      title: "What benefits does your platform offer to dental practices?",
      content: (
        <span style={{ color: "#606060" }}>
          We offer a user-friendly live interactive App/Website, serving as a
          comprehensive platform for practices to effortlessly book locum nurses
          with a simple touch. Enjoy the perks of reliability, convenience, and
          transparent account management, all while enhancing efficiency in time
          management for each practice—eliminating the need for tedious
          paperwork.
        </span>
      ),
    },
    {
      title:
        "How can dental practices find locum dental nurses using your platform?",
      content: (
        <span style={{ color: "#606060" }}>
          You register, which gives you access to all our locum nurses available
          in your area.
        </span>
      ),
    },
    {
      title: "Is there a cost for dental practices to use your platform?",
      content: `Currently there is no fee to join our platforms.`,
    },
    {
      title:
        "What makes your platform different from other dental staffing solutions?",
      content: `Most of the locum agencies do not have access to any modern platforms such as an App. Furthermore, our App is only platform on the market which has all the features you require.`,
    },
    {
      title:
        "Can I post multiple job listings for different positions on your platform?",
      content: `Yes.`,
    },
    {
      title:
        "How quickly can dental practices find a suitable locum dental nurse through your platform?",
      content: `Providing you register, you will have access to all the locum nurses currently available. If a nurse is found, a booking can be made within minutes without leasing with an intermediary.`,
    },
    {
      title:
        "What information do I need to provide when posting a job on your platform?",
      content: `All the specific details about the locum job such as date, times and duration.`,
    },
    {
      title:
        "How do you ensure the reliability and quality of locum dental nurses on your platform?",
      content: `All our nurses are GDC registered, compliant with their current CPD needs and we also ask for their CVs which we thoroughly check to make sure they are up to our standards.`,
    },
    {
      title:
        "Is there customer support available for dental practices using your platform?",
      content: `Yes, we have a maintenance team available 24/7 for any technical issues encountered.`,
    },
    {
      title:
        "Do you offer any guarantees for locum placements made through your platform?",
      content: `If the locum nurse cancels within 48hrs they will incur a fee which is non-refundable. This is a deterrent, and therefore reduces the likelihood of locum nurses cancelling their shifts.`,
    },
    {
      title:
        "Can dental practices customize their job listings on your platform?",
      content: `Yes.`,
    },
    {
      title:
        "How do you ensure privacy and security for dental practices using your platform?",
      content: `We follow all data protection regulations. The platforms are encrypted with the latest technology. `,
    },
    {
      title:
        "Is your platform accessible to dental practices of all sizes, including independent practices and larger corporates?",
      content: `Yes.`,
    },
    {
      title:
        "Can dental practices leave feedback or reviews for locum dental nurses on your platform?",
      content: `Yes. All feedback and reviews are acknowledged..`,
    },
    {
      title: "How do I get started as a dental practice on your platform?",
      content: `Click on the ‘Register’ button and follow the easy steps.`,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "grey",
  // rowContentColor: "#707070",
  // rowContentColor: "#606060",

  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const FaqPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("first");

  useEffect(() => {
    const delay = 3000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);
  const handleSwitchChange = (checked) => {
    setActiveTab(checked ? "second" : "first");
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
          <div
            style={{
              width: "100%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="faq1-container">
              <div className="heading">
                <p className="heading-text">FAQ's</p>
              </div>
              <div className="fag-img">
                <img src={Vector3} alt="" />
              </div>
              <div className="faq-heading">
                <p>
                  Please select your role to see the appropriate frequently
                  asked questions
                </p>
              </div>

              <Tab.Container
                id="left-tabs-example"
                activeKey={activeTab}
                onSelect={(key) => setActiveTab(key)}
              >
                <Row>
                  <Col sm={12} lg={12}>
                    <Nav variant="pills" className="flex-row pills">
                      <div
                        style={{
                          display: "flex",
                          alignContent: "center",
                          marginTop: "12px",
                        }}
                      >
                        <div
                          className={`role-toggle nurse ${
                            activeTab === "first" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("first")}
                          style={{
                            color: activeTab === "first" ? "#ae9c7f" : "black",
                            fontWeight: activeTab === "first" ? "600" : "300",
                            padding: "10px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "22px",
                          }}
                        >
                          Nurse
                        </div>
                        <Switch
                          onChange={handleSwitchChange}
                          checked={activeTab === "second"}
                          uncheckedIcon={false}
                          checkedIcon={false}
                          onColor="#AE9C7F"
                          offColor="#AE9C7F"
                          height={50}
                          width={120}
                          handleDiameter={35}
                        />
                        {/* Practice Section */}
                        <div
                          className={`role-toggle practice ${
                            activeTab === "second" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("second")}
                          style={{
                            color: activeTab === "second" ? "#ae9c7f" : "black",
                            fontWeight: activeTab === "second" ? "600" : "300",
                            padding: "10px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "22px",
                          }}
                        >
                          Practice
                        </div>
                      </div>
                    </Nav>
                  </Col>

                  <Col sm={12} style={{ marginTop: "-10px" }}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className="main">
                          <div className="faqtable">
                            <Faq
                              data={dataNurse}
                              styles={styles}
                              config={config}
                            />
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="main">
                          <div className="faqtable">
                            <Faq
                              data={dataPractice}
                              styles={styles}
                              config={config}
                            />
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
          <div style={{ overflow: "hidden", width: "100%" }}>
            <Touch />
          </div>
        </>
      )}
    </>
  );
};

export default FaqPage;
