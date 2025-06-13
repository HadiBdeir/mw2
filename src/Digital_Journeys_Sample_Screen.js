import Card, {
  PinkCard,
  MobileTopBar,
  BottomBar,
  BigScreenTopBar,
  InfoPackWithButton,
} from "./Components.js";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

function DigitalJourneysSample() {
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
          flex: "1",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          padding: isMobile ? "0 20px" : "0",
          textAlign: "left",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "32px" : "64px",
            marginTop: isMobile ? "70px" : "150px",
            marginBottom: isMobile ? undefined : "0px",
          }}
        >
          Unfollowing the Hunt
        </h1>
        <p
          style={{
            fontSize: isMobile ? "20px" : "32px",
            fontWeight: "bold",
            // margin: "0",
          }}
        >
          A Teen's Struggle with Social Media Pressure in Lebanon
        </p>
        <div
          style={{ fontSize: isMobile ? "12px" : "16px", lineHeight: "1.1" }}
        >
          <h3>
            Tags: Social Media; Trends; Peer-pressure; Bullying; Cyberbullying;
            Environmental Issues.
          </h3>
          <h3>Ages: 12-18</h3>
          <h3>
            Skills: Google Image Search; using search engines; appropriate
            social media use.
          </h3>
        </div>
        <div
          style={{
            maxWidth: "1200px",
            fontSize: isMobile ? "16px" : "20px",
            margin: "0px",
            lineHeight: "1.1",
            marginBottom: isMobile ? "60px" : "110px",
          }}
        >
          <p style={{ margin: "0" }}>
            In a village of the Bekaa Valley of Lebanon lived a 15-year-old boy
            named Karim. In this village, bird hunting was a popular sport, and
            gamebirds could often be heard echoing through the mountains. Karim,
            however, did not enjoy this activity and would very much rather sit
            on his bedroom balcony and watch the birds fly across the sky while
            sipping on a cup of coffee.
          </p>

          <p style={{ margin: "0" }}>
            Unfortunately, the neighborhood boys did not understand Karim's
            indifference to their weekend hunt, and would call him from outside
            his window, "Come on Karim, come to their hunting spot." "Come on,
            Karim!" they would call, "It's fun, you'll see! We'll teach you!"
            Even at school on Fridays, they would tell Karim they would pass by
            his house the next day to pester him until he gets his first-class
            rifle and joined them.
          </p>

          <p style={{ margin: "0" }}>
            One Saturday, they literally begged Karim, "You don't need to shoot,
            just watch!" At this point Karim began succumbing to the pressure
            and decided there was no harm in only accompanying them. With his
            hot cup of coffee in one hand, Karim jogged along with his
            neighborhood friends.
          </p>

          <p style={{ margin: "0" }}>
            Karim sipped his drink between the shrubbery and trees at the
            hunting site. Spring had just started, and he listened to the birds
            singing, watched ants carrying a crumb back up beetle on their
            backs, and even saw a lizard eyeing him a few paces away. He
            breathed, eyes and took a deep breath, appreciating nature.
          </p>

          <p style={{ margin: "0" }}>"BANG!"</p>

          <p style={{ margin: "0" }}>
            Karim jolted, and his eyes popped open: the lizard was gone, the
            birds resting in trees took flight, scattering in the sky, and Karim
            squashed some ants with his palm in surprise. Karim's friend,
            Basset, had taken the first shot and was getting his next shot
            ready. The second shot came with another loud "BANG!" This time, a
            bird came plummeting from the sky after it. "Yes!" Basset exclaimed,
            "Got one!" The other boys cheered as they saw the bird fall to the
            ground. "Let me get a picture of this!" Jamil said. Basset held it
            up by its leg and raised it for everyone to see. Another one of the
            boys, Jamil, pulled out his phone and began to record a video as
            Basset swayed the dead bird. "First catch of the day!" Basset said
            to the camera, then threw the bird to the floor.
          </p>

          <p style={{ margin: "0" }}>
            "Karim, come here! You took Karim asked.
          </p>

          <p style={{ margin: "0" }}>
            "And what do you think with the video you took?" he asked Jamil.
          </p>

          <p style={{ margin: "0" }}>
            "I'm going to post it on TikTok, of course! Haven't you seen how
            TikTok has over one hundred thousand subscribers!" Jamil showed
            Karim the TikTok account. As he scrolled, Karim saw more videos of
            dead birds held up by their leg or wings. There was one video of
            multiple birds lying in a row on the grass, with sad, dramatic music
            in the background.
          </p>

          <p style={{ margin: "0" }}>
            Karim felt queasy upon seeing the TikTok account. He could not
            believe that his friend, who was ordinarily very kind, would be as
            cruel as to kill animals and show off his victims. He felt his face
            heat and his eyes water, so he told his friends he had to go home.
          </p>

          <p style={{ margin: "0" }}>
            In his room, Karim opened Basset's TikTok account again and found
            that Basset was part of an online trend, and there were many
            accounts just like his. One giant bird Basset had killed caught his
            eye, and he used the Google image Search function to find its
            species. He discovered it was a Eurasian Sparrowhawk, a species that
            had been in decline in recent years due to habitat loss and rodents.
            Because of the decline in the number of Sparrowhawks, farmers have
            had to resort to using pesticides to protect their crops. He also
            discovered that millions of birds are illegally killed in Lebanon
            every year, and the TikTok trend he increases this number.
          </p>

          <p style={{ margin: "0" }}>
            Karim concluded that his friends were killing birds just for
            popularity on social media, and in turn, were not only being cruel
            to animals but harming the ecosystem.
          </p>

          <p style={{ margin: "0" }}>
            On Monday, Karim noticed a change in how he was treated at school.
            Word had spread that he did not react well to Basset's ventures on
            TikTok.
          </p>

          <p style={{ margin: "0" }}>
            "Why didn't you stay? You could have shot something too," one asked
            him.
          </p>

          <p style={{ margin: "0" }}>
            Another one told him in the hallway, "Don't be a loser. Follow
            Basset on TikTok, support your friend!"
          </p>

          <p style={{ margin: "0" }}>
            Karim ignored these comments and kept his head down for the whole
            week. However, the attacks followed him to his online life, where a
            friend commented on a photo of the sunrise Karim had posted, "Try
            not to cry, but on Saturday I'm going to shoot all those birds in
            the photo."
          </p>

          <p style={{ margin: "0" }}>
            That night, Karim began to consider following Basset on TikTok. He
            did not get it frequently, so he could avoid seeing the photos.
            While a small voice inside him was concerned about the effect of
            supporting his friend's account online, the bullying was starting to
            upset him.
          </p>
        </div>
        <section
          style={{
            marginBottom: "50px",
          }}
        >
          <h1 style={{ fontSize: "32px" }}>Discussion Questions</h1>
          <ol style={{ fontSize: "20px" }}>
            <li>If you were in Karim’s position, what would you do?</li>
            <li>
              What is social media’s role in the actions taken towards the
              environment in this story?
            </li>
            <li>
              While practicing their sport, how can Karim’s friends display the
              following digital citizenship competencies: Inclusive, Engaged,
              Alert?
            </li>
            <li>
              How was technology used positively, and how was it used negatively
              in this story?
            </li>
            <li>
              How would you use social media to help the Eurasian Sparrowhawk?
            </li>
            <li>
              What role should families and schools play in helping teenagers
              like Karim?
            </li>
          </ol>
        </section>
      </div>
      <BottomBar />
    </div>
  );
}

export default DigitalJourneysSample;