import ProjectCard from "../ProjectCard";
import Keyword from "../Keyword";
import { useLanguage } from "../../i18n";

const mainArtImg = new Image();
mainArtImg.src = "/front-end-icon.png";

function PortfolioWebsite() {
  const { tr } = useLanguage();

  return (
    <ProjectCard
      projectTitle={tr({ fr: "Site portfolio", en: "Portfolio Website" })}
      projectDescription={tr({
        fr: "Mon site portfolio personnel, pour présenter mes projets et mes compétences.",
        en: "My personal portfolio website to showcase my projects and skills.",
      })}
      projectKeywords={["React", "TypeScript"]}
      projectImage={mainArtImg.src}
      projectPopUpContent={
        <div>
          <h2>{tr({ fr: "Site portfolio", en: "Portfolio Website" })}</h2>
          <Keyword keyword="React" />
          <Keyword keyword="TypeScript" />
          <p>
            {tr({
              fr: "Ce site est un projet personnel pour présenter mon travail et mes compétences. C'est ma première expérience avec React et TypeScript, et je l'ai construit pour progresser en développement web. Je sais que ce n'est pas le portfolio le plus simple à utiliser, mais je voulais tenter quelque chose de créatif, différent des templates qu'on voit partout.",
              en: "This portfolio website is a personal project to showcase my work and skills. It is my first experience with React and TypeScript, and I built it to improve my web development skills. I am well aware it is not the most user-friendly portfolio website out there, but I wanted to try and do something creative and different from the usual templates you can see everytime.",
            })}
          </p>
          <p>
            {tr({
              fr: "J'avais très peu d'expérience en développement web moderne avant ce projet, j'ai donc beaucoup appris sur React, TypeScript et le web design en le construisant. Je me suis concentré sur un design plutôt épuré et moderne, responsive et créatif, qui met en valeur mes compétences et ma curiosité.",
              en: "I had very little experience with modern web development prior to this project, so I learned a lot about React, TypeScript, and web design while building this site. I focused on creating a clean-ish and modern design that is responsive, creative and hopefully showcases my skills and curiosity effectively.",
            })}
          </p>
          <p>
            {tr({
              fr: "J'ai d'abord utilisé Bootstrap pour la mise en page et le style, puis je suis passé à des modules CSS en vanilla pour mieux contrôler le design et obtenir un rendu unique. J'utilise encore Bootstrap pour les infobulles.",
              en: "I also used bootstrap initially to help with layout and styling, but I later moved to custom vanilla CSS modules to have more control over the design and ensure a unique look. I still used some bootstrap for the tooltips though.",
            })}
          </p>
          <p>
            {tr({ fr: "J'ai utilisé ", en: "I used " })}
            <a
              href="https://github.com/bokuweb/react-rnd"
              target="_blank"
              rel="noreferrer"
            >
              react-rnd
            </a>{" "}
            {tr({ fr: "de ", en: "by " })}
            <a
              href="https://github.com/bokuweb"
              target="_blank"
              rel="noreferrer"
            >
              @bokuweb
            </a>{" "}
            {tr({
              fr: "pour les fenêtres interactives.",
              en: "for the interactive windows.",
            })}
          </p>
          <p>
            {tr({
              fr: "Au final, ce projet a été très formateur et je suis content du résultat. Je compte continuer à l'améliorer au fil de mon apprentissage du développement web et du design. Avec ce que je sais aujourd'hui, je ferais beaucoup de choses différemment, mais je suis fier du chemin parcouru.",
              en: "Overall, this project was a great learning experience and I am happy with how my portfolio website turned out. I plan to continue improving it over time as I learn more about web development and design. There are a lot of things I would have done differently with what I know now, but I am proud of the progress I made with this project.",
            })}
          </p>
          <p>
            {tr({
              fr: "PS : je sais que l'animation de l'arbre de compétences se rejoue à chaque ouverture de l'onglet, mais gérer ça pour l'onglet À propos a été une telle corvée que j'ai laissé tomber pour l'instant... Peut-être plus tard, quand j'aurai du temps libre.",
              en: "PS : I know the skills tree animation loops every time the tab is open but handling that for the AboutMe tab was such a chore I just gave up on it for now... Maybe later when i'll have some free time",
            })}
          </p>
        </div>
      }
    />
  );
}

export default PortfolioWebsite;
