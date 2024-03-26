import React from "react";

const Experience = ({ data }) => {
  const experience = data.filter((item) => !item.forEducation);
  return (
    <div className="services">
      {experience &&
        experience.map((d) => (
          <div key={d.company_name} className="service ">
            <div className="service_desc">
              <div className="lg:flex block items-center gap-3">
                <h2 className="service_name">{d.company_name}</h2>
                <p className="service_description">
                  ({d.jobTitle}) - {d.jobLocation}
                </p>
              </div>
              <p className="service_description">{d.summary}</p>
              <div className="bullet_points">
                {d.bulletPoints.map((b) => (
                  <ul>
                    <li className="bullets">{b}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Experience;
