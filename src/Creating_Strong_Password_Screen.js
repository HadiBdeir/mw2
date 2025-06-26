import Card, {
  PinkCard,
  InfoPackWithButton,
  MobileTopBar,
  BottomBar,
  PhishingExamples,
  Facts,
  Image,
  Remember,
  PropertiesOfAStrongPassword,
  PasswordManager,
  BigScreenTopBar,
} from "./Components.js";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

function CreatingStrongPasswordScreen() {
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
            Creating a Strong
            <br />
            Password
          </h1>
          {isMobile ? (
            <p>
              A password is a method to identify the user of the account, and it
              is considered one of the most important ways to protect your
              account.
              <br />
              Just like you would put a lock on your house and only open it with
              a key, you should protect your account by setting up a strong
              password that only you know.
            </p>
          ) : (
            <p style={{ fontSize: isMobile ? "14px" : "20px" }}>
              A password is a method to identify the user of the account, and it
              is
              <br />
              considered one of the most important ways to protect your account.
              <br />
              <br />
              Just like you would put a lock on your house and only open it with
              a<br />
              key, you should protect your account by setting up a strong
              password
              <br />
              that only you know.
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
      <div
        className="learning-center-styling"
        style={{
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "60px",
        }}
      >
        <PropertiesOfAStrongPassword />
        <PasswordManager />
      </div>
      <BottomBar />
    </>
  );
}

export default CreatingStrongPasswordScreen;
