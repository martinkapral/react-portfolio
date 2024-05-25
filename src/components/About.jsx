import { SKILLS } from "../constants/data";
import { ABOUT_TEXT } from "../constants/data";

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
        <div className="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            <span>{skillData}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
