import ProjectCard from "../ProjectCard";
import Keyword from "../Keyword";
import { useLanguage } from "../../i18n";

const projectPreviewArt = new Image();
projectPreviewArt.src = "/no-hands-on-deck-cover-art.png";

function AllHandsOnDeck() {
  const { tr } = useLanguage();

  return (
    <ProjectCard
      projectTitle="All Hands On Deck"
      projectDescription={tr({
        fr: "Un petit jeu de réflexion où il faut s'échapper d'un porte-avions en train de couler",
        en: "A small puzzle game where you try to escape a sinking aircraft carrier",
      })}
      projectKeywords={["Unity", "C#"]}
      projectImage={projectPreviewArt.src}
      projectPopUpContent={
        <div>
          <h2>All Hands On Deck</h2>
          <img
            src="/ahod0.png"
            alt={tr({
              fr: "Capture d'écran de All Hands On Deck",
              en: "All Hands On Deck Screenshot",
            })}
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
            {tr({ fr: "Dépôt GitHub", en: "Github Repository" })}
          </a>
          <br />
          <a
            href="https://claude-blanchet-babin.itch.io/no-hands-on-deck"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            {tr({ fr: "Lien itch.io", en: "Itch.io link" })}
          </a>

          <p>
            {tr({
              fr: "All Hands On Deck est un petit jeu de réflexion que j'ai développé avec d'autres étudiants en Unity et C#. Il se déroule sur un porte-avions en train de couler : le joueur doit traverser différentes salles et résoudre des énigmes pour s'échapper.",
              en: "All Hands On Deck is a small puzzle game I developed with other students using Unity and C#. The game is set on a sinking aircraft carrier, and the player must navigate through various rooms and solve puzzles to escape.",
            })}
          </p>
          <p
            style={{
              borderBottom: "1px solid",
              borderColor: "var(--default-border-color)",
              paddingBottom: "10px",
            }}
          >
            {tr({
              fr: "Nous étions une petite équipe répartie entre une équipe artistique et une équipe de programmation. Je faisais partie du binôme de programmeurs : j'ai implémenté les mécaniques de jeu, la plupart des énigmes et les contrôles du joueur. Nous utilisions Git pour le versioning et travaillions en étroite collaboration avec l'équipe artistique pour que le jeu soit cohérent visuellement et dans ses sensations. Nous n'avions que quelques semaines pour concevoir et développer le jeu, tout en suivant nos autres cours.",
              en: "We were a small team divided into an art team and a programming team. I was part of the programming team of two, where I worked on implementing the game mechanics, most of the puzzles, and player controls. We used Git for version control and collaborated closely with the art team to ensure that the game looked and felt cohesive. We only had a few weeks to both design and implement the game, all while still balancing our other coursework.",
            })}
          </p>
          <h4>{tr({ fr: "Programmation gameplay", en: "Gameplay Programming" })}</h4>
          <p>
            {tr({
              fr: "J'étais en charge de l'architecture et des systèmes de jeu principaux. Je n'étais pas responsable des 3C au départ, mais j'ai pris l'initiative de les réécrire après les retours des sessions de playtest : un schéma de contrôle plus intuitif et un meilleur contrôleur de caméra.",
              en: "I was in charge of the architecture and core gameplay systems, while not initially in charge of the 3C I took it upon myself to rewrite it after feedbacks from playtesting sessions. This involved creating a more intuitive control scheme, and a better camera controller.",
            })}
          </p>
          <img
            src="/ahod2.png"
            alt={tr({
              fr: "Capture d'écran 2 de All Hands On Deck",
              en: "All Hands On Deck Screenshot 2",
            })}
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
            {tr({
              fr: "Chacun de nous devait aussi concevoir une énigme. J'ai conçu celle de la porte, une introduction simple aux mécaniques du jeu. Commencer par une énigme simple m'a permis de l'implémenter rapidement, puis d'aider les autres sur les leurs, potentiellement plus complexes.",
              en: "Additionally we were each assigned a specific puzzle to design, I designed the door puzzle as a simple introduction to the game mechanics. Plus having to design and implement a more simple puzzle at the start meant i could quickly implement it and then help the others with their potentially more complex ones.",
            })}
          </p>
          <h4>{tr({ fr: "Sound design", en: "Sound Design" })}</h4>
          <p>
            {tr({
              fr: "Personne d'autre ne s'étant proposé, j'ai pris l'initiative de faire le sound design du jeu. C'était ma première fois : j'ai utilisé des banques de sons libres pour créer les effets sonores, en cherchant à installer une ambiance claustrophobique. Même si c'était très précipité, avec seulement quelques heures pour le faire, je trouve que le résultat est correct vu les circonstances.",
              en: "Having no one else step up to do it I took the initiative to sound design the game. It was my first time doing sound design, and I used free sound libraries to create the sound effects for the game where i focused on making a claustrophobic ambiance. Even though it was really rushed in as I had only a few hours to do it I think given the circumstances it turned out fine.",
            })}
          </p>
          <img
            src="/ahod1.png"
            alt={tr({
              fr: "Capture d'écran 3 de All Hands On Deck",
              en: "All Hands On Deck Screenshot 3",
            })}
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
            {tr({ fr: "Conclusion", en: "Conclusion" })}
          </h4>
          <p>
            {tr({
              fr: "Ce projet a été très formateur : j'ai dû travailler en étroite collaboration avec une petite équipe pour créer un jeu complet en peu de temps. Il m'a appris l'importance de la communication, de la collaboration et de la gestion du temps sur des délais serrés. C'était aussi ma première expérience avec les outils et méthodes d'organisation modernes du développement de jeux.",
              en: "Overall this project was a great learning experience for me, as I had to work closely with a small team to create a complete game in a short amount of time. It taught me the importance of communication, collaboration, and time management in game development on tight deadlines. It was also my first experience with modern game dev organization tools and methods.",
            })}
          </p>
        </div>
      }
    />
  );
}

export default AllHandsOnDeck;
