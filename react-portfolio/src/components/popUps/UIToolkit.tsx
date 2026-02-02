import ProjectCard from "../ProjectCard";
import Keyword from "../Keyword";

function UIToolkit() {
  return (
    <ProjectCard
      projectTitle="UI Toolkit Systems"
      projectDescription="During an internship, I developed a collection of UI systems and tools for Unity's UIToolkit."
      projectKeywords={["Unity", "C#", "UIToolkit"]}
      projectImage="/ui-icon.png"
      projectPopUpContent={
        <div>
          <h2>UI Toolkit Systems</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: "10px",
            }}
          >
            <img
              src="/ui-icon.png"
              alt="UI Toolkit Systems main art"
              style={{
                maxHeight: "300px",
                objectFit: "contain",
              }}
              draggable={false}
            ></img>
            <div>
              <Keyword keyword="Unity" />
              <Keyword keyword="C#" />
              <Keyword keyword="UIToolkit" />
            </div>
          </div>
          <p
            style={{
              paddingBottom: "15px",
              marginBottom: "5px",
              fontSize: "1.25em",
            }}
          >
            During my 2 months internship at ENKI Digital, I developed a
            collection of UI systems and tools for Unity's UIToolkit to
            streamline UI development processes.
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
            During this internship at ENKI Digital I was tasked on working on
            multiple projects that used the UI Toolkit. On these projects i
            would continue the work of previous interns. I quicly noticed that a
            lot of the UI systems were unorganized with a lot of reused code and
            most stikingly a really difficult to read codebase due to lack of
            comprehensive systems, function etc...
          </p>
          <p>
            To adress these issues I created multiple UI systems and tools to
            help streamline the UI development process for current and future
            projects. These systems included a UI Navigation System, a
            Notification System, a Data Binding System and various utility tools
            to help with common UI tasks.
          </p>
          <p>
            I also added better systems to handle localization which was until
            then non-existent.
          </p>

          <h3
            style={{ paddingBottom: "5px", borderBottom: "#61ffff 1px solid" }}
          >
            Breakdown
          </h3>
          <p>
            For a more detailed breakdown of UI Toolkit Systems, please visit my{" "}
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

export default UIToolkit;
