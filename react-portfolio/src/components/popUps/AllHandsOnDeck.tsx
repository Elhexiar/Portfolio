import ProjectCard from "../ProjectCard";
import Keyword from "../Keyword";

const projectPreviewArt = new Image();
projectPreviewArt.src = "/no-hands-on-deck-cover-art.png";

function AllHandsOnDeck() {
  return (
    <ProjectCard
      projectTitle="All Hands On Deck"
      projectDescription="A small puzzle game where you try to escape a sinking aircraft carrier"
      projectKeywords={["Unity", "C#"]}
      projectImage={projectPreviewArt.src}
      projectPopUpContent={
        <div>
          <h2>All Hands On Deck</h2>
          <img
            src="/ahod0.png"
            alt="All Hands On Deck Screenshot"
            style={{
              marginBottom: "15px",
              maxHeight: "250px",
              objectFit: "contain",
              border: "1px solid",
              borderColor: "var(--default-border-color)",
            }}
          />
          <div style={{ marginBottom: "5px" }}>
            <Keyword keyword="Unity" />
            <Keyword keyword="C#" />
          </div>

          <a
            href="https://github.com/Elhexiar/PS4_PTI_MGMBBF/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            Github Repository
          </a>
          <br />
          <a
            href="https://claude-blanchet-babin.itch.io/no-hands-on-deck"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            Itch.io link
          </a>

          <p>
            All Hands On Deck is a small puzzle game I developed with other
            students using Unity and C#. The game is set on a sinking aircraft
            carrier, and the player must navigate through various rooms and
            solve puzzles to escape.
          </p>
          <p
            style={{
              borderBottom: "1px solid",
              borderColor: "var(--default-border-color)",
              paddingBottom: "10px",
            }}
          >
            We were a small team divided into an art team and a programming
            team. I was part of the programming team of two, where I worked on
            implementing the game mechanics,most of the puzzles, and player
            controls. We used Git for version control and collaborated closely
            with the art team to ensure that the game looked and felt cohesive.
            We only had a few weeks to both design and implement the game, all
            while still balancing our other coursework.
          </p>
          <h4>Gameplay Programming</h4>
          <p>
            I was in charge of the architecture and core gameplay systems, while
            not initially in charge of the 3C I took it upon myself to rewrite
            it after feedbacks from playtesting sessions. This involved creating
            a more intuitive control scheme, and a better camera controller.
          </p>
          <img
            src="/ahod2.png"
            alt="All Hands On Deck Screenshot 2"
            style={{
              marginBottom: "5px",
              marginTop: "5px",
              maxHeight: "250px",
              border: "1px solid",
              borderColor: "var(--default-border-color)",
            }}
          />
          <p
            style={{
              borderBottom: "1px solid",
              borderColor: "var(--default-border-color)",
              paddingBottom: "10px",
            }}
          >
            Additionally we were each assigned a specific puzzle to design, I
            designed the door puzzle as a simple introduction to the game
            mechanics. Plus having to design and implement a more simple puzzle
            at the start meant i could quickly implement it and then help the
            others with their potentially more complex ones.
          </p>
          <h4>Sound Design</h4>
          <p>
            Having no one else step up to do it I took the initiative to sound
            design the game. It was my first time doing sound design, and I used
            free sound libraries to create the sound effects for the game where
            i focused on making a claustrophobic ambiance. Even though it was
            really rushed in as I had only a few hours to do it I think given
            the circumstances it turned out fine.
          </p>
          <img
            src="/ahod1.png"
            alt="All Hands On Deck Screenshot 3"
            style={{
              marginBottom: "15px",
              marginTop: "5px",
              maxHeight: "250px",
              border: "1px solid",
              borderColor: "var(--default-border-color)",
            }}
          />
          <h4
            style={{
              borderTop: "1px solid",
              borderTopColor: "var(--default-border-color)",
              paddingBottom: "10px",
            }}
          >
            Conclusion
          </h4>
          <p>
            Overall this project was a great learning experience for me, as I
            had to work closely with a small team to create a complete game in a
            short amount of time. It taught me the importance of communication,
            collaboration, and time management in game development on tight
            deadlines. It was also my first experience with modern game dev
            organization tools and methods.
          </p>
        </div>
      }
    />
  );
}

export default AllHandsOnDeck;
