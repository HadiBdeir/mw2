import Card, {
  MobileTopBar,
  BottomBar,
  BigScreenTopBar,
} from "./Components.js";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

const paragraphs = [
  "Muwatana is a digital space dedicated to empowering individuals in the Arab world, especially in Lebanon, with the knowledge, tools, and values they need to navigate the digital world responsibly and confidently.",
  "At its core, Muwatana promotes digital citizenship: understanding our rights and responsibilities online, thinking critically about the information we consume and share, protecting our privacy, and engaging respectfully in digital communities.As technology becomes a bigger part of our lives, it’s crucial that everyone, regardless of background or age, has access to culturally relevant, accessible, and practical guidance.",
  "Muwatana is built with educators, students, and curious minds in mind. Our goal is to connect global digital citizenship principles with the realities and challenges of life in the Arab world, starting with Lebanon.",
];

function AboutUsScreen() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div>{!isMobile ? <BigScreenTopBar /> : <MobileTopBar />}</div>

      <div
        style={{
          margin: "100px auto",
          flex: "1",
          maxWidth: isMobile ? "92%" : "1200px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "60px" : "80px",
            marginBottom: "35px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          About Us
        </h1>
        <div
          style={{
            fontSize: isMobile ? "20px" : "24px",
            lineHeight: "1.15",
            marginBottom: isMobile ? "50px" : "20px",
          }}
        >
          {paragraphs.map((paragraph, index) => (
            <ParagraphFunction key={index} paragraph={paragraph} />
          ))}
        </div>
        <h1
          style={{
            fontSize: "40px",
            textAlign: isMobile ? "center" : "left",
            marginBottom: "0px"
          }}
        >
          Our Goals
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <ul
            style={{
              fontSize: "24px",
            }}
          >
            <li>
              Helping to make the internet safer, kinder, and more helpful for
              everyone
            </li>
            <li>Encouraging safe and responsible use of technology</li>
            <li>
              Showing how technology can be used in positive and helpful ways
            </li>
          </ul>
          <img src="aboutpagepicture.png" width={isMobile ? "95%" : " 40%"} />
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default AboutUsScreen;

function ParagraphFunction({ paragraph }) {
  return (
    <p
      style={{
        margin: "0px",
      }}
    >
      {paragraph}
    </p>
  );
}
