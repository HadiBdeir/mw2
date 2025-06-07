import Card, {
  PinkCard,
  InfoPackWithButton,
  MobileTopBar,
  BottomBar,
  PhishingExamples,
  Facts,
  Image,
  Remember,
  InformationCard,
  SmallButton,
  BigScreenTopBar,
} from "./Components.js";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

function DigitalPrivacyScreen() {
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
            Digital Privacy
          </h1>
          {isMobile ? (
            <p>
              Digital privacy is your right to keep your personal information
              private in the digital world.
            </p>
          ) : (
            <p style={{ fontSize: isMobile ? "14px" : "20px" }}>
              Digital privacy is your right to keep your personal information
              private in the digital world.
            </p>
          )}
        </div>
        <div>
          <img
            src={"Phishing-Email--Streamline-Milano.png"}
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
      <div>
        <InformationCard
          title={
            <div style={{ textAlign: "center" }}>
              The dangers of poor
              <br />
              digital privacy
            </div>
          }
          words={["Cyberattacks", "Blackmail", "Cyberstalking"]}
        />
      </div>
      <div>
        <Remember
          style={{ paddingBottom: "20px" }}
          source={
            "https://www.cisco.com/c/en/us/products/security/secure-access/phishing-for-dummies.html"
          }
          title={<>Privacy essentials</>}
          content={
            <>
              <ul>
                <li>
                  Anything you put on the internet is now public information,
                  and you may be unable to delete it.
                </li>
                <li>
                  When you post photos of your child on public social media
                  accounts, you are doing this without their consent.
                </li>
              </ul>
            </>
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "none",
            backgroundColor: "rgb(247, 234, 236)",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "fit-content",
            borderRadius: "17px",
            margin: isMobile ? "20px" : "40px",
            minHeight: "750px",
            height: "auto",
            padding: isMobile ? "30px 20px" : "40px 50px",
            boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "32px" : "45px",
              textAlign: "center",
              width: "100%",
            }}
          >
            To maintain digital privacy
          </h1>
          <InfoPackWithButton
            picture={"Vector (2).png"}
            title={<>Be cautious when sharing personal information online</>}
            description={
              <>
                Think twice when sharing information about yourself, your
                family, or your friends on the internet; once it is online, you
                cannot control its spread.
              </>
            }
            imageOnTop={isMobile}
          />
          <InfoPackWithButton
            picture={"stash_private-content.png"}
            title={<>Keep your account private</>}
            description={
              <>
                Most social media websites, such as Facebook, Instagram, and
                TikTok, have settings to keep the content of your account
                private. It is recommended to keep your page private, so
                strangers do not have access to your information.
              </>
            }
            imageOnTop={isMobile}
          />
          <InfoPackWithButton
            picture={"ri_information-off-line.png"}
            title={<>Provide minimal information for new online accounts</>}
            description={
              <>
                For example, you are not required to provide your education,
                work experience, hometown, etc., to open a new Facebook account.
              </>
            }
            imageOnTop={isMobile}
          />
          <InfoPackWithButton
            picture={"ix_hat-man.png"}
            title={<>Do not contact strangers</>}
            description={
              <>
                Do not accept friend or follow requests from those you don't
                know on social media.
              </>
            }
            imageOnTop={isMobile}
          />
          <InfoPackWithButton
            picture={"material-symbols_no-photography-outline.png"}
            title={
              <>Do not allow others to share your photos without your consent</>
            }
            description={
              <>
                This can include photos of yourself or your family. While you
                control the privacy settings of your account, you cannot do the
                same for others' accounts.
              </>
            }
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
        </div>
      </div>
      <BottomBar />
    </>
  );
}

export default DigitalPrivacyScreen;
