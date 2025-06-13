import Card, {
  MobileTopBar,
  BottomBar,
  BigScreenTopBar,
} from "./Components.js";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const dictionary = {
  Cybersecurity: "The practice of protecting computers, networks, and data from unauthorized access, attacks, or damage. It involves tools, processes, and practices to keep digital systems secure.",
  
  Domain: "The name that identifies a website on the internet (like muwatana.lb). It’s part of the URL and points to a specific server where a site is hosted.",
  
  Hacker: "Someone who uses their knowledge of computers and networks to gain access to systems—sometimes for malicious purposes (black-hat hackers), and sometimes to find and fix security weaknesses (white-hat hackers).",
  
  Hyperlinks: "Clickable text or images that take you to another page or website when clicked. They’re often underlined or highlighted in a different color and are a basic part of web navigation.",
  
  Malware: "Short for malicious software, malware is any software designed to harm, damage, or gain unauthorized access to computers, networks, or data. Examples include viruses, worms, spyware, and ransomware.",
  
  Phishing: "A type of online scam where attackers trick people into sharing personal or sensitive information—like passwords or credit card numbers—by pretending to be a trustworthy source (often through fake emails or websites)."
};

function DictionaryScreen() {
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
        minHeight: "100vh", // Full viewport height
      }}
    >
      <div>{!isMobile ? <BigScreenTopBar /> : <MobileTopBar />}</div>
      <div style={{ flex: 1, marginBottom: isMobile ? "100px" : undefined, }}>
        <h1
          style={{
            display: "flex",
            color: "#008B8B",
            justifyContent: "center",
            fontSize: isMobile ? "50px" : "85px",
            marginTop: isMobile ? "120px" : "120px",
        }}
        >
          Dictionary
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingTop: isMobile ? undefined : "120px",
            paddingBottom: isMobile ? undefined : "120px",
          }}
        >
          {Object.entries(dictionary).map(([term, definition])=> (
            <DictionaryTerm word={term} definition={definition}/>
          ))}
          
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default DictionaryScreen;

function DictionaryTerm({ word, definition }) {
 const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      style={{
        maxWidth: isMobile ? "90%" : "60%",
        lineHeight: "1.15",
    }}
    >
      <p
        style={{
            marginBottom: "0",
            fontSize: "22px",
            color: "#000000",
        }}
      >
        <span
          style={{ color: "#008B8B", marginRight: "10px", fontWeight: "700", }}
        >
          {word}:
        </span>

        {definition}
      </p>
    </div>
  );
}
