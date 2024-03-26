import React, { useState } from "react";
import SkillsSection from "./SkillsSection";
import Education from "./Education";
import Experience from "./Experience";

const AboutSkills = ({ skillsData, data }) => {
  const [activeLink, setActiveLink] = useState("skills");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const sortedSkillsData = skillsData?.sort((a, b) => a.sequence - b.sequence);
  return (
    <div>
      <div className="flex items-start about_skill  ">
        <p
          className={`desc ${activeLink === "skills" ? "active" : ""}`}
          onClick={() => handleLinkClick("skills")}
        >
          Skills
        </p>

        <p
          className={`desc line_before ${
            activeLink === "experience" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("experience")}
        >
          Experience
        </p>
        <p
          className={`desc line_before ${
            activeLink === "education" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("education")}
        >
          Education
        </p>
      </div>

      <div>
        {activeLink === "skills" && (
          <SkillsSection sortedSkillsData={sortedSkillsData} />
        )}
        {activeLink === "education" && <Education data={data} />}
        {activeLink === "experience" && <Experience data={data} />}
      </div>
    </div>
  );
};

export default AboutSkills;
