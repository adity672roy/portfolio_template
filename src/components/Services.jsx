import React from "react";

const Services = ({ data }) => {
  return (
    <section className="section" id="services">
      <div>
        <h2 className="subtitle">Services</h2>
        <h1 className="title">What I Do</h1>
        <p className="desc">{data?.about?.subTitle}</p>
      </div>
      <div className="services">
        {data.services &&
          data.services.map((s) => (
            <div key={s._id} className="service service_container">
              <div className="service_desc">
                <h2 className="service_name">{s.name}</h2>
                <p className="service_description">{s.desc}</p>
              </div>
              <div className="service_charge">
                <p className="charge_start">Starts from</p>
                <h2 className="charges">{s.charge}</h2>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Services;
