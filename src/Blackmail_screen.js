import Card, {
  PinkCard,
  MobileTopBar,
  BottomBar,
  BlackmailHelp,
  ExploreCard,
  ReportButton,
  ExploreCardsLayout,
  BigScreenTopBar,
} from "./Components.js";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BlackmailScreen() {
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
              fontSize: isMobile ? "30px" : "45px",
              color: "#ff6933",
            }}
          >
            Cyber Blackmail
          </h1>
          {isMobile ? (
            <p>
              Cyber blackmail is a cybercrime where hackers try to trick or
              force you to give them confidential information, a sum of money,
              or to perform indecent acts. They can trick you by claiming they
              have your private information, such as photos, videos, or internet
              history, and threatening you to spread them unless you do as they
              say. Often, victims of blackmail can feel reluctant and ashamed to
              reach out to authorities or organizations that can help them. This
              can be very stressful for the victim.
            </p>
          ) : (
            <p style={{ fontSize: isMobile ? "14px" : "20px" }}>
              Cyber blackmail is a crime where hackers try to trick or pressure
              you
              <br />
              into giving away private data, money, or doing something
              inappropriate.
              <br />
              They may claim they have access to your private photos, videos,
              <br />
              or browsing history — and threaten to leak them unless you obey.
              <br />
              Victims often feel ashamed or too afraid to speak up or get help,
              <br />
              but you're not alone — and support is always available to you.
            </p>
          )}
        </div>
        <div>
          <img
            src={"Identity-Theft--Streamline-Milano.png.png"}
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
        <BlackmailHelp />
      </div>
      <ReportButton />
      <h1 style={{ textAlign: "center" }}>Related Digital Journeys</h1>
      <div
        className="pinkcard-row-styling"
        style={{ gap: "20px", margin: "50px" }}
      >
        <ExploreCard
          title="Social Media and Online Identity"
          text="Soumayya is a student in 10th grade that enjoys photography and Photoshop. However, are there limits to what is appropriate to Photoshop and share online?"
          examples={["Digital Privacy", "Social Media", "Ages 10+"]}
        />
        <ExploreCard
          title="Cybersecurity"
          text="George and Hadi are enjoying their time in school with their new friend John. However, is everyone accepting of the new student in the WhatsApp group chat? And how will George and Hadi react?"
          examples={[
            "Cyberbullying",
            "Social Media",
            "Digital Privacy",
            "Ages 10+",
          ]}
        />
        <ExploreCard
          title="Information literacy"
          text="Asmaa and her husband Fadi have received some exclusive news on social media that will lead to the price of gasoline to skyrocket! Should they share this information?"
          examples={["Information literacy", "Social Media", "Ages 10+"]}
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
        <h1
          style={{
            textAlign: "center",
            fontSize: isMobile ? undefined : "50px",
            paddingBottom: isMobile ? undefined : "40px",
          }}
        >
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

export default BlackmailScreen;
