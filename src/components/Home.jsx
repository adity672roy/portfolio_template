import React from "react";

const Home = ({ data }) => {
  return (
    <section className="section" id="home">
      <div>
        <h2 className="subtitle">Introduction</h2>
        <h1 className="title">{data?.about?.title}</h1>
        <p className="desc">{data?.about?.subTitle}</p>
        <h1 className="title my-20">{data?.about?.name}</h1>
      </div>
    </section>
  );
};

export default Home;
