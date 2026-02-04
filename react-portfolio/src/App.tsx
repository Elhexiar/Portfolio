import CharacterPreviewer from "./components/CharacterPreviewer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Tooltip.css";
import { useEffect, useState } from "react";
import { Tooltip } from "bootstrap";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import MapsAndCards from "./components/popUps/MapsAndCards";
import PortfolioWebsite from "./components/popUps/PortfolioWebsite";
import TechnicalSkillTree from "./components/TechnicalSkillTree";
import Citadel from "./components/popUps/Citadel";
import UIToolkit from "./components/popUps/UIToolkit";
import AboutMe from "./components/AboutMe";
import ResumeNLinks from "./components/ResumeNLinks";
import AllHandsOnDeck from "./components/popUps/AllHandsOnDeck";

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

  let [aboutMeAlreadyTyped, setAboutMeAlreadyTyped] = useState(0);

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
              contentChildren: [
                <AboutMe
                  alreadyTyped={aboutMeAlreadyTyped}
                  handleTotalCharsTyped={setAboutMeAlreadyTyped}
                />,
              ],
            },
            {
              tabChildren: "Projects",
              contentChildren: [
                <MapsAndCards />,
                <PortfolioWebsite />,
                <Citadel />,
                <UIToolkit />,
                <AllHandsOnDeck />,
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
              contentChildren: <ResumeNLinks />,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
