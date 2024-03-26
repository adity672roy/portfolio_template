import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const Portfolio = ({ data }) => {
  const sorted = data?.projects?.sort((a, b) => a.sequence - b.sequence);
  return (
    <section className="section" id="portfolio">
      <div>
        <h2 className="subtitle">Portfolio</h2>
        <div className="flex  items-start justify-between pb-10">
          <h1 className="title">Featured Projects</h1>
          <div className="flex items-center gap-5">
            <BsArrowLeft className="arrow-icons" />
            <BsArrowRight className="arrow-icons" />
          </div>
        </div>
      </div>
      <div className="projects ">
        {data.projects &&
          sorted.map((d) => (
            <div className="my-5 project" key={d._id}>
              <div className="project_img">
                <img src={d.image.url} alt="project" />
              </div>
              <div className="flex items-center gap-5">
                {d.techStack &&
                  d.techStack.map((tech, index) => (
                    <p className="techStack" key={index}>
                      {tech}
                    </p>
                  ))}
              </div>
              <p className="sequence"> {d.title}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
