import React from "react";

const Skills = ({ data }) => {
  return (
    <section className="section" id="skills">
      <div>
        <h2 className="subtitle">Skills</h2>
        <h1 className="title">My Skills</h1>
      </div>
      <div className="skills_img">
        {data.skills &&
          data.skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <img src={skill.image.url} alt="" />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
