import Card, {
  PinkCard,
  MobileTopBar,
  BottomBar,
  InfoPackWithButton,
  SmallButton,
  ExploreCard,
  BigScreenTopBar,
} from "./Components.js";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AccountProtectionScreen() {
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
            Account Protection
          </h1>
          {isMobile ? (
            <p>
              Your social media and email accounts hold details about your
              digital identity and your personal information. If someone gets
              access to these accounts, they can obtain this information or even
              post and content on your behalf.
            </p>
          ) : (
            <p style={{ fontSize: isMobile ? "14px" : "20px" }}>
              Your social media and email accounts hold details about your
              digital identity
              <br />
              and your personal information. If someone gets access to these
              accounts, they
              <br />
              can obtain this information or even post and content on your
              behalf.
            </p>
          )}
        </div>
        <div>
          <img
            src={"Logged-In-3--Streamline-Milano.png.png"}
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
        className="background-color-verylightpink"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "32px" : "45px",
              textAlign: "center",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            To keep your account safe
          </h1>
          <InfoPackWithButton
            picture={"material-symbols_password.png"}
            title={<>Use a strong and unique password</>}
            description={[
              "Use a strong password on all your accounts (social media, email, instant messaging, etc.) and do not use the same password for multiple accounts.",
            ]}
            imageOnTop={isMobile}
          />
          <InfoPackWithButton
            picture={"mdi_eye-off.png"}
            title={<>Keep your password a secret</>}
            description={[
              "Do not share your password with others and do not enter your password in front of others. If you think your account has been infiltrated, change your password immediately.",
            ]}
            imageOnTop={isMobile}
          />
          <InfoPackWithButton
            picture={"material-symbols_lock.png"}
            title={<>Protect your account access</>}
            description={[
              "Log out of your account after using it on a device that is not yours. ",
            ]}
            imageOnTop={isMobile}
          />
          <InfoPackWithButton
            picture={"mdi_cog.png"}
            title={<>Take advantage of security settings</>}
            description={[
              "Set up security & privacy settings in your account, such as limiting those who can see your posts to “friends only”, using two-factor authentication, and setting up spam protection.",
            ]}
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
        <h1>Related Case Studies</h1>
        <div className="pinkcard-row-styling" style={{ gap: "20px" }}>
          <ExploreCard
            title="Social Media and Online Identity"
            text={
              <>
                Soumayya is a student in 10th grade that enjoys photography and
                Photoshop. However, are there limits to what is appropriate to
                Photoshop and share online?
                <br />
                <br />
              </>
            }
            examples={["Digital Privacy", "Social Media", "Ages 10+"]}
          />
          <ExploreCard
            title={
              <>
                Cybersecurity
                <br />
                <br />
              </>
            }
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
      </div>
      <div>
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
      </div>
      <BottomBar />
    </>
  );
}

export default AccountProtectionScreen;
