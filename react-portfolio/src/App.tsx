import CharacterPreviewer from "./components/CharacterPreviewer";
import "./App.css";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import MapsAndCards from "./components/popUps/MapsAndCards";
import PortfolioWebsite from "./components/popUps/PortfolioWebsite";

function App() {
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
                />,
                <ProjectCard
                  projectTitle="UI Toolkit Systems"
                  projectDescription="A collection of UI systems and tools for UIToolkit I made during an internship."
                  projectKeywords={["Unity", "C#", "UIToolkit"]}
                />,
              ],
            },
            {
              tabChildren: "Skills",
              contentChildren: <div>Content for Skills</div>,
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
