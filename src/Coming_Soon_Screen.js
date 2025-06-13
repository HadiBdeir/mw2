import Card, {
  MobileTopBar,
  BottomBar,
  BigScreenTopBar,
} from "./Components.js";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ComingSoonScreen() {
  const navigate = useNavigate();
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

      <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: isMobile ? "20px" : "130px",
              maxWidth: "1200px",
              margin: "0 auto",
              flexDirection: isMobile ? "column" : "row",
              padding: isMobile ? "0 20px 40px 20px" : "100px 0 40px 0",
            }}
          >
              <div
                style={{
                  maxWidth: isMobile ? "98%" : "500px",
                }}
              >
                <h1
                  style={{
                    fontSize: isMobile ? "36px" : "70px",
                    color: "#008B8B",
                    textAlign: isMobile ? "center" : "left",
                    marginTop: 0
                  }}
                >
                  Coming Soon!
                </h1>
                <h3>This webpage is not quite ready yet. We are working on it! Stay tuned for new content.</h3>
              </div>
            <img
              src="ComingSoonMainPhoto.png"
              alt="Digital Privacy Illustration"
              style={{
                width: isMobile ? "250px" : "450px",
                height: "auto",
              }}
            />
          </div>
      </div>

      <div>
        <BottomBar />
      </div>
    </div>
  );
}

export default ComingSoonScreen;
