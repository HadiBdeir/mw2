import Card, {
  PinkCard,
  MobileTopBar,
  BottomBar,
  BigScreenTopBar,
  InfoPackWithButton,
} from "./Components.js";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

function Cyberattack() {
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
          minHeight: isMobile ? "60vh" : "77vh",
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
            Cyberattacks
          </h1>
          {isMobile ? (
            <p>
              A cyberattack is a harmful attempt to gain unauthorized access to
              someone else's devices or information, whether it's an individual
              or an institution. The goal may be to delete important data,
              commit blackmail, steal money, or gain any other advantage from
              the stolen information.
            </p>
          ) : (
            <p style={{ fontSize: isMobile ? "14px" : "20px" }}>
              A cyberattack is a harmful attempt to gain unauthorized access to
              someone
              <br />
              else's devices or information, whether it's an individual or an
              institution. The
              <br />
              goal may be to delete important data, commit blackmail, steal
              money, or gain
              <br />
              any other advantage from the stolen information.
            </p>
          )}
        </div>
        <div>
          <img
            src="082157c332f85bee1e8ddaa4af8c5727a71a26d0.png"
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
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "45px",
            fontWeight: "700px",
            marginBottom: "30px",
          }}
        >
          To protect yourself from cyberattacks
        </h1>
        <div>
          <InfoPackWithButton
            picture={"Vector.png"}
            title={<>Keep your devices and accounts safe</>}
            description={[
              "Follow good practices to keep your devices and accounts safe.",
            ]}
            imageOnTop={isMobile}
          />
        </div>
        <div>
          <InfoPackWithButton
            picture={"Vector.png"}
            title={<>Beware of phishing attacks</>}
            description={[
              "Be cautious when you receive emails or text messages with links attached to avoid phishing attacks.",
            ]}
            imageOnTop={isMobile}
          />
        </div>
        <div>
          <InfoPackWithButton
            picture={"Vector.png"}
            title={<>Do not visit dangerous websites</>}
            description={[
              "Do not visit suspicious websites, such as websites with many advertisements and websites meant to talk to strangers.",
              "Avoid websites that do not start with `https`.",
            ]}
            imageOnTop={isMobile}
          />
        </div>
        <div>
          <InfoPackWithButton
            picture={"Vector.png"}
            title={<>Protect your data in public</>}
            description={[
              "Do not use public Wi-Fi or Wi-Fi offered in cafes, airports, malls, etc… If it is necessary, once you are finished with the Wi-Fi, forget the network.",
              "When using your device in a public space, be aware of your surroundings and do not display private and sensitive information in front of others.",
            ]}
            imageOnTop={isMobile}
          />
        </div>
        <div>
          <InfoPackWithButton
            picture={"Vector.png"}
            title={<>Maintain your digital privacy online</>}
            description={[
              "Do not post private information and passwords on the internet as anything posted on the internet is now accessible by the public.",
              "Do not send your personal information and passwords to anyone that asks you for it online, even if they claim to be an official organization such as a bank.",
            ]}
            imageOnTop={isMobile}
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
          <div className={isMobile ? "bottom-cards-mobile" : "bottom-cards"}>
            <div onClick={() => navigate("/blackmail-screen")}>
              <Card
                title="Viruses"
                content={
                  <>
                    Protect your online accounts such as
                    <br />
                    social media and email.
                  </>
                }
                picture={"Vector (4).png"}
              />
            </div>
            <div onClick={() => navigate("/cyberattacks-screen")}>
              <div>
                <Card
                  title="Phishing"
                  content={
                    <>
                      Protect your devices from remote and
                      <br />
                      in-person vulnerabilities.
                    </>
                  }
                  picture={"fluent_mail-link-24-filled.png"}
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
          <PinkCard
            title={<>Cyber-Blackmail</>}
            content={
              <>
                Learn what to do if you are
                <br />
                being blackmailed through
                <br />
                technology.
              </>
            }
          />
          <div onClick={() => navigate("/phishing-screen")}>
            <PinkCard
              title={<>Phishing</>}
              content={
                <>
                  A popular type of
                  <br />
                  cyberattacks is phishing.
                  <br />
                  Learn how to yourself.
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

export default Cyberattack;
