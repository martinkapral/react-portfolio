import { SKILLS } from "../constants/data";
import { ABOUT_TEXT } from "../constants/data";
import resume from "../assets/M.Kapral_CV.pdf";

import SkillCard from "./SkillCard";

const About = () => {
  const skillData = SKILLS.map((data) => {
    return <SkillCard key={data.key} title={data.title} />;
  });
  return (
    <div className="about-wrapper" id="about">
      <div className="about">
        <h2>About</h2>
        <p className="about-description">{ABOUT_TEXT}</p>
        <p className="resume">
          For more information, you can view my resume{" "}
          <a href={resume} target="_blank" rel="noopener noreferrer">
            here.
          </a>
        </p>

        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            <span>{skillData}</span>
          </div>
          <p>
            Does your company use a different tech stack? No problem! I'm always
            eager to learn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
