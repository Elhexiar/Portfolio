import CharacterPreviewer from "./components/CharacterPreviewer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Tooltip.css";
import { useEffect } from "react";
import { Tooltip } from "bootstrap";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import MapsAndCards from "./components/popUps/MapsAndCards";
import PortfolioWebsite from "./components/popUps/PortfolioWebsite";
import TechnicalSkillTree from "./components/TechnicalSkillTree";
import Keyword from "./components/Keyword";

declare module "bootstrap";

function App() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]',
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl),
    );
  }, []);

  return (
    <div
      className="App bg"
      style={{
        top: "0",
        left: "0",
        position: "absolute",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div className="main-container">
        <CharacterPreviewer />

        <Navbar
          childrenList={[
            {
              tabChildren: "About Me",
              contentChildren: <div>Content for About Me</div>,
            },
            {
              tabChildren: "Projects",
              contentChildren: [
                <MapsAndCards />,
                <PortfolioWebsite />,
                <ProjectCard
                  projectTitle="CITADEL"
                  projectDescription="A Small tower defense plateformer game"
                  projectKeywords={["JS", "Phaser"]}
                  projectPopUpContent={
                    <div>
                      <h2>CITADEL</h2>
                      <img
                        src="/citadel-main-art.png"
                        alt="Citadel Game main art"
                        style={{
                          maxWidth: "200px",
                          height: "300px",
                          objectFit: "contain",
                        }}
                      ></img>
                      <p>
                        Citadel is a small tower defense platformer game where
                        players must strategically place towers to defend
                        against waves of enemies while gathering ressources by
                        mining the underground in between waves.
                      </p>
                      <Keyword keyword="JavaScript" />{" "}
                      <Keyword keyword="Phaser" />
                    </div>
                  }
                />,
                <ProjectCard
                  projectTitle="UI Toolkit Systems"
                  projectDescription="A collection of UI systems and tools for UIToolkit I made during an internship."
                  projectKeywords={["Unity", "C#", "UIToolkit"]}
                />,
                <ProjectCard
                  projectTitle="All Hands On Deck"
                  projectDescription="A First Person puzzle game where you play as someone stuck on a sinking military ship."
                  projectKeywords={["Unity", "C#"]}
                />,
                <ProjectCard
                  projectTitle="Guignol Bagnole"
                  projectDescription="A small racing game made during the GMTK Game Jam 2025."
                  projectKeywords={["Unreal Engine"]}
                />,
              ],
            },
            {
              tabChildren: "Skills",
              contentChildren: <TechnicalSkillTree />,
              contentStyle: { height: "100%", overflowY: "hidden" },
            },
            {
              tabChildren: "Resume & Links",
              contentChildren: <div>Content for Resume</div>,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
