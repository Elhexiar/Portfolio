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
          <Keyword keyword="React" />
          <Keyword keyword="TypeScript" />
          <p>
            This portfolio website is a personal project to showcase my work and
            skills. It is my first experience with React and TypeScript, and I
            built it to improve my web development skills.
          </p>
          <p>
            I had very little experience with web development prior to this
            project, so I learned a lot about React, TypeScript, and web design
            while building this site. I focused on creating a clean and modern
            design that is responsive, creative and hopefully showcases my
            skills effectively.
          </p>
          <p>
            I also used bootstrap initially to help with layout and styling, but
            I later moved to custom CSS modules to have more control over the
            design and ensure a unique look. I still used some bootstrap for the
            tooltips though.
          </p>
          <p>
            I used{" "}
            <a
              href="https://github.com/bokuweb"
              target="_blank"
              rel="noreferrer"
            >
              @bokuweb
            </a>
            's{" "}
            <a
              href="https://github.com/bokuweb/react-rnd"
              target="_blank"
              rel="noreferrer"
            >
              react-rnd
            </a>{" "}
            for the interactive windows.
          </p>
          <p>
            Overall, this project was a great learning experience and I am happy
            with how my portfolio website turned out. I plan to continue
            improving it over time as I learn more about web development and
            design. There are a lot of things I would have done differently with
            what I know now, but I am proud of the progress I made with this
            project.
          </p>
        </div>
      }
    />
  );
}

export default PortfolioWebsite;
