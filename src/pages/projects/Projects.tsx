import { useEffect, useState } from "react";
import Project from "../../components/project/Project";
import "./projects.css";

function Projects() {
  const [projects, setProjects] = useState<
    {
      img: string;
      name: string;
      description: string;
      technologies: string[];
      repoURL: string;
      siteURL: string;
    }[]
  >([]);
  useEffect(() => {
    fetch("data/projects.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <main id="projects-main">
      <div id="projects-list-container">
        <h1>Projects</h1>
        <div id="projects-list">
          {projects.map((project, index) => {
            return (
              <Project
                img={project.img}
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                repoURL={project.repoURL}
                siteURL={project.siteURL}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Projects;
