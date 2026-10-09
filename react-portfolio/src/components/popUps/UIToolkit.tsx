import ProjectCard from "../ProjectCard";
import Keyword from "../Keyword";
import { useLanguage } from "../../i18n";

const projectPreviewArt = new Image();
projectPreviewArt.src = "/ui-icon.png";

function UIToolkit() {
  const { tr } = useLanguage();

  return (
    <ProjectCard
      projectTitle={tr({
        fr: "Stage Enki Digital : AR & UI",
        en: "Enki Digital Internship : AR & UI",
      })}
      projectDescription={tr({
        fr: "Applications mobiles en réalité augmentée pour l'Office de Tourisme de Rennes et le Stade Rennais, et systèmes d'interface UI Toolkit.",
        en: "Augmented reality mobile apps for the Rennes Tourism Office and Stade Rennais, and UI Toolkit interface systems.",
      })}
      projectKeywords={["Unity", "C#", "AR Foundation", "UIToolkit"]}
      projectImage={projectPreviewArt.src}
      projectPopUpContent={
        <div>
          <h2>
            {tr({
              fr: "Stage Enki Digital : AR & UI",
              en: "Enki Digital Internship : AR & UI",
            })}
          </h2>
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
              alt={tr({
                fr: "Illustration des systèmes UI Toolkit",
                en: "UI Toolkit Systems main art",
              })}
              style={{
                maxHeight: "300px",
                objectFit: "contain",
              }}
              draggable={false}
            ></img>
            <div>
              <Keyword keyword="Unity" />
              <Keyword keyword="C#" />
              <Keyword keyword="AR Foundation" />
              <Keyword keyword="UIToolkit" />
              <Keyword keyword="iOS / Android" />
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
              fr: "Pendant mon stage de 2 mois chez ENKI Digital (Pacé), j'ai travaillé sur des applications mobiles en réalité augmentée pour l'Office de Tourisme de Rennes et le Stade Rennais, et développé un ensemble de systèmes et d'outils d'interface pour l'UIToolkit de Unity.",
              en: "During my 2 months internship at ENKI Digital (Pacé, near Rennes), I worked on augmented reality mobile apps for the Rennes Tourism Office and Stade Rennais, and developed a collection of UI systems and tools for Unity's UIToolkit.",
            })}
          </p>

          <h3
            style={{ paddingBottom: "5px", borderBottom: "#61ffff 1px solid" }}
          >
            {tr({ fr: "Réalité augmentée", en: "Augmented Reality" })}
          </h3>
          <p>
            {tr({
              fr: "J'ai fait de la R&D et de l'intégration avec AR Foundation pour superposer des objets 3D dans l'environnement réel, sur iOS et Android. Le studio a malheureusement fermé pendant mon stage, mais c'est un domaine dans lequel j'aimerais beaucoup continuer !",
              en: "I did R&D and integration with AR Foundation to overlay 3D objects in the real environment, on iOS and Android. Sadly the studio closed during my internship, but it's a field I would love to keep working in !",
            })}
          </p>

          <h3
            style={{ paddingBottom: "5px", borderBottom: "#61ffff 1px solid" }}
          >
            {tr({ fr: "Systèmes UI Toolkit", en: "UI Toolkit Systems" })}
          </h3>
          <p
            style={{
              paddingBottom: "15px",
              marginBottom: "5px",
            }}
          >
            {tr({
              fr: "Pendant ce stage chez ENKI Digital, j'ai travaillé sur plusieurs projets utilisant l'UI Toolkit, en reprenant le travail de stagiaires précédents. J'ai vite remarqué que beaucoup de systèmes d'interface étaient désorganisés, avec beaucoup de code dupliqué, et surtout un code très difficile à lire faute de systèmes et de fonctions bien structurés.",
              en: "During this internship at ENKI Digital I was tasked on working on multiple projects that used the UI Toolkit. On these projects i would continue the work of previous interns. I quickly noticed that a lot of the UI systems were unorganized with a lot of reused code and most strikingly a really difficult to read codebase due to lack of comprehensive systems, function etc...",
            })}
          </p>
          <p>
            {tr({
              fr: "Pour y remédier, j'ai créé plusieurs systèmes et outils d'interface pour simplifier le développement sur les projets en cours et à venir : un système de navigation, un système de notifications, un système de data binding et divers utilitaires pour les tâches courantes.",
              en: "To adress these issues I created multiple UI systems and tools to help streamline the UI development process for current and future projects. These systems included a UI Navigation System, a Notification System, a Data Binding System and various utility tools to help with common UI tasks.",
            })}
          </p>
          <p>
            {tr({
              fr: "J'ai aussi mis en place une gestion de la localisation, qui n'existait pas jusque-là.",
              en: "I also added better systems to handle localization which was until then non-existent.",
            })}
          </p>
          <p>
            {tr({
              fr: "L'une des applications développées était un Serious Game pour l'Office de Tourisme de Rennes, avec de la géolocalisation et différentes mécaniques de jeu pour inciter les visiteurs à prêter attention aux monuments.",
              en: "One of the apps we developed was a Serious Game for the tourism office of Rennes, It has geolocalisation and different game mechanics to ensure visitors pay attention to the monuments.",
            })}
          </p>
          <img
            src="/enki-quizz.png"
            alt={tr({
              fr: "Serious Game pour l'Office de Tourisme de Rennes",
              en: "Serious Game for Rennes Tourism Office",
            })}
            style={{
              maxHeight: "300px",
              objectFit: "contain",
              marginBottom: "15px",
            }}
            draggable={false}
          ></img>
          <p>
            {tr({
              fr: "J'ai développé plusieurs systèmes d'interface pour cette application, comme un système de quiz appelable depuis n'importe où dans l'appli, avec une manière simple de créer les données des quiz. J'ai fait de même pour des notifications en jeu personnalisées, qui devaient être beaucoup plus configurables et plus « visibles » côté UX, pour que le joueur reçoive bien les informations importantes pendant la partie.",
              en: 'I developed multiple UI Systems for it such as a Quizz System that could be called from anywhere in the app with an easy way to create the quizz data, I did the same for custom in-game notifications that needed to be way more customizable and more "invasive" in term of UX to ensure the player would get important informations during the game.',
            })}
          </p>
          <img
            src="/enki-notification.png"
            alt={tr({
              fr: "Système de notifications en jeu personnalisées",
              en: "Custom in-game notification system placeholder image",
            })}
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
            {tr({ fr: "Détails", en: "Breakdown" })}
          </h3>
          <p>
            {tr({
              fr: "S'agissant d'un stage, je ne peux pas partager le code, mais je peux présenter plus en détail certains des systèmes que j'ai développés et la réflexion derrière, si cela vous intéresse.",
              en: "As it was an internship, I am not able to share the codebase but I can share some of the systems I developed and the thought process behind them in more details if you are interested.",
            })}
          </p>
        </div>
      }
    />
  );
}

export default UIToolkit;
