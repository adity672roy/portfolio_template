import React from "react";

const SkillsSection = ({ sortedSkillsData }) => {
  return (
    <div>
      {sortedSkillsData?.map((skill) => (
        <div className="py-6" key={skill.name}>
          <p className="skills">{skill?.name}</p>
          <div className="range-container">
            <div className="range-label end">{skill?.percentage}%</div>
          </div>
          <div className="skill_progress_bg">
            <div
              style={{ width: skill.percentage + "%" }}
              className="skill_progress"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
