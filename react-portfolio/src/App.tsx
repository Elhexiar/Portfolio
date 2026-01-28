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
import Citadel from "./components/popUps/Citadel";

declare module "bootstrap";

function App() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]',
    );
    [...tooltipTriggerList].forEach(
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
      <div className="left-side-glyphs-container">
        <div className="left-side-glyphs">
          MY NAME IS MATHIS MIRIEL WELCOME TO MY PORTFOLIO, PLEASE ENJOY YOUR
          STAY AND FEEL FREE TO CONTACT ME FOR ANY PROJECTS OR OPPORTUNITIES. MY
          NAME IS MATHIS MIRIEL WELCOME TO MY PORTFOLIO, PLEASE ENJOY YOUR STAY
          AND FEEL FREE TO CONTACT ME FOR ANY PROJECTS OR OPPORTUNITIES.
        </div>
      </div>
      <div className="right-side-glyphs-container">
        <div className="right-side-glyphs">
          MY NAME IS MATHIS MIRIEL WELCOME TO MY PORTFOLIO, PLEASE ENJOY YOUR
          STAY AND FEEL FREE TO CONTACT ME FOR ANY PROJECTS OR OPPORTUNITIES. MY
          NAME IS MATHIS MIRIEL WELCOME TO MY PORTFOLIO, PLEASE ENJOY YOUR STAY
          AND FEEL FREE TO CONTACT ME FOR ANY PROJECTS OR OPPORTUNITIES.
        </div>
      </div>
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
                <Citadel />,
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
