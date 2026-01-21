import React from "react";
import ProjectCard from "../ProjectCard";
import Keyword from "../Keyword";

function MapsAndCards() {
  return (
    <ProjectCard
      projectTitle="Maps & Cards"
      projectDescription="Card game with autobattler mechanics, Last year project."
      projectKeywords={["Unreal Engine", "C++", "BP", "Software Architecture"]}
      projectPopUpContent={
        <div>
          <h2>Maps & Cards</h2>
          <img
            src="./src/assets/m&c-main-art.png"
            alt="Maps & Cards Game main art"
            style={{
              maxWidth: "200px",
              height: "300px",
              objectFit: "contain",
            }}
          ></img>
          <p>
            Maps & Cards is a card game with autobattler mechanics developed as
            a year-end project. It features strategic gameplay where players
            build decks and compete against each other using unique cards and
            abilities.
          </p>
          <Keyword keyword="Unreal Engine" /> <Keyword keyword="C++" />
          <Keyword keyword="Blueprints" />
          <Keyword keyword="Software Architecture" />
        </div>
      }
    />
  );
}

export default MapsAndCards;
