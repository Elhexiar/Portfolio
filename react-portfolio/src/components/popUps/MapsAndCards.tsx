import ProjectCard from "../ProjectCard";
import Keyword from "../Keyword";

// Preload images
const mainArtImg = new Image();
mainArtImg.src = "/m&c-main-art.png";
const gameplayImg = new Image();
gameplayImg.src = "/mnc-gameplay-preview.gif";

function MapsAndCards() {
  return (
    <ProjectCard
      projectTitle="Maps & Cards"
      projectDescription="Card game with autobattler mechanics, final year project."
      projectKeywords={["Unreal Engine", "C++", "BP", "Software Architecture"]}
      projectImage="/m&c.png"
      projectPopUpContent={
        <div>
          <h2>Maps & Cards</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "10px",
            }}
          >
            <img
              src="/m&c-main-art.png"
              alt="Maps & Cards Game main art"
              style={{
                maxWidth: "200px",
                height: "300px",
                objectFit: "contain",
              }}
              draggable={false}
            ></img>
            <div>
              <Keyword keyword="Unreal Engine" /> <Keyword keyword="C++" />
              <Keyword keyword="Blueprints" />
              <Keyword keyword="Software Architecture" />
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NjxNnqTcHhg?si=FCrUa5dWJ8v1mt1T&amp;controls=0&autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p
            style={{
              paddingBottom: "15px",
              marginBottom: "5px",
              fontSize: "1.25em",
            }}
          >
            Maps & Cards is a card game with autobattler mechanics developed as
            a year-end project. It features strategic gameplay where players
            build decks and compete against each other using unique cards and
            abilities.
          </p>

          <h3
            style={{ paddingBottom: "5px", borderBottom: "#61ffff 1px solid" }}
          >
            Context
          </h3>
          <p
            style={{
              paddingBottom: "15px",
              marginBottom: "5px",
            }}
          >
            Developed as my final year project in a team of 10 over 8 months,
            Maps & Cards was created to showcase our skills in game development
            and software architecture using Unreal Engine. My primary role was
            the lead programmer, responsible for designing and implementing key
            gameplay systems.
          </p>
          <img
            src="/mnc-gameplay-preview.gif"
            alt="Maps & Cards Game gameplay screenshot"
            style={{
              maxWidth: "600px",
              height: "250px",
              objectFit: "contain",
            }}
            draggable={false}
          ></img>

          <h3
            style={{ paddingBottom: "5px", borderBottom: "#61ffff 1px solid" }}
          >
            Responsibilities
          </h3>
          <ul>
            <li>
              <h5>Software Architecture</h5>
              <p style={{ paddingLeft: "15px" }}>
                <p style={{ marginBottom: "5px" }}>
                  - Designed the overall software architecture to ensure
                  modularity, scalability, and maintainability of the codebase.
                </p>
                <p style={{ marginBottom: "5px" }}>
                  - Creating systems with clear interfaces to facilitate
                  teamwork Creating systems with clear interfaces to facilitate
                  teamwork and parallel development.
                </p>
              </p>
            </li>
            <li>
              <h5>Gameplay Programmer & Prototyping</h5>
              <p style={{ paddingLeft: "15px" }}>
                <p style={{ marginBottom: "5px" }}>
                  - Prototyping core gameplay mechanics to validate design
                  concepts.
                </p>
                <p style={{ marginBottom: "5px" }}>
                  - Creating gameplay systems such as card management, Real time
                  Unit controls, AI and overall 3C.
                </p>
              </p>
            </li>
            <li>
              <h5>Optimisation</h5>
              <p style={{ paddingLeft: "15px" }}>
                <p style={{ marginBottom: "5px" }}>
                  - Keeping the scope of features in check with the Game
                  Designers, to ensure a feasable development timeline.
                </p>
                <p style={{ marginBottom: "5px" }}>
                  - Developing systems with performance in mind from the start.
                </p>
                <p style={{ marginBottom: "5px" }}>
                  - Regularly profiling the game to identify and address
                  performance bottlenecks.
                </p>
                <p style={{ marginBottom: "5px" }}>
                  - Managing the rest of the team to ensure best practices are
                  followed in term of performance optimization.
                </p>
              </p>
            </li>
          </ul>

          <h3
            style={{ paddingBottom: "5px", borderBottom: "#61ffff 1px solid" }}
          >
            Breakdown
          </h3>
          <p>
            For a more detailed breakdown of my contributions to Maps & Cards,
            please visit my{" "}
            <a
              href="https://github.com/Elhexiar/Elhexiar/blob/main/MySkills/UnrealSpecificSkills.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile ( Still under construction )
            </a>
            .
          </p>
        </div>
      }
    />
  );
}

export default MapsAndCards;
