import Card, {
  PinkCard,
  MiniCard,
  MobileTopBar,
  BottomBar,
  BigScreenTopBar,
} from "./Components.js";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import CyberSecurityAndPrivacy from "./CybersecurityAndPrivacy.js";

function HomeScreen() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/mw2/json_files/homescreen.json")
      .then((response) => {
        console.log("Status:", response.status);
        return response.json();
      })
      .then((json) => {
        console.log("JSON Loaded:", json);
        setData(json);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

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
      >
        <div
          style={{ maxWidth: isMobile ? "100%" : "400px", textAlign: "left" }}
        >
          <h1
            className={isMobile ? "muwatana-header-styling" : ""}
            style={{ fontSize: isMobile ? "30px" : "70px" }}
          >
            {data.sections[0].title}
          </h1>
          <p style={{ fontSize: isMobile ? "14px" : "20px" }}>
            {data.sections[0].description}
          </p>
        </div>
        <div>
          <img
            src={data.sections[0].image}
            alt="iamge"
            className="image-styling"
            style={{
              maxWidth: isMobile ? "80%" : "400px",
              height: "auto",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
      <div className="background-color-verylightpink learning-center-styling">
        <h1>{data.sections[1].title}</h1>
        <div
          className="four-card-grid-display-styling"
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: "20px",
            justifyItems: "center",
          }}
        >
          <div onClick={() => navigate("/resources-cybersecurity")}>
            <Card
              title={data.sections[1].items[0].title}
              content={data.sections[1].items[0].description}
              picture={process.env.PUBLIC_URL + "/Vector (15).png"}
              backgroundColor="white"
            />
          </div>
          <div onClick={() => navigate("/coming-soon-screen")}>
            <Card
              title={data.sections[1].items[1].title}
              content={data.sections[1].items[1].description}
              picture={process.env.PUBLIC_URL + "/Component (1).png"}
              backgroundColor="white"
            />
          </div>
          <div onClick={() => navigate("/coming-soon-screen")}>
            <Card
              title={data.sections[1].items[2].title}
              content={data.sections[1].items[2].description}
              picture={process.env.PUBLIC_URL + "/Vector (13).png"}
              backgroundColor="white"
            />
          </div>
          <div onClick={() => navigate("/coming-soon-screen")}>
            <Card
              title={data.sections[1].items[3].title}
              content={data.sections[1].items[3].description}
              picture={process.env.PUBLIC_URL + "/Vector (14).png"}
              backgroundColor="white"
            />
          </div>
        </div>
      </div>

      <div
        id="digital-journeys-section"
        className="learning-center-styling"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "300px",
        }}
      >
        <h1>{data.sections[2].title}</h1>
        <p>{data.sections[2].description}</p>
        <div onClick={() => navigate("/digital-journeys-homepage-screen")}>
          <MiniCard title={data.sections[2].buttonLabel} />
        </div>
      </div>

      <div
        className="background-color-verylightpink"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "300px",
        }}
      >
        <h1>{data.sections[3].title}</h1>
        <p>{data.sections[3].description}</p>
        <div onClick={() => navigate("/digital-citizenship")}>
          <MiniCard title={data.sections[3].buttonLabel} />
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
        <h1>{data.sections[4].title}</h1>
        <div className="pinkcard-row-styling">
          <div onClick={() => navigate("/coming-soon-screen")}>
            <PinkCard
              title={data.sections[4].items[0].title}
              content={data.sections[4].items[0].description}
            />
          </div>
          <div onClick={() => navigate("/coming-soon-screen")}>
            <PinkCard
              title={data.sections[4].items[1].title}
              content={data.sections[4].items[1].description}
            />
          </div>
          <div onClick={() => navigate("/coming-soon-screen")}>
            <PinkCard
              title={data.sections[4].items[2].title}
              content={data.sections[4].items[2].description}
            />
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  );
}

export default HomeScreen;
