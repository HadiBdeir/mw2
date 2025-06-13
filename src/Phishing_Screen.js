import Card, {
  PinkCard,
  InfoPackWithButton,
  MobileTopBar,
  BottomBar,
  PhishingExamples,
  Facts,
  Image,
  Remember,
  WhyWouldSomeoneHackYou,
  BigScreenTopBar,
} from "./Components.js";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

function PhishingScreen() {
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
            Phishing
          </h1>
          {isMobile ? (
            <p>
              Phishing is a cyberattack where an attacker pretends to be a
              recognized organization, such as a bank or school, to trick the
              user into giving them sensitive information or to infect their
              device with malware. Sometimes, these attackers send links be sent
              by email, text messages, or even instant messages on applications
              such as WhatsApp.
            </p>
          ) : (
            <p style={{ fontSize: isMobile ? "14px" : "20px" }}>
              Phishing is a cyberattack where an attacker pretends to be a
              recognized organization,
              <br />
              such as a bank or school, to trick the user into giving them
              sensitive information or to infect
              <br />
              their device with malware. Sometimes, these attackers send links
              <br />
              be sent by email, text messages, or even instant messages on
              applications
              <br />
              such as WhatsApp.
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
      <PhishingExamples
        style={{
          width: "1150px",
          height: "auto",
          borderRadius: "20px",
          boxShadow: "0px 1px 5px 2px rgba(0, 0, 0, 0.3)",
          backgroundColor: "white",
          paddingBottom: "40px",
          margin: "50px auto",
        }}
        title={<div style={{ paddingLeft: "4%" }}>Examples of Phishing</div>}
      >
        <ul
          style={{
            paddingLeft: "70px",
            paddingRight: "60px",
            fontSize: "20px",
          }}
        >
          <li className="exmaple-styling">
            <p>
              An email that informs you all your data will be deleted unless you
              click the link.
            </p>
          </li>
          <li className="exmaple-styling">
            <p>
              A WhatsApp message from a stranger asking you to click a link for
              cash.
            </p>
          </li>
          <li className="exmaple-styling">
            <p>An email from your bank asking you to download a file.</p>
          </li>
          <li className="exmaple-styling">
            <p>
              An email asking you to input your username and password to verify
              your identity.
            </p>
          </li>
        </ul>
      </PhishingExamples>
      <WhyWouldSomeoneHackYou />
      <Facts
        source={
          "https://www.cisco.com/c/en/us/products/security/secure-access/phishing-for-dummies.html"
        }
        title={<>Facts About Phishing</>}
        content={
          <>
            <li>1 in every 99 emails is a phishing attack.</li>
            <li>30% of phishing attacks are opened.</li>
          </>
        }
      />
      <PhishingExamples
        title={
          <span style={{ paddingLeft: isMobile ? "0" : "4%" }}>
            How to Identify a Phishing Attempt
          </span>
        }
      >
        <ul
          style={{
            paddingLeft: isMobile ? "10px" : "70px",
            paddingRight: isMobile ? "10px" : "60px",
            fontSize: isMobile ? "16px" : "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "flex-start",
              marginBottom: isMobile ? "20px" : "0",
            }}
          >
            <div
              style={{
                marginRight: isMobile ? "0" : "15px",
                marginBottom: isMobile ? "10px" : "0",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                paddingBottom: isMobile ? "10px" : "30px",
              }}
            >
              <Image src="1.jpg" />
            </div>
            <p style={{ textAlign: isMobile ? "center" : "left" }}>
              <b>Check the sender:</b> If you do not know the sender or if the
              sender is an institution and you do not expect an email from them,
              it could be phishing. When you get an email from an institution
              that might send you a legitimate email, make sure the domain is
              correct (@microsoft.com, not @microsatt.com for example).
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "flex-start",
              marginBottom: isMobile ? "20px" : "0",
            }}
          >
            <div
              style={{
                marginRight: isMobile ? "0" : "15px",
                marginBottom: isMobile ? "10px" : "0",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                paddingBottom: isMobile ? "10px" : "30px",
              }}
            >
              <Image src="2.png" />
            </div>
            <p style={{ textAlign: isMobile ? "center" : "left" }}>
              <b>Check for hyperlinks:</b> Are there hyperlinks in the email? If
              so, hover over them to check the URL and check for popular
              websites with misspellings (byblosbamk.com).
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "center" : "flex-start",
            }}
          >
            <div
              style={{
                marginRight: isMobile ? "0" : "15px",
                marginBottom: isMobile ? "10px" : "0",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                paddingBottom: isMobile ? "10px" : "30px",
              }}
            >
              <Image src="3.jpg" />
            </div>
            <p style={{ textAlign: isMobile ? "center" : "left" }}>
              <b>Check the content:</b> Is the e-mail offering you money or a
              job? Is it claiming to be very urgent? Are they trying to scare
              you by claiming to have secret information about you? These are
              signs thatz an attacker is trying to pressure you.
            </p>
          </div>
        </ul>
      </PhishingExamples>
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
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            borderRadius: "17px",
            margin: "20px",
            minHeight: "750px",
            height: "auto",
            padding: "30px 20px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.4)",
          }}
        >
          <h1 style={{ fontSize: "45px", textAlign: "center", width: "100%" }}>
            To protect yourself from phishing{" "}
          </h1>
          <InfoPackWithButton
            picture={"At sign.png"}
            title={<>Check the email address of the sender</>}
            description={
              <>
                Before clicking any links or attachments and before responding
                to an email, check the sender's name and email address to ensure
                it is an email from someone you know.
              </>
            }
          />
          <InfoPackWithButton
            picture={"Icon.png"}
            title={<>Is it urgent?</>}
            description={
              <>Be suspicious of emails and messages that claim to be urgent.</>
            }
          />
          <InfoPackWithButton
            picture={"fluent-mdl2_spelling.png"}
            title={<>Check the grammar and spelling of the email</>}
            description={
              <>
                If there are any spelling or grammar mistakes, it is a sign it
                is a phishing attempt.
              </>
            }
          />
          <InfoPackWithButton
            picture={"fluent_person-key-24-regular.png"}
            title={<>Do not provide personal information</>}
            description={
              <>
                Never provide your information when requested via email, text,
                or instant messaging.
              </>
            }
          />
          <InfoPackWithButton
            picture={"mdi_spy.png"}
            title={<>Do not give a stranger access to your devices</>}
            description={
              <>
                Do not loan a stranger your phone, laptop, or any other device.
              </>
            }
          />
          <InfoPackWithButton
            picture={"Link.png"}
            title={<>Do your best to not click any links in the email</>}
            description={
              <>
                When receiving emails from known institutions (the government,
                your bank, your doctor), go directly to the source instead of
                clicking on links in the email.
              </>
            }
          />
        </div>
      </div>
      <div>
        <Remember
          source={
            "https://www.cisco.com/c/en/us/products/security/secure-access/phishing-for-dummies.html"
          }
          title={<>Facts About Phishing</>}
          content={
            [
              "Legitimate organizations will never ask for sensitive information via email. When in doubt, contact the organization directly using their official contact information."
            ]
          }
        />
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

export default PhishingScreen;
