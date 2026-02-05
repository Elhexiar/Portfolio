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
          <p>
            One of the apps we developed was a Serious Game for the tourism
            office of Rennes, It has geolocalisation and different game
            mechanics to ensure visitors pay attention to the monuments.
          </p>
          <img
            src="/enki-quizz.png"
            alt="Serious Game for Rennes Tourism Office"
            style={{
              maxHeight: "300px",
              objectFit: "contain",
              marginBottom: "15px",
            }}
            draggable={false}
          ></img>
          <p>
            I developped multiple UI Systems for it such as a Quizz System that
            could be called from anywhere in the app with an easy way to create
            the quizz data, I did the same for custom in-game notifications that
            needed to be way more customizable and more "invasive" in term of UX
            to ensure the player would get important informations during the
            game.
          </p>
          <img
            src="/enki-notification.png"
            alt="Custom in-game notification system placeholder image"
            style={{
              maxHeight: "300px",
              objectFit: "contain",
              marginBottom: "15px",
            }}
            draggable={false}
          ></img>

          <h3
            style={{ paddingBottom: "5px", borderBottom: "#61ffff 1px solid" }}
          >
            Breakdown
          </h3>
          <p>
            As it was an internship, I am not able to share the codebase but I
            can share some of the systems I developed and the thought process
            behind them in more details if you are interested.
          </p>
        </div>
      }
    />
  );
}

export default UIToolkit;
