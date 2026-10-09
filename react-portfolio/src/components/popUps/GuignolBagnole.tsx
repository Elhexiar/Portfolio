import ProjectCard from "../ProjectCard";
import Keyword from "../Keyword";
import { useLanguage } from "../../i18n";

const projectPreviewArt = new Image();
projectPreviewArt.src = "/GB/logo.png";

function GuignolBagnole() {
  const { tr } = useLanguage();

  const imageStyle = {
    maxHeight: "300px",
    objectFit: "contain" as const,
    border: "1px solid",
    borderColor: "var(--default-border-color)",
    marginBottom: "15px",
  };
  const sectionTitleStyle = {
    paddingBottom: "5px",
    borderBottom: "var(--default-border-color) 1px solid",
  };

  return (
    <ProjectCard
      projectTitle="Guignol Bagnole"
      projectDescription={tr({
        fr: "Un petit jeu de course réalisé pendant la GMTK Game Jam 2025.",
        en: "A small racing game made during the GMTK Game Jam 2025.",
      })}
      projectKeywords={["Unreal Engine", "Game Jam"]}
      projectImage={projectPreviewArt.src}
      projectPopUpContent={
        <div>
          <h2>Guignol Bagnole</h2>
          <div style={{ marginBottom: "5px" }}>
            <Keyword keyword="Unreal Engine" />
            <Keyword keyword="Game Jam" />
          </div>
          <a
            href="https://claude-blanchet-babin.itch.io/guignol-bagnole"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            {tr({ fr: "Lien itch.io", en: "Itch.io link" })}
          </a>

          <p
            style={{
              paddingBottom: "15px",
              marginBottom: "5px",
              fontSize: "1.25em",
            }}
          >
            {tr({
              fr: "Guignol Bagnole est un jeu de course réalisé pendant la GMTK Game Jam 2025. Au volant d'une petite voiture jouet, on fonce à travers une chambre d'enfant géante pour battre le chrono, en ramassant de l'argent à dépenser dans une boutique d'améliorations.",
              en: "Guignol Bagnole is a racing game made during the GMTK Game Jam 2025. Driving a tiny toy car, you rush through a giant kid's bedroom to beat the clock, collecting money to spend in an upgrade shop.",
            })}
          </p>
          <img
            src="/GB/FPV.webp"
            alt={tr({
              fr: "Capture de gameplay de Guignol Bagnole",
              en: "Guignol Bagnole gameplay screenshot",
            })}
            style={imageStyle}
            draggable={false}
          />

          <h3 style={sectionTitleStyle}>
            {tr({ fr: "Mon rôle", en: "My role" })}
          </h3>
          <p>
            {tr({
              fr: "J'étais l'unique programmeur de l'équipe : toute la partie code du jeu est passée par moi, de la conduite de la voiture au chrono, en passant par le système d'argent, la boutique et l'interface.",
              en: "I was the only programmer of the team : all the code of the game went through me, from the car driving to the timer, the money system, the shop and the UI.",
            })}
          </p>
          <img
            src="/GB/Shop.webp"
            alt={tr({
              fr: "Boutique d'améliorations de Guignol Bagnole",
              en: "Guignol Bagnole upgrade shop",
            })}
            style={imageStyle}
            draggable={false}
          />
          <p>
            {tr({
              fr: "La boutique propose trois améliorations : un boost, un saut et une arme. Le tout devait tenir dans les délais très courts d'une game jam, ce qui demande de bien choisir ses priorités !",
              en: "The shop offers three upgrades : a boost, a jump and a weapon. All of it had to fit in the very short time of a game jam, which means picking your priorities carefully !",
            })}
          </p>
        </div>
      }
    />
  );
}

export default GuignolBagnole;
