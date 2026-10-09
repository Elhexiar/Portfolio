import ProjectCard from "../ProjectCard";
import Keyword from "../Keyword";
import { useLanguage } from "../../i18n";

const projectPreviewArt = new Image();
projectPreviewArt.src = "/borneflash-icon.svg";

// TODO : add screenshots and the front-end part once the project is finished (november 2026)
function BorneFlash() {
  const { tr } = useLanguage();

  const sectionTitleStyle = {
    paddingBottom: "5px",
    borderBottom: "var(--default-border-color) 1px solid",
  };

  return (
    <ProjectCard
      projectTitle="BorneFlash"
      projectDescription={tr({
        fr: "Logiciel de gestion de bornes de recharge pour véhicules électriques, projet d'équipe en cours à l'AFPA.",
        en: "Management software for electric vehicle charging stations, ongoing team project at AFPA.",
      })}
      projectKeywords={["Java", "Spring Boot", "PostgreSQL", "Merise"]}
      projectImage={projectPreviewArt.src}
      projectPopUpContent={
        <div>
          <h2>BorneFlash</h2>
          <div style={{ marginBottom: "5px" }}>
            <Keyword keyword="Java" />
            <Keyword keyword="Spring Boot" />
            <Keyword keyword="PostgreSQL" />
            <Keyword keyword="Merise" />
            <Keyword keyword="UML" />
            <Keyword keyword={tr({ fr: "En cours", en: "In progress" })} />
          </div>
          <p
            style={{
              paddingBottom: "15px",
              marginBottom: "5px",
              fontSize: "1.25em",
            }}
          >
            {tr({
              fr: "BorneFlash est un logiciel de gestion de bornes de recharge pour voitures électriques, avec frontend, backend et base de données, développé dans un contexte client réel pendant ma formation CDA à l'AFPA de Brest.",
              en: "BorneFlash is a management software for electric car charging stations, with a frontend, a backend and a database, developed for a real client context during my CDA training at AFPA Brest.",
            })}
          </p>

          <h3 style={sectionTitleStyle}>
            {tr({ fr: "Contexte", en: "Context" })}
          </h3>
          <p>
            {tr({
              fr: "On travaille à 7 sur ce projet, qui sera terminé d'ici novembre 2026. Chacun a d'abord réalisé sa propre conception de l'application, puis on a sélectionné une conception fédératrice pour l'implémenter en groupe. La documentation et les tests se font en continu tout au long du projet.",
              en: "We are a team of 7 on this project, which will be finished by November 2026. Each of us first designed the application on our own, then we picked a unifying design to implement as a group. Documentation and tests are done continuously throughout the project.",
            })}
          </p>

          <h3 style={sectionTitleStyle}>
            {tr({ fr: "Mon rôle", en: "My role" })}
          </h3>
          <ul>
            <li>
              <h5>
                {tr({
                  fr: "Conception de la base de données",
                  en: "Database design",
                })}
              </h5>
              <p style={{ paddingLeft: "15px" }}>
                {tr({
                  fr: "Je suis responsable d'une partie de la conception de la base de données PostgreSQL.",
                  en: "I am responsible for part of the PostgreSQL database design.",
                })}
              </p>
            </li>
            <li>
              <h5>
                {tr({
                  fr: "Backend Spring Boot",
                  en: "Spring Boot backend",
                })}
              </h5>
              <p style={{ paddingLeft: "15px" }}>
                {tr({
                  fr: "Je conçois et j'intègre une partie du backend, notamment les couches Service et Repository.",
                  en: "I design and integrate part of the backend, especially the Service and Repository layers.",
                })}
              </p>
            </li>
          </ul>

          <h3 style={sectionTitleStyle}>
            {tr({ fr: "À venir", en: "Coming next" })}
          </h3>
          <p>
            {tr({
              fr: "La partie front-end n'a pas encore commencé. Je mettrai cette page à jour avec des captures d'écran une fois le projet terminé !",
              en: "The front-end part hasn't started yet. I'll update this page with screenshots once the project is done !",
            })}
          </p>
        </div>
      }
    />
  );
}

export default BorneFlash;
