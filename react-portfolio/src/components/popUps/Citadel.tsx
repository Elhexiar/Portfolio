import ProjectCard from "../ProjectCard";
import Keyword from "../Keyword";

function Citadel() {
  return (
    <ProjectCard
      projectTitle="Citadel"
      projectDescription="Citadel is a browser-based tower defense plateformer i made to test gameplay concepts."
      projectKeywords={["JavaScript", "Phaser"]}
      projectImage="/citadel-title.png"
      projectPopUpContent={
        <div>
          <h2>Citadel</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "10px",
            }}
          >
            <img
              src="/citadel-main-art.png"
              alt="Citadel Game main art"
              style={{
                maxHeight: "300px",
                objectFit: "contain",
              }}
              draggable={false}
            ></img>
            <div>
              <Keyword keyword="JavaScript" />
              <Keyword keyword="Phaser" />
            </div>
          </div>
          <p
            style={{
              paddingBottom: "15px",
              marginBottom: "5px",
              fontSize: "1.25em",
            }}
          >
            Citadel is a browser-based tower defense plateformer i made to test
            gameplay concepts. You will need to defend your base from waves of
            enemies by building towers and mining ressources in the underground
            in between waves.
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
            Developed for an assignement, I already had enough to pass the class
            so I decided to use this project to experiment with gameplay ideas I
            had in mind for a while. The idea of mixing tower defense and
            platforming intrigued me, I wanted to see if i could implement those
            mechanics.
          </p>
          <img
            src="/citadel-gameplay-preview.gif"
            alt="Citadel Game gameplay screenshot"
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
            Breakdown
          </h3>
          <p>
            For a more detailed breakdown of Citadel, please visit my{" "}
            <a
              href="https://github.com/Elhexiar/phaser-plateformer-citadel"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo ( Still under construction )
            </a>
            .
          </p>
        </div>
      }
    />
  );
}

export default Citadel;
