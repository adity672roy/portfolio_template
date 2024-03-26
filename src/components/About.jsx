import React from "react";
import AboutSkills from "./AboutSkills";

const About = ({ data }) => {
  return (
    <section className="section" id="about">
      <div>
        <h2 className="subtitle">About</h2>
        <h1 className="title">Biography</h1>
        <p className="desc">{data?.about?.description}</p>
      </div>
      <div className="lg:my-20 my-10  flex  lg:gap-10 gap-3 flex-col">
        <div className="flex items-end justify-between">
          <p className="abt_title">name</p>
          <p className="abt_desc ">{data?.about?.name}</p>
        </div>
        <div className="flex items-end justify-between ">
          <p className="abt_title">Phone</p>
          <p className="abt_desc underline-text">{data?.about?.phoneNumber}</p>
        </div>
        <div className="flex items-end justify-between">
          <p className="abt_title">email</p>
          <p className="abt_desc underline-text">{data.email}</p>
        </div>
        <div className="flex items-end justify-between">
          <p className="abt_title">my quote</p>
          <p className="abt_desc ">{data?.about?.quote}</p>
        </div>
      </div>
      <AboutSkills skillsData={data?.skills} data={data?.timeline} />
    </section>
  );
};

export default About;
