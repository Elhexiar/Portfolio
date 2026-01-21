import React from "react";
import styles from "./modules/ProjectCard.module.css";
import CardPopUp from "./CardPopUp";
import Keyword from "./Keyword";

interface ProjectCardProps {
  projectTitle?: string;
  projectImage?: string;
  projectDescription?: string;
  projectKeywords?: string[];
  projectPopUpContent?: React.ReactNode;
}

function ProjectCard({
  projectTitle,
  projectImage,
  projectDescription,
  projectKeywords,
  projectPopUpContent,
}: ProjectCardProps) {
  let [isPopUpOpen, setIsPopUpOpen] = React.useState(false);

  return (
    <div
      className={styles.CardContainer}
      onClick={() => {
        setIsPopUpOpen(true);
      }}
    >
      <h2 className={styles.CardTitle}>{projectTitle}</h2>
      <img
        src={projectImage || "https://placehold.co/600x400"}
        alt={projectTitle + " image"}
        className={styles.cardImage}
      />
      <p className={styles.CardDescription}>{projectDescription}</p>
      {projectKeywords && projectKeywords.length > 0 && (
        <div className={styles.CardKeywordContainer}>
          {projectKeywords.map((keyword) => (
            <Keyword keyword={keyword} />
          ))}
        </div>
      )}
      {isPopUpOpen && (
        <CardPopUp
          title={projectTitle}
          content={projectPopUpContent}
          onClose={() => {
            setIsPopUpOpen(false);
            console.log("Closing pop-up");
          }}
        />
      )}
    </div>
  );
}

export default ProjectCard;
