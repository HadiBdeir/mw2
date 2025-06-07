import Card, {
  PinkCard,
  MobileTopBar,
  BottomBar,
  InfoPack,
  SmallButton,
  ExploreCard,
  BigScreenTopBar,
  InfoPackWithButton,
} from "./Components.js";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DeviceProtectionScreen() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile ? <BigScreenTopBar /> : <MobileTopBar />}
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
              fontSize: isMobile ? "30px" : "70px",
              color: "#ff6933",
            }}
          >
            Device Protection
          </h1>
          {isMobile ? (
            <p>
              Your device contains your personal information such as your
              private photos, private messages, and social media accounts.
              Therefore, it is very important to keep your device.
            </p>
          ) : (
            <p style={{ fontSize: isMobile ? "14px" : "20px" }}>
              Your device contains your personal information such as your
              private photos,
              <br />
              private messages, and social media accounts. Therefore, it is very
              important
              <br />
              to keep your device.
            </p>
          )}
        </div>
        <div>
          <img
            src={"Logged-In-3--Streamline-Milano.png.png"}
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
        className="background-color-verylightpink"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "30px",
            height: "auto",
            minHeight: "750px",
            padding: "30px 20px",
            paddingTop: "10px",
          }}
        >
          <h1 style={{ fontSize: "45px", textAlign: "left", width: "100%" }}>
            To keep your device safe
          </h1>
          <div style={{ paddingLeft: "30px" }}>
            <InfoPackWithButton
              title={"Limit access to your device"}
              description={[
                "Set a strong password to protect your device and set Autolock on your phone and computer.",
                "Perform a factory reset on your device before you give it away or sell it.",
              ]}
            />
          </div>
        </div>
      </div>
      <div className="explore-card-container" style={{ margin: "20px" }}>
        <ExploreCard
          title={
            <>
              Social Media and
              <br />
              Online Identity
            </>
          }
          text={
            <>
              Soumayya is a student in 10th grade that enjoys photography and
              Photoshop. However, are there limits to what is appropriate to
              Photoshop and share online?
            </>
          }
          examples={["Digital Privacy", "Social Media", "Ages 10+"]}
        />
        <ExploreCard
          title={
            <>
              <span style={{ display: "block", marginTop: "-10px" }}>
                Cyberbullying
              </span>
            </>
          }
          text={
            <>
              George and Hadi are enjoying their time in school with their new
              friend John. However, is everyone accepting of the new student in
              the WhatsApp group chat? And how will George and Hadi react?
            </>
          }
          examples={[
            "Cyberbullying",
            "Social Media",
            "Digital Privacy",
            "Ages 10+",
          ]}
        />
        <ExploreCard
          title={
            <>
              information
              <br />
              Literacy
            </>
          }
          text={
            <>
              Asmaa and her husband Fadi have received some exclusive news on
              social media that will lead to the price of gasoline to skyrocket!
              Should they share this information?
            </>
          }
          examples={["Digital Privacy", "Social Media", "Ages 10+"]}
        />
      </div>
      <div
        className="resources-part-styling"
        style={{
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "60px",
        }}
      >
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Related Topics
        </h1>
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
          <div>
            <PinkCard
              onClick={() => navigate("/creating_strong_password_screen")}
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

export default DeviceProtectionScreen;
