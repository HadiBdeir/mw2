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

function DigitalCitizenship() {
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
      {!isMobile ? (
        <div>
          <BigScreenTopBar />
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "70px",
                  marginBottom: "15px",
                  maxWidth: "700px",
                }}
              >
                Digital Citizenship
              </h1>
              <h3 style={{ maxWidth: "700px", marginBottom: "60px" }}>
                <em>
                  “Digital citizenship is the continuously developing norms of
                  appropriate, responsible, and empowered technology use.” –
                  Mike Ribble
                </em>
              </h3>
              <div style={{ fontSize: "19px", maxWidth: "900px" }}>
                <p>
                  Today, technology is seen as a necessity. As technology
                  advances, our dependence on it will also grow. Even if we
                  choose to limit our interaction with technology, the world
                  around us will continue to expose us to it, making it
                  necessary to learn how to reap its benefits and avoid its
                  misuse.
                </p>
                <p>
                  Similar to how we try to be good citizens in society with our
                  friends, family, and neighbors, we also must learn how to
                  conduct ourselves online appropriately. This concept is called{" "}
                  <strong>digital citizenship</strong>.
                </p>
                <p>
                  When we use our digital devices, such as our phones, laptops,
                  and even smart TVs, we act in a digital world where our
                  actions affect ourselves and others. Digital citizenship
                  education can ensure that we are able to use technology’s full
                  potential in a safe, inclusive, and collaborative environment.
                </p>
              </div>
            </div>
            <div
              style={{
                alignContent: "center",
              }}
            >
              <img
                src="Digital_Citizenship_top_photo.png"
                alt="Digital Citizenship"
                style={{ height: "320px", width: "auto", marginLeft: "30px" }}
              />
            </div>
          </section>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontSize: "70px",
                textAlign: "center",
                marginTop: "150px",
                width: "1000px",
                maxWidth: "1230px",
              }}
            >
              The Nine Themes of Digital Citizenship
            </h1>
          </div>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ maxWidth: "1300px", width: "100%" }}>
                <div style={{ maxWidth: "1100px" }}>
                  <h1
                    style={{
                      textAlign: "left",
                      fontSize: "40px",
                    }}
                  >
                    Digital Access: Ensuring everyone has equal access to
                    technology.
                  </h1>
                </div>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "20px",
                    marginTop: "0px",
                    maxWidth: "900px",
                    lineHeight: "1",
                  }}
                >
                  With differences in socioeconomic status, physical abilities,
                  mental abilities, and physical locations, it’s important to
                  ensure everyone has an equitable opportunity to use
                  technology.
                </p>
              </div>
            </div>
          </section>
          {/*  
        NEW SECTION
        NEW SECTION
        NEW SECTION
        NEW SECTION
    */}
          <section
            style={{
              paddingTop: "50px",
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                maxWidth: "1300px",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src="Computer_world_map.png"
                alt="Digital Etiquette"
                style={{
                  height: "320px",
                  width: "auto",
                  marginRight: "30px",
                }}
              />
              <div style={{ maxWidth: "800px", textAlign: "left" }}>
                <h1
                  style={{
                    fontSize: "40px",
                    marginBottom: "15px",
                    textAlign: "right",
                  }}
                >
                  Digital Etiquette: Thinking of others when using technology.
                </h1>
                <p
                  style={{
                    fontSize: "19px",
                    textAlign: "right",
                    lineHeight: "1",
                  }}
                >
                  When using technology, you must take into consideration those
                  who are around you physically and those you interact with
                  online. Is it polite to answer your phone mid-conversation? Is
                  it appropriate to be rude to an online user who differs in
                  opinion from you? These are questions that must be answered
                  when defining digital etiquette.
                </p>
              </div>
            </div>
          </section>
          {/*  
        NEW SECTION
        NEW SECTION
        NEW SECTION
        NEW SECTION
    */}
          <section>
            <div
              style={{
                paddingTop: "50px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ maxWidth: "1300px", width: "100%" }}>
                <div style={{ maxWidth: "1100px" }}>
                  <h1
                    style={{
                      textAlign: "left",
                      fontSize: "40px",
                    }}
                  >
                    Digital Literacy & Fluency: The ability to use technology
                    and to know when and how to use it.
                  </h1>
                </div>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "20px",
                    marginTop: "0px",
                    maxWidth: "900px",
                    lineHeight: "1",
                  }}
                >
                  Although we may have the basic skills to use technology, such
                  as typing on a keyboard or swiping on a screen, this does not
                  mean we fully understand how to use it to its full potential.
                  For example, even though a person may know how to post on
                  Facebook, they may not know how to alter their advertisement
                  settings or use a search engine to learn how. Moreover, access
                  to a large and diverse amount of information must also be
                  accompanied by the ability to discern reliable sources of
                  information from those that are not. The more fluent one is in
                  technology, the less likely they are to misuse it.
                </p>
              </div>
            </div>
          </section>
          {/*  
        NEW SECTION
        NEW SECTION
        NEW SECTION
        NEW SECTION
    */}
          <section
            style={{
              paddingTop: "50px",
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                maxWidth: "1300px",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src="man_with_letter.png"
                alt="Digital Etiquette"
                style={{
                  height: "320px",
                  width: "auto",
                  marginRight: "30px",
                }}
              />
              <div style={{ maxWidth: "800px", textAlign: "left" }}>
                <h1
                  style={{
                    fontSize: "40px",
                    marginBottom: "15px",
                    textAlign: "right",
                  }}
                >
                  Digital Communication and Collaboration: The electronic
                  exchange of information.
                </h1>
                <p
                  style={{
                    fontSize: "19px",
                    textAlign: "right",
                    lineHeight: "1",
                  }}
                >
                  Technology has made it possible to reach anyone at any time.
                  It has also made it easier to express ourselves and to spread
                  our ideas to a larger audience. However, is that necessarily a
                  good thing? Technology users should understand when it is
                  appropriate to contact someone and how to express themselves
                  in a way that they can be understood correctly.
                </p>
              </div>
            </div>
          </section>
          {/*  
        NEW SECTION
        NEW SECTION
        NEW SECTION
        NEW SECTION
    */}
          <section>
            <div
              style={{
                display: "flex",
                paddingTop: "50px",
                justifyContent: "center",
              }}
            >
              <div style={{ maxWidth: "1300px", width: "100%" }}>
                <div style={{ maxWidth: "1100px" }}>
                  <h1
                    style={{
                      textAlign: "left",
                      fontSize: "40px",
                    }}
                  >
                    Digital Rights and Responsibility: The privileges that all
                    technology users have and the responsibilities that are
                    expected of them.
                  </h1>
                </div>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "20px",
                    marginTop: "0px",
                    maxWidth: "900px",
                    lineHeight: "1",
                  }}
                >
                  When you join a community or club, you are given opportunities
                  and expected to take responsibility for the community. When
                  using technology, you are joining a digital society; while you
                  have the privilege of using technology, you must also act
                  responsibly with others in that society. For example, if you
                  see someone in danger online, you should call the authorities
                  to alert them and help your community member.
                </p>
              </div>
            </div>
          </section>
          {/*  
        NEW SECTION
        NEW SECTION
        NEW SECTION
        NEW SECTION
    */}
          <section
            style={{
              paddingTop: "50px",
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                maxWidth: "1300px",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src="girl_with_cart.png"
                alt="Digital Etiquette"
                style={{
                  height: "320px",
                  width: "auto",
                  marginRight: "30px",
                }}
              />
              <div style={{ maxWidth: "900px", textAlign: "left" }}>
                <h1
                  style={{
                    fontSize: "40px",
                    marginBottom: "15px",
                    textAlign: "right",
                  }}
                >
                  Digital Commerce: Being an intelligent consumer when buying or
                  selling goods online.
                </h1>
                <p
                  style={{
                    fontSize: "19px",
                    textAlign: "right",
                    lineHeight: "1",
                  }}
                >
                  When buying products online, it is important to know how to
                  ensure the transaction is safe and that the seller or buyer is
                  not a scammer. If using an online
                </p>
              </div>
            </div>
          </section>
          {/*  
        NEW SECTION
        NEW SECTION
        NEW SECTION
        NEW SECTION
    */}
          <section>
            <div
              style={{
                display: "flex",
                paddingTop: "50px",
                justifyContent: "center",
              }}
            >
              <div style={{ maxWidth: "1300px", width: "100%" }}>
                <div style={{ maxWidth: "1000px" }}>
                  <h1
                    style={{
                      textAlign: "left",
                      fontSize: "40px",
                    }}
                  >
                    Digital Health and Welfare: The physical and mental
                    well-being of a technology user.
                  </h1>
                </div>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "20px",
                    marginTop: "0px",
                    maxWidth: "900px",
                    lineHeight: "1",
                  }}
                >
                  A balance when using technology is necessary to maintain
                  physical and mental health. Overusing electronic devices
                  without a proper balance can lead to health issues, such as
                  straining our eyes or an addiction in the case of excessive
                  internet use. Moreover, using technology with poor posture or
                  improper physical positions can hurt our bodies.
                </p>
              </div>
            </div>
          </section>
          {/*  
        NEW SECTION
        NEW SECTION
        NEW SECTION
        NEW SECTION
    */}
          <section
            style={{
              paddingTop: "50px",
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              marginBottom: "150px",
            }}
          >
            <div
              style={{
                maxWidth: "1300px",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <div style={{ maxWidth: "900px", textAlign: "left" }}>
                <h1
                  style={{
                    fontSize: "40px",
                    marginBottom: "15px",
                    textAlign: "right",
                  }}
                >
                  Digital Law: The legal rights and restrictions when using
                  technology.
                </h1>
                <p
                  style={{
                    fontSize: "19px",
                    textAlign: "right",
                    lineHeight: "1",
                  }}
                >
                  Similar to the legal repercussions for inappropriate behavior
                  in the physical world, there are also such consequences in the
                  digital world. Such behavior can include cyberbullying,
                  cyberstalking, and digital property theft.
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <>
          <MobileTopBar />
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <h1
              style={{
                fontSize: "40px",
                marginBottom: "15px",
                textAlign: "center",
                padding: "0 10px",
              }}
            >
              Digital Citizenship
            </h1>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "30px",
                padding: "0 20px",
                fontSize: "16px",
              }}
            >
              <em>
                "Digital citizenship is the continuously developing norms of
                appropriate, responsible, and empowered technology use." – Mike
                Ribble
              </em>
            </h3>
            <img
              src="Digital_Citizenship_top_photo.png"
              alt="Digital Citizenship"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                marginBottom: "20px",
              }}
            />
            <div style={{ fontSize: "16px", padding: "0 20px" }}>
              <p>
                Today, technology is seen as a necessity. As technology
                advances, our dependence on it will also grow. Even if we choose
                to limit our interaction with technology, the world around us
                will continue to expose us to it, making it necessary to learn
                how to reap its benefits and avoid its misuse.
              </p>
              <p>
                Similar to how we try to be good citizens in society with our
                friends, family, and neighbors, we also must learn how to
                conduct ourselves online appropriately. This concept is called{" "}
                <strong>digital citizenship</strong>.
              </p>
              <p>
                When we use our digital devices, such as our phones, laptops,
                and even smart TVs, we act in a digital world where our actions
                affect ourselves and others. Digital citizenship education can
                ensure that we are able to use technology's full potential in a
                safe, inclusive, and collaborative environment.
              </p>
            </div>
          </section>

          {/* Title Section - Mobile */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0 20px",
              marginTop: "40px",
            }}
          >
            <h1
              style={{
                fontSize: "36px",
                textAlign: "center",
                lineHeight: "1.2",
              }}
            >
              The Nine Themes of Digital Citizenship
            </h1>
          </div>

          {/* Digital Access Section - Mobile */}
          <section style={{ padding: "30px 20px" }}>
            <h1
              style={{
                fontSize: "28px",
                marginBottom: "15px",
                lineHeight: "1.2",
              }}
            >
              Digital Access: Ensuring everyone has equal access to technology.
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.4",
              }}
            >
              With differences in socioeconomic status, physical abilities,
              mental abilities, and physical locations, it's important to ensure
              everyone has an equitable opportunity to use technology.
            </p>
          </section>

          {/* Digital Etiquette Section - Mobile */}
          <section style={{ padding: "30px 20px", backgroundColor: "#f8f9fa" }}>
            <img
              src="Computer_world_map.png"
              alt="Digital Etiquette"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                marginBottom: "20px",
                display: "block",
                margin: "0 auto 20px auto",
              }}
            />
            <h1
              style={{
                fontSize: "28px",
                marginBottom: "15px",
                lineHeight: "1.2",
              }}
            >
              Digital Etiquette: Thinking of others when using technology.
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.4",
              }}
            >
              When using technology, you must take into consideration those who
              are around you physically and those you interact with online. Is
              it polite to answer your phone mid-conversation? Is it appropriate
              to be rude to an online user who differs in opinion from you?
              These are questions that must be answered when defining digital
              etiquette.
            </p>
          </section>

          {/* Digital Literacy Section - Mobile */}
          <section style={{ padding: "30px 20px" }}>
            <h1
              style={{
                fontSize: "28px",
                marginBottom: "15px",
                lineHeight: "1.2",
              }}
            >
              Digital Literacy & Fluency: The ability to use technology and to
              know when and how to use it.
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.4",
              }}
            >
              Although we may have the basic skills to use technology, such as
              typing on a keyboard or swiping on a screen, this does not mean we
              fully understand how to use it to its full potential. For example,
              even though a person may know how to post on Facebook, they may
              not know how to alter their advertisement settings or use a search
              engine to learn how. Moreover, access to a large and diverse
              amount of information must also be accompanied by the ability to
              discern reliable sources of information from those that are not.
              The more fluent one is in technology, the less likely they are to
              misuse it.
            </p>
          </section>

          {/* Digital Communication Section - Mobile */}
          <section style={{ padding: "30px 20px", backgroundColor: "#f8f9fa" }}>
            <img
              src="man_with_letter.png"
              alt="Digital Communication"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                marginBottom: "20px",
                display: "block",
                margin: "0 auto 20px auto",
              }}
            />
            <h1
              style={{
                fontSize: "28px",
                marginBottom: "15px",
                lineHeight: "1.2",
              }}
            >
              Digital Communication and Collaboration: The electronic exchange
              of information.
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.4",
              }}
            >
              Technology has made it possible to reach anyone at any time. It
              has also made it easier to express ourselves and to spread our
              ideas to a larger audience. However, is that necessarily a good
              thing? Technology users should understand when it is appropriate
              to contact someone and how to express themselves in a way that
              they can be understood correctly.
            </p>
          </section>

          {/* Digital Rights Section - Mobile */}
          <section style={{ padding: "30px 20px" }}>
            <h1
              style={{
                fontSize: "28px",
                marginBottom: "15px",
                lineHeight: "1.2",
              }}
            >
              Digital Rights and Responsibility: The privileges that all
              technology users have and the responsibilities that are expected
              of them.
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.4",
              }}
            >
              When you join a community or club, you are given opportunities and
              expected to take responsibility for the community. When using
              technology, you are joining a digital society; while you have the
              privilege of using technology, you must also act responsibly with
              others in that society. For example, if you see someone in danger
              online, you should call the authorities to alert them and help
              your community member.
            </p>
          </section>

          {/* Digital Commerce Section - Mobile */}
          <section style={{ padding: "30px 20px", backgroundColor: "#f8f9fa" }}>
            <img
              src="girl_with_cart.png"
              alt="Digital Commerce"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                marginBottom: "20px",
                display: "block",
                margin: "0 auto 20px auto",
              }}
            />
            <h1
              style={{
                fontSize: "28px",
                marginBottom: "15px",
                lineHeight: "1.2",
              }}
            >
              Digital Commerce: Being an intelligent consumer when buying or
              selling goods online.
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.4",
              }}
            >
              When buying products online, it is important to know how to ensure
              the transaction is safe and that the seller or buyer is not a
              scammer. If using an online platform, research the security
              measures they have in place.
            </p>
          </section>

          {/* Digital Health Section - Mobile */}
          <section style={{ padding: "30px 20px" }}>
            <h1
              style={{
                fontSize: "28px",
                marginBottom: "15px",
                lineHeight: "1.2",
              }}
            >
              Digital Health and Welfare: The physical and mental well-being of
              a technology user.
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.4",
              }}
            >
              A balance when using technology is necessary to maintain physical
              and mental health. Overusing electronic devices without a proper
              balance can lead to health issues, such as straining our eyes or
              an addiction in the case of excessive internet use. Moreover,
              using technology with poor posture or improper physical positions
              can hurt our bodies.
            </p>
          </section>

          {/* Digital Law Section - Mobile */}
          <section
            style={{
              padding: "30px 20px",
              backgroundColor: "#f8f9fa",
              marginBottom: "40px",
            }}
          >
            <h1
              style={{
                fontSize: "28px",
                marginBottom: "15px",
                lineHeight: "1.2",
              }}
            >
              Digital Law: The legal rights and restrictions when using
              technology.
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.4",
              }}
            >
              Similar to the legal repercussions for inappropriate behavior in
              the physical world, there are also such consequences in the
              digital world. Such behavior can include cyberbullying,
              cyberstalking, and digital property theft.
            </p>
          </section>
        </>
      )}
      <BottomBar />
    </div>
  );
}
export default DigitalCitizenship;