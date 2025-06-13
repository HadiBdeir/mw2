// import "./App.css";
import "./TopBarCss.css";
import React, { useState, useEffect, Children } from "react";
import { useNavigate } from "react-router-dom";

function Card({ title, content, picture, backgroundColor, style = {} }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  return (
    <div
      style={{
        width: "275px",
        border: "1px solid lightgray",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        padding: "40px",
        paddingTop: "33px",
        margin: "10px",
        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
        textAlign: "center",
        maxWidth: "500px",
        backgroundColor: backgroundColor || "white",
        position: "relative",
        height: isMobile ? undefined : "200px",
        ...style,
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* Top blue bar */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "7px",
          width: "100%",
          backgroundColor: "#008B8B",
        }}
      />

      {picture ? (
        <img
          src={picture}
          style={{
            maxHeight: "100px",
            maxWidth: "100px",
          }}
        />
      ) : (
        <>
          <div style={{ fontSize: "100px", textAlign: "center" }}>😺</div>
        </>
      )}
      <h3 style={{ textDecoration: "underline", fontWeight: "bold" }}>
        {title}
      </h3>
      <p>{content}</p>
    </div>
  );
}

function MiniCard({ title, link }) {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#008b8b",
          borderRadius: "8px",
          fontWeight: "lighter",
          color: "whitesmoke",
          padding: "15px 30px",
          border: "2px solid lightgray",
          border: "none",
        }}
      >
        <a href={link} style={{ color: "#FFFFF0", fontWeight: "lighter" }}>
          {title}
        </a>
      </button>
    </div>
  );
}

function PinkCard({ title, content, link }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <a
      href={link}
      style={{ textDecoration: "none" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        style={{
          minWidth: "200px",
          height: isMobile ? undefined : "190px",
          width: isMobile ? "240px" : undefined,
          border: "none",
          padding: "1px 20px 0px",
          borderRadius: "0px 15px 15px 0px",
          backgroundColor: "rgb(247, 234, 236)",
          borderLeft: "7px solid #FF6933",
          boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          transition: "transform 0.2s ease-in-out",
          minHeight: isMobile ? "175px" : "150px",
          margin: isMobile ? "20px" : undefined,
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h3
          style={{
            color: "#FF5E00",
            fontSize: isMobile ? undefined : "22px",
            textAlign: "left",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontWeight: "normal",
            color: "black",
            maxWidth: isMobile ? undefined : "180px",
            textAlign: "left",
          }}
        >
          {content}
        </p>
      </div>
    </a>
  );
}

function MobileTopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToDigitalJourneys = () => {
    // Check if we're on the home page
    if (window.location.pathname !== "/") {
      // Navigate to home page first, then scroll after navigation
      navigate("/");
      // Use setTimeout to wait for navigation to complete
      setTimeout(() => {
        const element = document.getElementById("digital-journeys-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById("digital-journeys-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div>
        <div
          className="background-color-darkcyan main-header"
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "50px",
            position: "relative",
          }}
        >
          <div className="header-top-row">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginRight: "auto",
              }}
            >
              <h2
                className="muwatana-title-styling"
                style={{
                  marginTop: "5px",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              >
                muwatana
              </h2>
              <small style={{ marginBottom: "20px" }}>
                learn to navigate the digital world safely
              </small>
            </div>

            {/* Mobile burger menu button */}
            <div className="mobile-menu-button" onClick={toggleMenu}>
              <span>☰</span>
            </div>

            {/* Desktop navigation */}
            <div className="navigation-tab-links desktop-nav">
              <div onClick={() => navigate("/")}>
                <p
                  style={{
                    margin: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  className="nav-link"
                >
                  Home
                </p>
              </div>
              <div onClick={() => navigate("/about-us")}>
                <p
                  style={{
                    margin: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  About
                </p>
              </div>
              <div onClick={() => navigate("/coming-soon-screen")}>
                <p
                  style={{
                    margin: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Learning Center
                </p>
              </div>
              <p
                onClick={scrollToDigitalJourneys}
                className="nav-link"
                style={{
                  margin: "10px",
                  whiteSpace: "nowrap",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Digital Journeys
              </p>
              <a
                onClick={() => navigate("/digital-citizenship")}
                className="nav-link"
                style={{
                  margin: "10px",
                  whiteSpace: "nowrap",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Digital Citizenship
                <br />
                Principles
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Main_Page"
                className="nav-link"
              >
                <button
                  style={{
                    color: "white",
                    backgroundColor: "darkOrange",
                    borderRadius: "20px",
                    padding: "1px 20px",
                    height: "30px",
                    fontWeight: "bold",
                    margin: "10px",
                    whiteSpace: "nowrap",
                    border: "none",
                  }}
                >
                  Contact ISF
                </button>
              </a>
              <span
                style={{
                  margin: "20px",
                  fontWeight: "bold",
                  paddingRight: "50px",
                }}
              >
                العربية
              </span>
            </div>
          </div>

          {/* Mobile navigation menu (shows when menu is open) */}
          {menuOpen && (
            <div className="mobile-nav">
              <ul className="mobile-nav-links">
                <li className="mobile-nav-item" onClick={() => navigate("/")}>
                  <p
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Home
                  </p>
                </li>
                <li className="mobile-nav-item">
                  <div
                    onClick={() => navigate("/about-us")}
                    style={{
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    About
                  </div>
                </li>
                <li
                  className="mobile-nav-item"
                  onClick={() => navigate("/coming-soon-screen")}
                  style={{
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Learning Center
                </li>
                <li className="mobile-nav-item">
                  <p
                    onClick={scrollToDigitalJourneys}
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Digital Journeys
                  </p>
                </li>
                <li className="mobile-nav-item">
                  <a
                    onClick={() => navigate("/digital-citizenship")}
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Digital Citizenship
                    <br />
                    Principles
                  </a>
                </li>
                <li
                  className="mobile-nav-item"
                  style={{ padding: "10px", fontWeight: "bold" }}
                >
                  <span>العربية</span>
                </li>
                <li className="mobile-nav-item contact-item">
                  <a href="https://en.wikipedia.org/wiki/Main_Page">
                    <button
                      className="contact-button"
                      style={{ padding: "17px" }}
                    >
                      Contact ISF
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function BigScreenTopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToDigitalJourneys = () => {
    // Check if we're on the home page
    if (window.location.pathname !== "/") {
      // Navigate to home page first, then scroll after navigation
      navigate("/");
      // Use setTimeout to wait for navigation to complete
      setTimeout(() => {
        const element = document.getElementById("digital-journeys-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById("digital-journeys-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div>
        {/* Main dark cyan header - combines title and navigation */}
        <div
          className="background-color-darkcyan main-header"
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "50px",
            position: "relative",
            marginBottom: "0px",
          }}
        >
          <div className="header-top-row">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginRight: "auto",
              }}
            >
              <h2
                className="muwatana-title-styling"
                style={{
                  marginTop: "5px",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              >
                muwatana
              </h2>
              <small style={{ marginBottom: "20px" }}>
                learn to navigate the digital world safely
              </small>
            </div>

            {/* Desktop navigation - search, contact, arabic on the right */}
            <div className="desktop-nav-right">
              <a href="https://en.wikipedia.org/wiki/Main_Page">
                <button
                  style={{
                    color: "white",
                    backgroundColor: "#FF6933",
                    borderRadius: "20px",
                    padding: "5px 20px",
                    height: "30px",
                    fontWeight: "bold",
                    border: "none",
                    marginRight: "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Contact ISF
                </button>
              </a>
              <span
                style={{
                  fontWeight: "bold",
                  color: "white",
                  paddingRight: "50px",
                }}
              >
                العربية
              </span>
            </div>

            {/* Mobile burger menu button */}
            <div className="mobile-menu-button" onClick={toggleMenu}>
              <span>☰</span>
            </div>
          </div>

          {/* Mobile navigation menu (shows when menu is open) */}
          {menuOpen && (
            <div className="mobile-nav">
              <ul className="mobile-nav-links">
                <li className="mobile-nav-item" onClick={() => navigate("/")}>
                  <p
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Home
                  </p>
                </li>
                <li className="mobile-nav-item">
                  <a
                    onClick={() => navigate("/about-us")}
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    About
                  </a>
                </li>
                <li
                  className="mobile-nav-item"
                  onClick={() => navigate("/coming-soon-screen")}
                  style={{
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Learning Center
                </li>
                <li className="mobile-nav-item">
                  <p
                    onClick={scrollToDigitalJourneys}
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Digital Journeys
                  </p>
                </li>
                <li className="mobile-nav-item">
                  <a
                    onClick={() => navigate("/digital-citizenship")}
                    style={{
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Digital Citizenship Principles
                  </a>
                </li>
                <li
                  className="mobile-nav-item"
                  style={{ padding: "10px", fontWeight: "bold" }}
                >
                  <span>العربية</span>
                </li>
                <li className="mobile-nav-item contact-item">
                  <a href="https://en.wikipedia.org/wiki/Main_Page">
                    <button
                      className="contact-button"
                      style={{ padding: "17px" }}
                    >
                      Contact ISF
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Light blue tab below */}
        <div
          className="light-blue-tab desktop-only"
          style={{
            marginTop: "0px",
            paddingTop: "0px",
          }}
        >
          <div>
            {/* Navigation items row - in the same dark cyan tab */}
            <div
              className="nav-items-row desktop-only"
              style={{ justifyContent: "flex-end", display: "flex" }}
            >
              <div onClick={() => navigate("/")}>
                <p
                  className="nav-item-link-header"
                  style={{
                    color: "black",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  Home
                </p>
              </div>
              <a
                onClick={() => navigate("/resources-cybersecurity")}
                className="nav-item-link-header"
                style={{
                  color: "black",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                About
              </a>
              <div onClick={() => navigate("/coming-soon-screen")}>
                <p
                  className="nav-item-link-header"
                  style={{
                    color: "black",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  Learning Center
                </p>
              </div>
              <p
                onClick={scrollToDigitalJourneys}
                className="nav-item-link-header"
                style={{
                  color: "black",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Digital Journeys
              </p>
              <a
                onClick={() => navigate("/digital-citizenship")}
                className="nav-item-link-header"
                style={{
                  color: "black",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Digital Citizenship Principles
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BottomBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  return (
    <div
      className="background-color-darkcyan"
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          marginBottom: isMobile ? "20px" : "0px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            width: "80px",
          }}
        >
          <a
            href="https://en.wikipedia.org/wiki/Main_Page"
            style={{ color: "white", textDecoration: "none" }}
          >
            <small>Contact us</small>
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Main_Page"
            style={{ color: "white", textDecoration: "none" }}
          >
            <small>Help</small>
          </a>
          {isMobile ? (
            <p style={{ color: "white", textDecoration: "none" }}>
              <small>
                <>
                  Icons &<br />
                  illustrations by{" "}
                </>
                <a
                  style={{ color: "inherit", textDecoration: "underline" }}
                  href="https://en.wikipedia.org/wiki/Main_Page"
                >
                  https://streamlinehq.com
                </a>
              </small>
            </p>
          ) : (
            <p style={{ color: "white", textDecoration: "none" }}>
              <small>
                Icons & illustrations by{" "}
                <a
                  style={{ color: "inherit", textDecoration: "underline" }}
                  href="https://streamlinehq.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://streamlinehq.com
                </a>
              </small>
            </p>
          )}
        </div>

        {isMobile && (
          <a
            href="https://en.wikipedia.org/wiki/Main_Page"
            className="nav-link"
          >
            <button
              style={{
                color: "white",
                backgroundColor: "#FF5E00",
                borderRadius: "5px",
                height: "50px",
                fontWeight: "normal",
                whiteSpace: "nowrap",
                border: "none",
                padding: "0px 30px",
              }}
            >
              Report incidents to Lebanese ISF
            </button>
          </a>
        )}
      </div>

      {!isMobile && (
        <a href="https://en.wikipedia.org/wiki/Main_Page" className="nav-link">
          <button
            style={{
              color: "white",
              backgroundColor: "#FF5E00",
              borderRadius: "5px",
              height: "50px",
              fontWeight: "normal",
              margin: "10px",
              whiteSpace: "nowrap",
              border: "none",
              padding: "0px 30px",
            }}
          >
            Report incidents to Lebanese ISF
          </button>
        </a>
      )}
    </div>
  );
}

const InfoPackWithButton = ({ picture, alt, title, description = [] }) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ifDescription = description && description.length > 0;
  const isList = Array.isArray(description) && description.length > 1;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile
          ? "center"
          : ifDescription
          ? "flex-start"
          : "center", // teach this too
        gap: isMobile ? "20px" : "10px",
        textAlign: isMobile ? "center" : "left",
        width: isMobile ? "300px" : "823px",
        backgroundColor: "white",
        height: "auto",
        padding: isMobile ? "40px 20px" : "15px 20px",
        margin: "10px auto",
        borderBottomRightRadius: "20px",
        borderTopRightRadius: "20px",
        borderLeft: "7px solid #008B8B",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        margin: "30px auto",
      }}
    >
      <div
        style={{
          position: "relative",
          width: isMobile ? "100px" : "100px",
          height: isMobile ? "100px" : "100px",
          minWidth: isMobile ? "100px" : "80px",
          borderRadius: "50%",
          backgroundColor: "darkcyan",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          order: isMobile ? 1 : 0,
          marginTop: isMobile ? "0" : "5px",
        }}
      >
        <img
          src={picture}
          alt={alt || "Image"}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "70%" : "60%",
            height: isMobile ? "70%" : "60%",
            objectFit: "contain",
            alignItems: "left",
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          maxWidth: isMobile ? "100%" : "calc(100% - 90px)",
          order: isMobile ? 2 : 1,
          paddingTop: isMobile ? "0" : "5px",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "24px" : ifDescription ? "32px" : "24    px",
            marginBottom: isMobile ? "15px" : "10px",
            lineHeight: "1.2",
            marginTop: 0,
            alignItems: "center",
            textAlign: isMobile ? "center" : "left",
            maxWidth: isMobile ? undefined : "600px",
          }}
        >
          {title}
        </h2>
        {ifDescription ? (
          isList ? (
            <ul
              style={{
                fontSize: "20px",
                paddingLeft: "20px",
                margin: 0,
                marginLeft: "10px",
              }}
            >
              {description.map((item, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p
              style={{
                fontSize: "20px",
                marginLeft: "10px",
                marginBottom: "8px",
                paddingLeft: "0",
              }}
            >
              {description[0]}
            </p>
          )
        ) : null}

        {/* <ul
          style={{
            fontSize: "20px",
            paddingLeft: "20px",
            margin: 0,
            marginLeft: "10px",
            list
          }}
        >
          {description.map((item, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              {item}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

const InfoPack = ({ title, description }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        position: "relative",
        textAlign: "left",
        width: "100%",
      }}
      className="info-pack-description"
    >
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

function SmallButton({ text }) {
  return (
    <button
      style={{
        backgroundColor: "darkorange",
        borderRadius: "30px",
        border: "none",
        padding: "10px",
        color: "white",
      }}
    >
      {text}
    </button>
  );
}

const ExploreCard = ({ title, text, examples, link }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div
        className="mobile-explore-card-styling"
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div className="mobile-title">{title}</div>
        <div className="mobile-example-grid">
          {examples.slice(0, 4).map((example, index) => (
            <div key={index} className="mobile-example-box">
              <h3 className="mobile-example-title">{example}</h3>
            </div>
          ))}
        </div>
        <div className="mobile-card-text">{text}</div>
        <div className="mobile-orange-button-container">
          <button
            className="mobile-cyan-button"
            onClick={() => {
              navigate(link);
              window.scrollTo(0, 0);
            }}
          >
            Read
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="explore-card-styling"
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div className="title">{title}</div>
      <div className="example-grid">
        {examples.map((example, index) => (
          <div key={index} className="example-box">
            <h3 className="example-title">{example}</h3>
          </div>
        ))}
      </div>
      <div className="card-text" style={{ padding: "10px" }}>
        {text}
      </div>
      <div className="mobile-orange-button-container">
        <button
          className="cyan-button"
          onClick={() => {
            navigate(link);
            window.scrollTo(0, 0);
          }}
        >
          Read
        </button>
      </div>
    </div>
  );
};

const PhishingExamples = ({ title, children, style = {}, hrStyle = {} }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    width: isMobile ? "90%" : "1150px",
    maxWidth: "90%",
    height: "auto",
    borderRadius: isMobile ? "15px" : "20px",
    boxShadow: "0px 1px 5px 2px rgba(0, 0, 0, 0.3)",
    backgroundColor: "white",
    paddingBottom: isMobile ? "20px" : "40px",
    margin: isMobile ? "20px auto" : "50px auto",
    overflow: "hidden",
    ...style,
  };

  if (style.width === "860px" && isMobile) {
    containerStyle.width = "90%";
  }

  return (
    <div style={containerStyle}>
      <h1
        style={{
          fontSize: isMobile ? "22px" : "28px",
          paddingTop: isMobile ? "30px" : "60px",
          paddingLeft: isMobile ? "15px" : "0",
          paddingRight: isMobile ? "15px" : "0",
          color: "#008B8B",
          fontWeight: "bold",
          textAlign: isMobile ? "center" : "inherit",
        }}
      >
        {title}
      </h1>
      <hr
        style={{
          height: "5px",
          width: isMobile ? "85%" : "92%",
          backgroundColor: "#40E0D0",
          border: "none",
          margin: "15px auto 20px auto",
          ...hrStyle,
        }}
      />
      <div style={{ padding: isMobile ? "0 15px" : "0" }}>{children}</div>
    </div>
  );
};

function WhyWouldSomeoneHackYou() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const highlightStyle = {
    backgroundColor: "#E0A500",
    color: "white",
    padding: "2px 5px",
    borderRadius: "3px",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        width: isMobile ? "90%" : "860px",
        borderRadius: "20px",
        boxShadow: "0px 1px 5px 2px rgba(0, 0, 0, 0.3)",
        backgroundColor: "white",
        paddingBottom: "7px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: isMobile ? "26px" : "32px",
          paddingTop: isMobile ? "30px" : "60px",
          color: "#008B8B",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Why would someone hack you?
      </h1>

      <hr
        style={{
          height: "5px",
          width: isMobile ? "80%" : "581px",
          backgroundColor: "#40E0D0",
          border: "none",
          margin: "0 auto",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "flex-start",
        }}
      >
        <ul
          style={{
            fontSize: isMobile ? "16px" : "20px",
            textAlign: "left",
            listStylePosition: "outside",
            width: isMobile ? "90%" : "auto",
            paddingLeft: isMobile ? "26%" : "40px", // padding for bullets
            margin: 0,
          }}
        >
          <li style={{ margin: "20px 0" }}>
            To <span style={highlightStyle}>sell your data</span> to third
            parties.
          </li>
          <li style={{ margin: "20px 0" }}>
            To <span style={highlightStyle}>steal your money</span> through
            unauthorized transactions.
          </li>
          <li style={{ margin: "20px 0" }}>
            To <span style={highlightStyle}>blackmail you</span> with the
            private information they find.
          </li>
        </ul>
      </div>
    </div>
  );
}

function Facts({ title, content, source, style = {} }) {
  return (
    <div
      style={{
        minHeight: "185px",
        margin: "50px auto",
        width: "80%",
        maxWidth: "950px",
        border: "none",
        padding: "20px",
        paddingBottom: "40px",
        borderRadius: "5px",
        backgroundColor: "#b2f2e8",
        borderLeft: "10px solid rgb(32, 129, 146)",
        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.3)",
        cursor: "pointer",
        position: "relative",
        ...style,
      }}
    >
      <h3 style={{ color: "rgb(32, 129, 146)" }}>{title}</h3>
      <hr
        style={{
          border: "none",
          height: "2px",
          backgroundColor: "rgb(32, 129, 146)",
          marginBottom: "15px",
          width: "99%",
          marginLeft: "0",
        }}
      />
      <p style={{ fontWeight: "normal", color: "black" }}>{content}</p>
      <p style={{ position: "absolute", right: "20px" }}>
        Source:{" "}
        <i
          href={source}
          className="text-blue-600 hover:underline"
          style={{ fontStyle: "italic", textDecorationLine: "underline" }}
        >
          Phishing for Dummies (2023)
        </i>
      </p>
    </div>
  );
}

function DigitalPrivacyHeader() {
  return (
    <div className="header-container">
      <h1 className="header-title">The dangers of poor digital privacy</h1>
    </div>
  );
}

function DigitalPrivacyHeaderContent() {
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
        alignItems: "center",
        justifyContent: "center",
        gap: isMobile ? "20px" : "100px",
        maxWidth: "1200px",
        margin: "0 auto",
        paddingBottom: "40px",
        flexDirection: isMobile ? "column" : "row",
        padding: isMobile ? "0 20px 40px 20px" : "0 0 40px 0",
      }}
    >
      <div
        style={{
          flex: "0 0 auto",
        }}
      >
        <img
          src="DigitalPrivacyPersonIcon.png"
          alt="Digital Privacy Illustration"
          style={{
            width: isMobile ? "250px" : "400px",
            height: "auto",
          }}
        />
      </div>
      <div
        style={{
          maxWidth: isMobile ? "100%" : "500px",
          flex: "1",
        }}
      >
        <p
          style={{
            fontSize: isMobile ? "18px" : "20px",
            lineHeight: "1.6",
            color: "#333",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Poor digital privacy could lead to consequences that affect you, your
          family, and your friends. Some of these consequences could be:
        </p>
        <ul
          style={{
            fontSize: isMobile ? "18px" : "20px",
            lineHeight: "1.4",
            color: "#333",
            listStylePosition: "outside",
            margin: isMobile ? "0 auto" : undefined,
            display: "table",
            paddingRight: isMobile ? "20px" : undefined,
          }}
        >
          <li style={{ marginBottom: "12px" }}>Cyberattacks</li>
          <li style={{ marginBottom: "12px" }}>Blackmail</li>
          <li style={{ marginBottom: "12px" }}>Cyberstalking</li>
        </ul>
      </div>
    </div>
  );
}

function Remember({ title, content, source }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "20px auto",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0 15px",
        boxSizing: "border-box",
        paddingBottom: isMobile ? "20px" : "150px",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#ffdbb7",
          borderRadius: "6px",
          paddingTop: "15px",
          paddingLeft: "13px",
          paddingRight: "13px",
          borderLeft: "16px solid #ff6d3a",
          boxSizing: "border-box",
        }}
      >
        <div style={{ flex: 1, width: "100%" }}>
          <h3
            style={{
              color: "#ff6d3a",
              marginTop: "10px",
              marginBottom: "5px",
              fontSize: "clamp(20px, 5vw, 30px)",
              wordWrap: "break-word",
              hyphens: "auto",
            }}
          >
            {title}
          </h3>
          <hr
            style={{
              border: "none",
              height: "3px",
              backgroundColor: "#FF6933",
              width: "93%",
              marginLeft: "0",
            }}
          />
          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              paddingRight: "10px",
              paddingBottom: "25px",
              fontSize: "clamp(14px, 4vw, 18px)",
              maxWidth: "85%",
              wordWrap: "break-word",
            }}
          >
            {content.map((contentItem, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                {contentItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Image({ src }) {
  return <img src={src} alt={src} />;
}

// Blackmail help begins

const tips = [
  "If you are a child, teenager, or young adult, reach out to an adult you trust such as your parents or teachers.",
  "Do not give the blackmailer what they are asking for.",
  "Do not delete any messages sent to you by the attacker: they will be used for evidence.",
  "Do not tell or hint to the attacker that you will be informing the authorities.",
  "Report any accounts or posts that share your private information.",
  "Reach out to the Internal Security Forces of Lebanon.",
];

const BlackmailHelp = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    background: "#FAEFF1",
    borderRadius: "10px",
    width: isMobile ? "90%" : "1173px",
    height: "auto",
    margin: "60px auto",
    boxShadow: "0px 4px 4px rgba(0,0,0,0.3)",
    paddingBottom: "40px",
  };

  const headerStyle = {
    fontSize: isMobile ? "32px" : "64px",
    fontWeight: "700",
    color: "#000000",
    marginBottom: isMobile ? "40px" : "95px",
    paddingTop: isMobile ? "20px" : "43px",
    paddingLeft: isMobile ? "20px" : "30px",
    paddingRight: isMobile ? "20px" : "30px",
    textAlign: isMobile ? "center" : "left",
  };

  const tipStyle = {
    fontWeight: "700",
    fontSize: isMobile ? "15px" : "32px",
    color: "#000000",
    padding: isMobile ? "0px 20px 20px" : "0px 70px 59px",
  };

  const border = (
    <div
      style={{
        height: "2px",
        width: "100%",
        backgroundColor: "#F8C0CA",
        marginTop: isMobile ? "20px" : "59px",
      }}
    />
  );

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>If you are a Victim of Blackmail</h1>
      {tips.map((tip, index) => (
        <div key={index} style={tipStyle}>
          {tip}
          {index < tips.length - 1 && border}
        </div>
      ))}
    </div>
  );
};

const ReportButton = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonStyle = {
    color: "white",
    backgroundColor: "#FF5E00",
    borderRadius: "8px",
    height: "auto",
    padding: isMobile ? "15px 20px" : "20px 30px",
    fontSize: isMobile ? "16px" : "20px",
    fontWeight: "bold",
    margin: "10px",
    whiteSpace: "normal",
    border: "none",
    cursor: "pointer",
    lineHeight: "1.6",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    width: isMobile ? "90vw" : "auto",
    maxWidth: "100%",
    transition: "transform 0.2s ease-in-out",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <a href="https://en.wikipedia.org/wiki/Main_Page" className="nav-link">
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Report incidents to the Lebanese Internal Security Forces
          <br />
          <span style={{ fontFamily: "'Amiri', serif" }}>
            بلغ عن الحوادث الى القوى الأمن الداخلي اللبناني
          </span>
          <br />
          Signaler les incidents aux Forces de sécurité intérieure libanaises
        </button>
      </a>
    </div>
  );
};

const PropertiesOfAStrongPassword = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const properties = [
    {
      title: "Long",
      description: "At least 12 characters long.",
    },
    {
      title: "Complicated",
      description:
        "Contains lower-case and upper-case letters, numbers, and symbols.",
    },
    {
      title: "Impersonal",
      description:
        "Does not contain your name, your children's names, your birthday, nicknames, etc.",
    },
    {
      title: "Secret",
      description:
        "Only you should know your password. Do not tell it to anyone, even your best friend.",
    },
    {
      title: "Unique",
      description: "Is not used on any other account.",
    },
  ];

  // DESKTOP SCREEN

  if (!isMobile) {
    return (
      <div
        style={{
          backgroundColor: "#FAEFF1",
          borderRadius: "20px",
          width: "1054px",
          height: "777px",
          margin: "40px auto",
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
          fontFamily: "Segoe UI",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: "64px",
            fontWeight: "700",
            textAlign: "center",
            paddingTop: "30px",
          }}
        >
          Properties of a Strong Password
        </div>
        <div
          style={{
            paddingTop: "45px",
            display: "flex",
            justifyContent: "center",
            marginLeft: "-40px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "125px",
              rowGap: "25px",
            }}
          >
            {properties.map((prop, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    width: "98px",
                    height: "98px",
                    borderRadius: "50%",
                    backgroundColor: "#008B8B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={"LockIcon.png"}
                    alt="lock icon"
                    style={{ width: "52.5px", height: "67.5px" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h2 style={{ fontSize: "32px", margin: 0 }}>{prop.title}</h2>
                  <p
                    style={{
                      fontSize: "20px",
                      maxWidth: "280px",
                      marginTop: "5px",
                      fontWeight: "400",
                    }}
                  >
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#FFDAB9",
            height: "220px",
            width: "345px",
            borderRadius: "20px",
            bottom: "40px",
            left: "50%",
            transform: "translateX(33%)",
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              backgroundColor: "#FF6933",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "25px",
              position: "absolute",
              top: "-10px",
              left: "-10px",
            }}
          >
            !
          </div>
          <p
            style={{
              textAlign: "left",
              fontSize: "20px",
              width: "330px",
              alignItems: "center",
              fontWeight: "500",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            The strongest passwords also do not contain consecutive letters or
            numbers (123, abc), or letters that are consecutive on the keyboard
            (qwe, jkl).
          </p>
        </div>
      </div>
    );
  }

  // MOBILE SCREEN

  return (
    <div
      style={{
        backgroundColor: "#FAEFF1",
        borderRadius: "20px",
        width: "90%",
        margin: "20px auto",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
        fontFamily: "Segoe UI",
        position: "relative",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontSize: "32px",
          fontWeight: "700",
          textAlign: "center",
          paddingTop: "15px",
        }}
      >
        Properties of a Strong Password
      </div>

      <div
        style={{
          paddingTop: "25px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {properties
          .slice(0, Math.ceil(properties.length / 2))
          .map((prop, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  minWidth: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#008B8B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={"LockIcon.png"}
                  alt="lock icon"
                  style={{ width: "32px", height: "40px" }}
                />
              </div>
              <div>
                <h2 style={{ fontSize: "24px", margin: 0 }}>{prop.title}</h2>
                <p
                  style={{
                    fontSize: "16px",
                    marginTop: "5px",
                    fontWeight: "400",
                  }}
                >
                  {prop.description}
                </p>
              </div>
            </div>
          ))}

        <div style={{ position: "relative" }}>
          {properties.slice(Math.ceil(properties.length / 2)).map((prop, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  minWidth: "60px",
                  borderRadius: "50%",
                  backgroundColor: "#008B8B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={"LockIcon.png"}
                  alt="lock icon"
                  style={{ width: "32px", height: "40px" }}
                />
              </div>
              <div>
                <h2 style={{ fontSize: "24px", margin: 0 }}>{prop.title}</h2>
                <p
                  style={{
                    fontSize: "16px",
                    marginTop: "5px",
                    fontWeight: "400",
                  }}
                >
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
          <div
            style={{
              backgroundColor: "#FFDAB9",
              borderRadius: "20px",
              padding: "20px 15px",
              marginTop: "10px",
              marginBottom: "10px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                backgroundColor: "#FF6933",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "20px",
                position: "absolute",
                top: "-10px",
                left: "-10px",
                zIndex: 2,
              }}
            >
              !
            </div>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                margin: 0,
              }}
            >
              The strongest passwords also do not contain consecutive letters or
              numbers (123, abc), or letters that are consecutive on the
              keyboard (qwe, jkl).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PasswordManager = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: isMobile ? "10px" : "0",
  };

  const containerStyle = {
    width: isMobile ? "100%" : "970px",
    fontSize: isMobile ? "16px" : "20px",
    lineHeight: "1.2",
  };

  const passwordManagersBanner = {
    margin: "auto",
    width: isMobile ? "90%" : "700px",
    height: isMobile ? "80px" : "117px",
    backgroundColor: "#008B8B",
    borderRadius: "20px",
    marginBottom: isMobile ? "40px" : "100px",
    alignContent: "center",
    textAlign: "center",
    color: "white",
    fontSize: isMobile ? "36px" : "64px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const mainTextStyle = {
    paddingLeft: isMobile ? "10px" : "0px",
  };

  const listContainerStyle = {
    paddingLeft: isMobile ? "30px" : "115px",
    marginTop: isMobile ? "20px" : "30px",
    width: isMobile ? "90%" : "540px",
    lineHeight: "1.2",
  };

  const iconColumnStyle = {
    width: "23px",
    flexShrink: 0,
  };

  const textColumnStyle = {
    fontSize: isMobile ? "16px" : "20px",
    fontWeight: "500",
  };

  const listItemWrapperStyle = {
    display: "flex",
    alignItems: "flex-start",
  };

  const iconStyle = {
    width: "15px",
  };

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <div style={passwordManagersBanner}>Password Managers</div>
        <p style={mainTextStyle}>
          It's important to use a different password for each of your accounts
          to keep your information safe. But remembering multiple complex
          passwords can be difficult! To help you, you can use a password
          manager.
        </p>
        <div style={listContainerStyle}>
          <div style={listItemWrapperStyle}>
            <div style={iconColumnStyle}>
              <img src={"CheckPhoto.png"} alt="check" style={iconStyle} />
            </div>
            <div style={textColumnStyle}>Generates complex passwords.</div>
          </div>
          <div style={listItemWrapperStyle}>
            <div style={iconColumnStyle}>
              <img src={"CheckPhoto.png"} alt="check" style={iconStyle} />
            </div>
            <div style={textColumnStyle}>Safely stores your passwords.</div>
          </div>
          <div style={listItemWrapperStyle}>
            <div style={iconColumnStyle}>
              <img src={"CheckPhoto.png"} alt="check" style={iconStyle} />
            </div>
            <div style={textColumnStyle}>
              Automatically fills in your username and password into websites
              and apps.
            </div>
          </div>
          <div style={listItemWrapperStyle}>
            <div style={iconColumnStyle}>
              <img src={"CheckPhoto.png"} alt="check" style={iconStyle} />
            </div>
            <div style={textColumnStyle}>
              Safely stores sensitive information such as credit card numbers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {
  MiniCard as MiniCard,
  PinkCard,
  MobileTopBar,
  BottomBar,
  InfoPackWithButton,
  InfoPack,
  SmallButton,
  ExploreCard,
  PhishingExamples,
  Facts,
  Image,
  Remember,
  BlackmailHelp,
  ReportButton,
  PropertiesOfAStrongPassword,
  PasswordManager,
  WhyWouldSomeoneHackYou,
  BigScreenTopBar,
  DigitalPrivacyHeader,
  DigitalPrivacyHeaderContent,
};
export default Card;
