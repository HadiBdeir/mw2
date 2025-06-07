import Card, {
  PinkCard,
  MobileTopBar,
  BottomBar,
  BigScreenTopBar,
} from "./Components.js";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

function CyberSecurityAndPrivacy() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <MobileTopBar />
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          minHeight: isMobile ? "60vh" : "100vh",
          textAlign: "center",
          gap: isMobile ? "20px" : "40px",
          padding: isMobile ? "20px" : "0",
        }}
        className="background-color-verylightorange"
      >
        <div>
          <h1
            className={isMobile ? "muwatana-header-styling" : ""}
            style={{
              fontSize: isMobile ? "30px" : "45px",
              color: "#ff6933",
            }}
          >
            Cybersecurity &<br />
            Privacy
          </h1>
          {isMobile ? (
            <p>
              Cybersecurity and privacy are significant issues that can impact a
              person's daily life. Lebanese authorities, such as
              Telecommunications Regulatory Authority,the Internal Security
              Forces, and the Lebanse General Security address relevant issues
              and advice citizens to be vigilant in the digital world.
            </p>
          ) : (
            <p style={{ fontSize: isMobile ? "14px" : "inherit" }}>
              Cybersecurity and privacy are significant issues that can impact a
              person's daily
              <br />
              life. Lebanese authorities, such as Telecommunications Regulatory
              Authority,
              <br /> the Internal Security Forces, and the Lebanese General
              Security address relevant
              <br />
              issues and advice citizens to be vigilant in the digital world.
            </p>
          )}
        </div>
        <div>
          <img
            src="Password-Security--Streamline-Milano.png.png"
            alt="security"
            className="image-styling"
            style={{
              maxWidth: isMobile ? "80%" : "400px",
              height: "auto",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
      <div
        className="learning-center-styling"
        style={{
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "60px",
        }}
      >
        <h1>Learning Center</h1>
        <div className="card-row-styling">
          <div onClick={() => navigate("/account-protection-screen")}>
            <Card
              title="Account Protection"
              content={
                <>
                  Protect your online accounts such as <br />
                  social media and email.
                </>
              }
              picture={"mdi_security-lock.png"}
            />
          </div>
          <div onClick={() => navigate("/device-protection-screen")}>
            <Card
              title="Device Protection"
              content={
                <>
                  Protect your devices from remote and
                  <br />
                  in-person vulnerabilities.
                </>
              }
              picture={"Component.png"}
            />
          </div>
          <div onClick={() => navigate("/digital_privacy_screen")}>
            <Card
              title="Digital Privacy"
              content={<>Maintain your privacy in the digital world</>}
              picture={"solar_health-bold.png"}
            />
          </div>
          <div className={isMobile ? "bottom-cards-mobile" : "bottom-cards"}>
            <div onClick={() => navigate("/blackmail-screen")}>
              <Card
                title="Blackmail"
                content={
                  <>
                    Protect your online accounts such as
                    <br />
                    social media and email.
                  </>
                }
                picture={"material-symbols_newspaper (1).png"}
              />
            </div>
            <div onClick={() => navigate("/cyberattacks-screen")}>
              <div>
                <Card
                  title="Cyberattacks"
                  content={
                    <>
                      Learn about cyberattacks and how to
                      <br />
                      avoid them.
                    </>
                  }
                  picture={"material-symbols_newspaper (1).png"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="learning-center-styling"
        style={{
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "60px",
        }}
      >
        <h1>Related Topics</h1>
        <div className="pinkcard-row-styling">
          <PinkCard
            title={
              <>
                Setting up 2-Factor
                <br />
                Authentication
              </>
            }
            content={
              <>
                Keep your account safe with
                <br />
                an extra security step.
              </>
            }
          />
          <div onClick={() => navigate("/creating_strong_password_screen")}>
            <PinkCard
              title={
                <>
                  Creating a <br />
                  password
                </>
              }
              content={
                <>
                  Learn how to create a<br />
                  strong, safe password.
                </>
              }
            />
          </div>
          <div onClick={() => navigate("/phishing-screen")}>
            <PinkCard
              title={<>Phishing</>}
              content={
                <>
                  A popular type <br />
                  cyberattacks is phishing.
                  <br />
                  Learn how to protect
                  <br />
                  yourself.
                </>
              }
            />
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
}

export default CyberSecurityAndPrivacy;
