import Card, {
  PinkCard,
  MobileTopBar,
  BottomBar,
  BigScreenTopBar,
  InfoPackWithButton,
  ExploreCard,
} from "./Components.js";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

function DigitalJourneysHomepage() {
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
      {!isMobile ? <BigScreenTopBar /> : <MobileTopBar />}
      <div
        style={{
          maxWidth: isMobile ? "93%" : undefined,
          flex: "1",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            maxWidth: "1190px",
            alignItems: "center",
            gap: "45px",
            marginTop: isMobile ? "50px" : "100px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: isMobile ? "35px" : "70px",
                marginTop: "0px",
                marginBottom: "20px",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Digital Journeys
            </h1>

            {isMobile && (
              <img
                src={"digital_journeys_homepage_top_photo.png"}
                width="100%"
                style={{
                  maxWidth: "170px",
                  display: "block",
                  margin: "0 auto",
                  marginBottom: isMobile ? "40px" : undefined,
                }}
              />
            )}

            <div style={{ fontSize: "20px", lineHeight: "1.0" }}>
              <p style={{ margin: "0px" }}>
                In today’s connected world, every post, message, and click
                affects how we live and learn online. This collection of short
                stories explores a range of experiences—real digital choices,
                mistakes that lead to learning, and inspiring examples of
                technology being used for good.
              </p>
              <p style={{ margin: "0px" }}>
                Each story is meant to start meaningful discussions about
                important topics like online safety, privacy, kindness, false
                information, and how technology shapes our lives. Whether you're
                a teacher, parent, or student, these stories offer real-life
                situations that help us think about how to use the internet in
                smarter and more caring ways.
              </p>
              <p style={{ margin: "0px" }}>
                At the end of every story, you’ll find a few questions to help
                guide reflection and conversation. You can talk about the story
                with your family, your classmates, or in your classroom—anywhere
                people come together to talk and learn about life online.
              </p>
            </div>
          </div>

          {!isMobile && (
            <img
              src={"digital_journeys_homepage_top_photo.png"}
              width="400px"
            />
          )}
        </section>
        <section style={{ marginTop: isMobile ? "100px" : "230px" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: isMobile ? "30px" : "64px",
              marginTop: "0px",
              marginBottom: "20px",
            }}
          >
            Digital Decisions
          </h1>
          <h2
            style={{
              textAlign: "center",
              fontSize: isMobile ? "18px" : "38px",
              marginTop: "0px",
              marginBottom: "20px",
            }}
          >
            Real choices in the digital world
          </h2>
          <p
            style={{
              fontSize: "20px",
              maxWidth: isMobile ? undefined : "800px",
              textAlign: "center",
              marginTop: isMobile ? undefined : "60px",
            }}
          >
            What do you do if you see something wrong online? How do you decide
            what’s safe to share? When is using technology bad for my health?
            This section shares real moments when people ask similar questions
            while using technology. Read their stories and discuss what you
            think is the right decision.
          </p>
        </section>
        <section
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: isMobile ? "30px" : "50px",
            marginTop: isMobile ? "40px" : "100px",
            width: "100%",
          }}
        >
          <ExploreCard
            title="Unfollowing the Hunt"
            text="Soumayya is a student in 10th grade that enjoys photography and Photoshop. However, are there limits to what is appropriate to Photoshop and share online?"
            examples={[
              "Cyberbullying",
              "Social Media",
              "Ages 12-18",
              "Environment",
            ]}
          />
          <ExploreCard
            title="Cyberbullying"
            text="Soumayya is a student in 10th grade that enjoys photography and Photoshop. However, are there limits to what is appropriate to Photoshop and share online?"
            examples={["Cyberbullying", "Social Media", "Ages 10+", "Ages 10+"]}
          />
          <ExploreCard
            title="Unfollowing the Hunt"
            text="Soumayya is a student in 10th grade that enjoys photography and Photoshop. However, are there limits to what is appropriate to Photoshop and share online?"
            examples={["Cyberbullying", "Social Media", "Ages 10+", "Ages 10+"]}
          />
        </section>
        <section style={{ marginTop: isMobile ? "100px" : "230px" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: isMobile ? "30px" : "64px",
              marginTop: "0px",
              marginBottom: "20px",
            }}
          >
            Click, Consider, Grow
          </h1>
          <h2
            style={{
              textAlign: "center",
              fontSize: isMobile ? "18px" : "38px",
              marginTop: "0px",
              marginBottom: "20px",
            }}
          >
            Stories about digital mistakes
          </h2>
          <p
            style={{
              fontSize: "20px",
              maxWidth: isMobile ? undefined : "800px",
              textAlign: "center",
              marginTop: isMobile ? undefined : "60px",
            }}
          >
            We all make mistakes, but the cost can be high when mistakes are made using technology. This section discusses stories of people who made errors online and what they learned from them. Read their journeys and learn from their mistakes to make better choices in the future.
          </p>
        </section>
        <section
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: isMobile ? "30px" : "50px",
            marginTop: isMobile ? "40px" : "100px",
            width: "100%",
          }}
        >
          <ExploreCard
            title="Unfollowing the Hunt"
            text="Soumayya is a student in 10th grade that enjoys photography and Photoshop. However, are there limits to what is appropriate to Photoshop and share online?"
            examples={[
              "Cyberbullying",
              "Social Media",
              "Ages 12-18",
              "Environment",
            ]}
          />
          <ExploreCard
            title="Cyberbullying"
            text="Soumayya is a student in 10th grade that enjoys photography and Photoshop. However, are there limits to what is appropriate to Photoshop and share online?"
            examples={["Cyberbullying", "Social Media", "Ages 10+", "Ages 10+"]}
          />
          <ExploreCard
            title="Unfollowing the Hunt"
            text="Soumayya is a student in 10th grade that enjoys photography and Photoshop. However, are there limits to what is appropriate to Photoshop and share online?"
            examples={["Cyberbullying", "Social Media", "Ages 10+", "Ages 10+"]}
          />
        </section>
        <section style={{ marginTop: isMobile ? "100px" : "230px" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: isMobile ? "30px" : "64px",
              marginTop: "0px",
              marginBottom: "20px",
            }}
          >
            Connect, Create, Change
          </h1>
          <h2
            style={{
              textAlign: "center",
              fontSize: isMobile ? "18px" : "38px",
              marginTop: "0px",
              marginBottom: "20px",
            }}
          >
            Using technology as a tool for progress
          </h2>
          <p
            style={{
              fontSize: "20px",
              maxWidth: isMobile ? undefined : "800px",
              textAlign: "center",
              marginTop: isMobile ? undefined : "60px",
            }}
          >
            Technology can do amazing things when we use it to help others. This section showcases inspiring examples of people using technology to solve problems and improve their communities. Read their journeys and see how technology can be a powerful tool for progress. When you’re done, think about how you can also use technology to connect, create, and change.
          </p>
        </section>
        <section
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: isMobile ? "30px" : "50px",
            marginTop: isMobile ? "40px" : "100px",
            width: "100%",
            marginBottom: isMobile ? "120px" :"200px"
          }}
        >
          <ExploreCard
            title="Unfollowing the Hunt"
            text="Soumayya is a student in 10th grade that enjoys photography and Photoshop. However, are there limits to what is appropriate to Photoshop and share online?"
            examples={[
              "Cyberbullying",
              "Social Media",
              "Ages 12-18",
              "Environment",
            ]}
          />
          <ExploreCard
            title="Cyberbullying"
            text="Soumayya is a student in 10th grade that enjoys photography and Photoshop. However, are there limits to what is appropriate to Photoshop and share online?"
            examples={["Cyberbullying", "Social Media", "Ages 10+", "Ages 10+"]}
          />
          <ExploreCard
            title="Unfollowing the Hunt"
            text="Soumayya is a student in 10th grade that enjoys photography and Photoshop. However, are there limits to what is appropriate to Photoshop and share online?"
            examples={["Cyberbullying", "Social Media", "Ages 10+", "Ages 10+"]}
          />
        </section>
      </div>
      <BottomBar />
    </div>
  );
}

export default DigitalJourneysHomepage;