import { PROJECTS } from "../constants/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const listItem = PROJECTS.map((item) => {
    return (
      <ProjectCard
        title={item.title}
        image={item.image}
        description={item.description}
        technologies={item.technologies}
        ghlink={item.ghlink}
        sitelink={item.sitelink}
      />
    );
  });
  return (
    <div className="projects-wrapper" id="projects">
      <div className="projects">
        <h2>Projects</h2>
        <div className="projects-container">{listItem}</div>
      </div>
    </div>
  );
};

export default Projects;
