import ProjectCard from "../ProjectCard";
import Keyword from "../Keyword";
import { useLanguage } from "../../i18n";

// Preload images
const projectPreviewArt = new Image();
projectPreviewArt.src = "/m&c.png";
const mainArtImg = new Image();
mainArtImg.src = "/m&c-main-art.png";
const gameplayImg = new Image();
gameplayImg.src = "/mnc-gameplay-preview.gif";

function MapsAndCards() {
  const { tr } = useLanguage();

  // one entry per responsibility, each line is a bullet point
  const responsibilities = [
    {
      title: tr({ fr: "Architecture logicielle", en: "Software Architecture" }),
      lines: tr({
        fr: [
          "Conception de l'architecture globale pour garantir la modularité, l'évolutivité et la maintenabilité du code.",
          "Création de systèmes aux interfaces claires pour faciliter le travail en équipe et le développement en parallèle.",
        ],
        en: [
          "Designed the overall software architecture to ensure modularity, scalability, and maintainability of the codebase.",
          "Creating systems with clear interfaces to facilitate teamwork and parallel development.",
        ],
      }),
    },
    {
      title: tr({
        fr: "Programmation gameplay & prototypage",
        en: "Gameplay Programmer & Prototyping",
      }),
      lines: tr({
        fr: [
          "Prototypage des mécaniques principales pour valider les concepts de design.",
          "Création des systèmes de jeu : gestion des cartes, contrôle des unités en temps réel, IA et 3C.",
        ],
        en: [
          "Prototyping core gameplay mechanics to validate design concepts.",
          "Creating gameplay systems such as card management, Real time Unit controls, AI and overall 3C.",
        ],
      }),
    },
    {
      title: tr({ fr: "Optimisation", en: "Optimisation" }),
      lines: tr({
        fr: [
          "Maîtrise du périmètre des fonctionnalités avec les Game Designers, pour garantir un planning de développement réaliste.",
          "Développement des systèmes en pensant aux performances dès le départ.",
          "Profilage régulier du jeu pour identifier et corriger les goulots d'étranglement.",
          "Encadrement du reste de l'équipe pour faire respecter les bonnes pratiques en matière de performances.",
        ],
        en: [
          "Keeping the scope of features in check with the Game Designers, to ensure a feasable development timeline.",
          "Developing systems with performance in mind from the start.",
          "Regularly profiling the game to identify and address performance bottlenecks.",
          "Managing the rest of the team to ensure best practices are followed in term of performance optimization.",
        ],
      }),
    },
  ];

  return (
    <ProjectCard
      projectTitle="Maps & Cards"
      projectDescription={tr({
        fr: "Jeu de cartes avec des mécaniques d'autobattler, projet de fin d'études.",
        en: "Card game with autobattler mechanics, final year project.",
      })}
      projectKeywords={["Unreal Engine", "C++", "BP", "Software Architecture"]}
      projectImage={projectPreviewArt.src}
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
              alt={tr({
                fr: "Illustration principale de Maps & Cards",
                en: "Maps & Cards Game main art",
              })}
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
          </div>
          <p
            style={{
              paddingBottom: "15px",
              marginBottom: "5px",
              fontSize: "1.25em",
            }}
          >
            {tr({
              fr: "Maps & Cards est un jeu de cartes avec des mécaniques d'autobattler, développé comme projet de fin d'année. Son gameplay stratégique demande aux joueurs de construire des decks et de s'affronter avec des cartes et des capacités uniques.",
              en: "Maps & Cards is a card game with autobattler mechanics developed as a year-end project. It features strategic gameplay where players build decks and compete against each other using unique cards and abilities.",
            })}
          </p>

          <h3
            style={{
              paddingBottom: "5px",
              borderBottom: "var(--default-border-color) 1px solid",
            }}
          >
            {tr({ fr: "Contexte", en: "Context" })}
          </h3>
          <p
            style={{
              paddingBottom: "15px",
              marginBottom: "5px",
            }}
          >
            {tr({
              fr: "Développé comme projet de fin d'études par une équipe de 10 personnes pendant 8 mois, Maps & Cards devait démontrer nos compétences en développement de jeux et en architecture logicielle sur Unreal Engine. J'étais lead programmeur, chargé de concevoir et d'implémenter les principaux systèmes de jeu.",
              en: "Developed as my final year project in a team of 10 over 8 months, Maps & Cards was created to showcase our skills in game development and software architecture using Unreal Engine. My primary role was the lead programmer, responsible for designing and implementing key gameplay systems.",
            })}
          </p>
          <img
            src="/mnc-gameplay-preview.gif"
            alt={tr({
              fr: "Capture de gameplay de Maps & Cards",
              en: "Maps & Cards Game gameplay screenshot",
            })}
            style={{
              maxWidth: "600px",
              height: "250px",
              objectFit: "contain",
              border: "1px solid",
              borderColor: "var(--default-border-color)",
            }}
            draggable={false}
          ></img>

          <h3
            style={{
              paddingBottom: "5px",
              borderBottom: "var(--default-border-color) 1px solid",
            }}
          >
            {tr({ fr: "Responsabilités", en: "Responsibilities" })}
          </h3>
          <ul>
            {responsibilities.map((responsibility) => (
              <li key={responsibility.title}>
                <h5>{responsibility.title}</h5>
                <div style={{ paddingLeft: "15px" }}>
                  {responsibility.lines.map((line) => (
                    <p key={line} style={{ marginBottom: "5px" }}>
                      - {line}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <h3
            style={{
              paddingBottom: "5px",
              borderBottom: "var(--default-border-color) 1px solid",
            }}
          >
            {tr({ fr: "Détails", en: "Breakdown" })}
          </h3>
          <p>
            {tr({
              fr: "Pour une présentation plus détaillée de mes contributions à Maps & Cards, rendez-vous sur mon ",
              en: "For a more detailed breakdown of my contributions to Maps & Cards, please visit my ",
            })}
            <a
              href="https://github.com/Elhexiar/Elhexiar/blob/main/MySkills/UnrealSpecificSkills.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              {tr({ fr: "dépôt GitHub", en: "GitHub Repository" })}
            </a>
            .
          </p>
        </div>
      }
    />
  );
}

export default MapsAndCards;
