import React, { useState, useEffect } from "react";
import styles from "./modules/AboutMe.module.css";

interface AboutMeProps {
  alreadyTyped?: number;
  handleTotalCharsTyped?: (charsTyped: number) => void;
}

function AboutMe({ alreadyTyped = 0, handleTotalCharsTyped }: AboutMeProps) {
  const [displayedIndex, setDisplayedIndex] = useState(alreadyTyped);
  const [isTyping, setIsTyping] = useState(true);

  const textSegments = [
    "Hi ! I'm Mathis, junior game developer and programming enthusiast.",
    "\nI have a strong urge to create things and solve problems, I'm focusing on programming as a career path but I also draw and play music on the side.",
    "\n\nI am currently looking for either a ",
    { type: "strong", text: "junior game developer position" },
    " or a ",
    { type: "strong", text: "web development apprenticeship" },
    " to further my skills.",
    '\n\nFeel free to check out my projects and skills in the "Projects" and "Skills" tabs, and contact me if you want to collaborate or have any opportunity in mind !',
  ];

  const typeSpeed = 5; // milliseconds per character
  const numberOfCharsPerInterval = 3;

  // Calculate total characters
  const totalChars = textSegments.reduce((sum, seg) => {
    return sum + (typeof seg === "string" ? seg.length : seg.text.length);
  }, 0);

  useEffect(() => {
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
        const visibleText =
          displayedIndex >= segmentEnd
            ? segment
            : displayedIndex > segmentStart
              ? segment.slice(0, displayedIndex - segmentStart)
              : "";

        // insert line breaks for instead of \n characters
        content = visibleText.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i < visibleText.split("\n").length - 1 && <br />}
          </React.Fragment>
        ));

        // handle strong segments
      } else if (segment.type === "strong") {
        const visibleText =
          displayedIndex >= segmentEnd
            ? segment.text
            : displayedIndex > segmentStart
              ? segment.text.slice(0, displayedIndex - segmentStart)
              : "";

        content = visibleText && <strong>{visibleText}</strong>;
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
            src="https://placehold.co/600x600"
            alt="Mathis Miriel"
            className={styles.aboutMeImage}
          />
          <span className={styles.aboutMeDescriptionText}>Mathis MIRIEL</span>
          <span className={styles.aboutMeDescriptionText}>
            Game Developer & Student Web Developer
          </span>
          <span className={styles.aboutMeDescriptionText}>
            <strong style={{ textDecoration: "underline" }}>Languages</strong> :
            <span style={{ display: "inline-block" }}>French (native),</span>
            <span style={{ display: "inline-block" }}>
              {" "}
              English (fluent : TOEIC 970/990)
            </span>
          </span>
          <span className={styles.aboutMeDescriptionText}>
            <strong style={{ textDecoration: "underline" }}>Contact</strong> :
            miriel.mathis@gmail.com
          </span>
          <span className={styles.aboutMeDescriptionText}>
            <strong style={{ textDecoration: "underline" }}>Likes</strong> :
            programming, playing piano, drawing, video games
          </span>
        </div>
      </h2>
      <p className={`${styles.aboutMeText} ${styles.typingEffect}`}>
        {renderContent()}
        {isTyping && <span className={styles.cursor}>▌</span>}
      </p>
    </div>
  );
}

export default AboutMe;
