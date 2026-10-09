import React, { useState, useEffect } from "react";
import styles from "./modules/AboutMe.module.css";
import { useNavbar } from "../App";
import { Rnd } from "react-rnd";
import popUpStyle from "./modules/CardPopUp.module.css";
import ReactDOM from "react-dom";
import { useLanguage } from "../i18n";

type TextSegment =
  | string
  | { type: "strong"; text: string }
  | { type: "link"; text: string; index: number };

const profileImage = new Image();
profileImage.src = "profile-pic.png";

interface AboutMeProps {
  alreadyTyped?: number;
  handleTotalCharsTyped?: (charsTyped: number) => void;
}

function AboutMe({ alreadyTyped = 0, handleTotalCharsTyped }: AboutMeProps) {
  const { setSelectedIndex } = useNavbar();
  const { tr } = useLanguage();
  const [displayedIndex, setDisplayedIndex] = useState(alreadyTyped);
  const [isTyping, setIsTyping] = useState(true);
  const [favoriteVideoGamesWindowOpen, setFavoriteVideoGamesWindowOpen] =
    useState(false);

  // THIS WAS HELL ON EARTH TO MAKE WORK BUT IT FINALLY DOES

  //   I devideded the text into segments to be able to style some parts differently (like strong)
  //   cons it scales really bad since they are hardcoded but for now it's fine
  //   would love to learn how to do this effect with a string input only in the future
  const textSegments = tr<TextSegment[]>({
    fr: [
      "Bonjour ! Je suis Mathis, développeur de jeux vidéo junior et passionné de programmation.",
      "\nJ'ai un fort besoin de créer et de résoudre des problèmes. J'ai choisi la programmation comme métier, mais je dessine et je fais de la musique à côté.",
      "\n\nJe recherche actuellement un ",
      { type: "strong", text: "poste de développeur de jeux vidéo junior" },
      " ou une ",
      { type: "strong", text: "alternance en développement web" },
      " pour continuer à progresser.",
      "\n\nN'hésitez pas à parcourir mes projets et mes compétences dans les onglets ",
      { type: "link", text: "Projets", index: 1 },
      " et ",
      { type: "link", text: "Compétences", index: 2 },
      ", et à me contacter si vous souhaitez collaborer ou si vous avez une opportunité à me proposer !",
      "\n\n CE PORTFOLIO EST ENCORE EN CONSTRUCTION, ATTENDEZ-VOUS À QUELQUES BUGS ET CHANGEMENTS DE DESIGN, SURTOUT POUR LES PHOTOS",
    ],
    en: [
      "Hi ! I'm Mathis, junior game developer and programming enthusiast.",
      "\nI have a strong urge to create things and solve problems, I'm focusing on programming as a career path but I also draw and play music on the side.",
      "\n\nI am currently looking for either a ",
      { type: "strong", text: "junior game developer position" },
      " or a ",
      { type: "strong", text: "web development apprenticeship" },
      " to further my skills.",
      "\n\nFeel free to check out my projects and skills in the ",
      { type: "link", text: "Projects", index: 1 },
      " and ",
      { type: "link", text: "Skills", index: 2 },
      " tabs, and contact me if you want to collaborate or have any opportunity in mind !",
      "\n\n THIS PORTFOLIO IS STILL A WORK IN PROGRESS SO EXPECT SOME BUGS AND DESIGN CHANGES IN THE FUTURE ESPECIALLY FOR PHOTOS",
    ],
  });

  const typeSpeed = 5; // milliseconds per character
  const numberOfCharsPerInterval = 3;

  // Calculate total characters
  const totalChars = textSegments.reduce((sum, seg) => {
    return sum + (typeof seg === "string" ? seg.length : seg.text.length);
  }, 0);

  useEffect(() => {
    //timer to increment displayedIndex until it reaches totalChars
    if (displayedIndex < totalChars) {
      const timer = setTimeout(() => {
        setDisplayedIndex((current) =>
          Math.min(current + numberOfCharsPerInterval, totalChars),
        );
      }, typeSpeed);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [displayedIndex, totalChars, numberOfCharsPerInterval, typeSpeed]);

  useEffect(() => {
    if (handleTotalCharsTyped) {
      handleTotalCharsTyped(displayedIndex);
    }
  }, [displayedIndex, handleTotalCharsTyped]);

  // Render content based on displayedIndex
  const renderContent = () => {
    let charCount = 0;
    return textSegments.map((segment, idx) => {
      const segmentLength =
        typeof segment === "string" ? segment.length : segment.text.length;
      const segmentStart = charCount;
      const segmentEnd = charCount + segmentLength;

      let content;

      //   Only show part of the segment based on displayedIndex
      if (typeof segment === "string") {
        // check how many characters of the segment should be visible
        const visibleText =
          displayedIndex >= segmentEnd
            ? segment // full segment visible
            : displayedIndex > segmentStart
              ? segment.slice(0, displayedIndex - segmentStart) // partial segment visible
              : "";

        // insert line breaks for instead of \n characters
        content = visibleText.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < visibleText.split("\n").length - 1 && <br />}
          </React.Fragment>
        ));

        // TODO : Refcator this mess Pretier is cool but readability becomes painfull
        // handle strong segments DO NOT PUT \n IN STRONG TAGS THEY ARE NOT HANDLED ICBA TO ADD IT
      } else if (typeof segment === "object" && segment.type === "strong") {
        // splice
        const visibleText =
          displayedIndex >= segmentEnd
            ? segment.text
            : displayedIndex > segmentStart
              ? segment.text.slice(0, displayedIndex - segmentStart)
              : "";

        //create stong html element
        content = visibleText && <strong>{visibleText}</strong>;
        // same with link segments
      } else if (typeof segment === "object" && segment.type === "link") {
        const linkSegment = segment as {
          type: "link";
          text: string;
          index: number;
        };

        // splice
        const visibleText =
          displayedIndex >= segmentEnd
            ? linkSegment.text
            : displayedIndex > segmentStart
              ? linkSegment.text.slice(0, displayedIndex - segmentStart)
              : "";

        // create link html element
        content = visibleText && (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedIndex(linkSegment.index);
            }}
            className={styles.linkSegment}
          >
            {visibleText}
          </a>
        );
      }

      charCount += segmentLength;
      return <React.Fragment key={idx}>{content}</React.Fragment>;
    });
  };

  return (
    <div className={styles.aboutMeContainer}>
      <h2 className={styles.nameTitle}>
        Mathis Miriel{" "}
        <div className={styles.aboutMeDescriptionContainer}>
          <img
            src={profileImage.src}
            alt="Mathis Miriel"
            className={styles.aboutMeImage}
            style={{ border: "var(--default-border-color) solid 1px" }}
          />
          <span className={styles.aboutMeDescriptionText}>Mathis MIRIEL</span>
          <span className={styles.aboutMeDescriptionText}>
            {tr({
              fr: "Développeur de jeux vidéo & étudiant développeur web",
              en: "Game Developer & Student Web Developer",
            })}
          </span>
          <span className={styles.aboutMeDescriptionText}>
            <strong style={{ textDecoration: "underline" }}>
              {tr({ fr: "Langues", en: "Languages" })}
            </strong>{" "}
            :
            <span style={{ display: "inline-block" }}>
              {tr({ fr: "Français (natif),", en: "French (native)," })}
            </span>
            <span style={{ display: "inline-block" }}>
              {" "}
              {tr({
                fr: "Anglais (courant : TOEIC 970/990)",
                en: "English (fluent : TOEIC 970/990)",
              })}
            </span>
          </span>
          <span className={styles.aboutMeDescriptionText}>
            <strong style={{ textDecoration: "underline" }}>Contact</strong> :
            miriel.mathis@gmail.com
          </span>
          <span className={styles.aboutMeDescriptionText}>
            <strong style={{ textDecoration: "underline" }}>
              {tr({ fr: "J'aime", en: "Likes" })}
            </strong>{" "}
            :{" "}
            {tr({
              fr: "la programmation, le piano, le dessin,",
              en: "programming, playing piano, drawing,",
            })}{" "}
            <a
              href="#"
              style={{ color: "var(--highlight-color)" }}
              
              onClick={() => setFavoriteVideoGamesWindowOpen(true)}
            >
              {tr({ fr: "les jeux vidéo", en: "video games" })}
            </a>
          </span>
        </div>
      </h2>
      <p className={`${styles.aboutMeText} ${styles.typingEffect}`}>
        {renderContent()}
        {isTyping && <span className={styles.cursor}>▌</span>}
      </p>
      {favoriteVideoGamesWindowOpen &&
        ReactDOM.createPortal(
          <Rnd className={styles.popUpRndContainer}
          
            default={{
              x: window.innerWidth / 2 - 150,
              y: window.innerHeight / 2 - 150,
              width: 300,
              height: 300

            }}
          >
            <div
              className={popUpStyle.popUpContainer}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
              style={{ borderBottom : "var(--default-border-color) 1px solid", height : "40px", width : "100%", display : "flex", justifyContent : "flex-end", paddingRight : "10px", boxSizing : "border-box" }}
              ><div
              className="nav-close-button-container"
              style={{ cursor : "pointer" , display : "flex", alignItems : "center", justifyContent : "center", width : "30px", height : "30px" }}
              onClick={() => setFavoriteVideoGamesWindowOpen(false)}
                >
              <img
                src="/close-icon.png"
                alt={tr({ fr: "Fermer", en: "Close" })}
                className="nav-close-button"
                style={{}}
              />
            </div></div>
            
              <h3 className={popUpStyle.popUpTitle}>
                {tr({ fr: "Jeux vidéo préférés", en: "Favorite Video Games" })}
              </h3>
              <ul className={popUpStyle.popUpContent}>
                <li>Stronghold Franchise</li>
                <li>Xcom Franchise</li>
                <li>Anno1800</li>
                <li>Ultrakill</li>
                <li>CyberPunk2077</li>
                <li>Frostpunk Franchise</li>
                <li>The Witcher 3</li>
              </ul>
            </div>
          </Rnd>,
          document.body,
        )}
    </div>
  );
}

export default AboutMe;
