import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const ProjectCard = (props) => {
  return (
    <a href={props.sitelink} target="_blank" rel="noopener noreferrer">
      <div className="project-card-container">
        <div className="project-card">
          <div className="project-left">
            <img className="project-img" src={props.image} alt={props.title} />
            <div className="project-links">
              <a
                href={props.ghlink}
                target="_blank"
                rel="noopener noreferrer"
                className="gh-link"
              >
                <FaGithub />
              </a>
              <a
                href={props.sitelink}
                target="_blank"
                rel="noopener noreferrer"
                className="site-link"
              >
                <FaLink />
              </a>
            </div>
          </div>
          <div className="project-right">
            <h2>{props.title}</h2>
            <p className="project-description">{props.description}</p>
          </div>
        </div>
        <div className="project-tech">
          {props.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
