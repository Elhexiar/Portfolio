import ProjectCard from "../ProjectCard";
import Keyword from "../Keyword";

const mainArtImg = new Image();
mainArtImg.src = "/rider.png";

function GamificationRiderPlugin() {
  return (
    <ProjectCard
      projectTitle="Gamification Rider Plugin"
      projectDescription="A plugin to add gamification elements to the Rider IDE."
      projectKeywords={[ "Kotlin", "Rider", "IDE Plugin"]}
      projectImage={mainArtImg.src}
      projectPopUpContent={
        <div>
          <h2>Gamification Rider Plugin</h2>
          <Keyword keyword="Kotlin" />
          <Keyword keyword="Rider" />
          <Keyword keyword="IDE Plugin" />
          
          <p>
            This project is a plugin I just started developing for the JetBrains Rider IDE to add gamification elements
            to the coding experience. It is inspired by the "Ridiculous Coding" plugin for Visual Studio Code,
            and I wanted to create a similar experience for when i use Rider. ( it was also a good excuse to get into developing plugins )
          </p>

          <p style={{
              paddingBottom: "5px",
              borderBottom: "var(--default-border-color) 1px solid",
              }}>
            For now the plugin only handles an xp system that rewards the user with experience points for coding, and levels up as they gain xp.
            I am planning to add more features in the future, such as achievements,
            , and more gamification elements to make coding more fun and engaging.
          </p>
          <img
            src="/gamification-picture.png"
            alt="Gamification Rider Plugin preview"
            style={{
              maxHeight: "300px",
              boxShadow: " 0 6px 20px rgba(255, 0, 0, 0.19)",
              
              border: "1px solid",
              borderColor: "var(--default-border-color)",
              marginBottom: "15px",
            }}
            ></img>

          <p style={{
              borderTop: "var(--default-border-color) 1px solid",
              }}>
            I especially would like to implement systems that incentivize things that I want to get better at,
            such as testing more often, or using more advanced features of the IDE, to push myself to improve in those areas.
          </p>

          <p>
            I will make it available on my github once i feel confortable sharing it. For now, if you are interested in trying it out, feel free to reach out to me !
          </p>
          <p>
            I only started developing it recently, so there is not much to show for now, but I am excited to see where this project goes and to share it with others in the future.

          </p>
            
        </div>
      }
    />
  );
}

export default GamificationRiderPlugin;
