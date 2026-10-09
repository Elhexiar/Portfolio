import CharacterPreviewer from "./components/CharacterPreviewer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Tooltip.css";
import { useEffect, useState, createContext, useContext } from "react";
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
import GamificationRiderPlugin from "./components/popUps/GamificationRiderPlugin";
import { useLanguage } from "./i18n";

declare module "bootstrap";

/*
Welcome to my portfolio ! This project is a work in progress
It was my first website so i used it as a learning experience,
Do not expect a well thought out and clean codebase 
(for example i learned about Contexts way at the end unfortunately)
since i learned react as i built it you can kind of see the evolution 
of my learning experience in this code base if you're interested in that,

If you just want to see my projects and skills feel free to check my github instead
contact me if you want to collaborate on a project or have any opportunity in mind !
*/

// creating a global context for the navbar
export const NavbarContext = createContext<{
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
} | null>(null);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarContext provider");
  }
  return context;
};

function App() {
  const { tr } = useLanguage();

  const glyphsText = tr({
    fr: "JE M'APPELLE MATHIS MIRIEL, BIENVENUE SUR MON PORTFOLIO. BONNE VISITE ET N'HÉSITEZ PAS À ME CONTACTER POUR TOUT PROJET OU OPPORTUNITÉ. ",
    en: "MY NAME IS MATHIS MIRIEL WELCOME TO MY PORTFOLIO, PLEASE ENJOY YOUR STAY AND FEEL FREE TO CONTACT ME FOR ANY PROJECTS OR OPPORTUNITIES. ",
  });

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]',
    );
    [...tooltipTriggerList].forEach(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl),
    );
  }, []);

  let [aboutMeAlreadyTyped, setAboutMeAlreadyTyped] = useState(0);
  let [navbarSelectedIndex, setNavbarSelectedIndex] = useState(-1);

  // Auto-open first tab after delay on page load
  const delayBeforeAutoOpen = 1500;
  useEffect(() => {
    const timer = setTimeout(() => {
      setNavbarSelectedIndex(0);
    }, delayBeforeAutoOpen);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavbarContext.Provider
      value={{
        selectedIndex: navbarSelectedIndex,
        setSelectedIndex: setNavbarSelectedIndex,
      }}
    >
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
            {glyphsText}
            {glyphsText}
          </div>
        </div>
        <div className="right-side-glyphs-container">
          <div className="right-side-glyphs">
            {glyphsText}
            {glyphsText}
          </div>
        </div>
        <div className="main-container">
          <CharacterPreviewer />

          <Navbar
            selectedIndex={navbarSelectedIndex}
            setSelectedIndex={setNavbarSelectedIndex}
            childrenList={[
              {
                tabChildren: tr({ fr: "À propos", en: "About Me" }),
                contentChildren: [
                  <AboutMe
                    alreadyTyped={aboutMeAlreadyTyped}
                    handleTotalCharsTyped={setAboutMeAlreadyTyped}
                  />,
                ],
              },
              {
                tabChildren: tr({ fr: "Projets", en: "Projects" }),
                contentChildren: [
                  <MapsAndCards />,
                  <PortfolioWebsite />,
                  <Citadel />,
                  <UIToolkit />,
                  <AllHandsOnDeck />,
                  <GamificationRiderPlugin />,
                  <ProjectCard
                    projectTitle="Guignol Bagnole"
                    projectDescription={tr({
                      fr: "Un petit jeu de course réalisé pendant la GMTK Game Jam 2025.",
                      en: "A small racing game made during the GMTK Game Jam 2025.",
                    })}
                    projectKeywords={["Unreal Engine"]}
                  />,
                ],
              },
              {
                tabChildren: tr({ fr: "Compétences", en: "Skills" }),
                contentChildren: <TechnicalSkillTree />,
                contentStyle: { height: "100%", overflowY: "hidden" },
              },
              {
                tabChildren: tr({ fr: "CV & Liens", en: "Resume & Links" }),
                contentChildren: <ResumeNLinks />,
              },
            ]}
          />
        </div>
      </div>
    </NavbarContext.Provider>
  );
}

export default App;
