import ProjectCard from "../ProjectCard";
import Keyword from "../Keyword";

function PortfolioWebsite() {
  return (
    <ProjectCard
      projectTitle="Portfolio Website"
      projectDescription="My personal portfolio website to showcase my projects and skills."
      projectKeywords={["React", "TypeScript"]}
      projectPopUpContent={
        <div>
          <h2>Portfolio Website</h2>
          <p>
            This portfolio website is a personal project to showcase my work and
            skills. It is built using modern web technologies and designed to be
            responsive and user-friendly.
          </p>
          <Keyword keyword="React" />
          <Keyword keyword="TypeScript" />
        </div>
      }
    />
  );
}

export default PortfolioWebsite;
