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
              fr: "Ce site est un projet personnel pour présenter mon travail et mes compétences. C'était mon premier projet React et TypeScript, et je l'ai construit pour progresser en développement web. Je voulais tenter quelque chose de créatif, inspiré des interfaces de jeux vidéo, et différent des templates qu'on voit partout.",
              en: "This portfolio website is a personal project to showcase my work and skills. It was my first React and TypeScript project, and I built it to improve my web development skills. I wanted to try something creative, inspired by video game interfaces, and different from the usual templates you can see everywhere.",
            })}
          </p>
          <p>
            {tr({
              fr: "J'avais très peu d'expérience en développement web moderne avant ce projet, j'ai donc beaucoup appris sur React, TypeScript et le web design en le construisant. Je me suis concentré sur un design moderne et créatif, qui met en valeur mes compétences et ma curiosité.",
              en: "I had very little experience with modern web development prior to this project, so I learned a lot about React, TypeScript, and web design while building this site. I focused on creating a modern and creative design that showcases my skills and curiosity.",
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
              fr: "Dernières évolutions : une version FR / EN faite maison avec un Context React (sans librairie), une adaptation complète pour mobile, et la refonte de l'onglet CV & Liens.",
              en: "Latest updates : a home made FR / EN version using a React Context (no library), a full mobile layout, and a redesign of the Resume & Links tab.",
            })}
          </p>
        </div>
      }
    />
  );
}

export default PortfolioWebsite;
