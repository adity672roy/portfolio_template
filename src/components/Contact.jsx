import React from "react";

const Contact = ({ data }) => {
  return (
    <section className="section" id="contact">
      <div>
        <h2 className="subtitle">Contact</h2>
        <h1 className="title">Get In Touch</h1>
        <p className="desc">{data?.about?.subTitle}</p>
      </div>
      <form className="form">
        <div className="input_field">
          <input type="text" placeholder="Name" className="input" />
          <input type="text" placeholder="Email" className="input" />
        </div>
        <input type="text" placeholder="Phone Number" className="input" />
        <textarea
          cols="30"
          rows="5"
          placeholder="Messgae"
          className="input"
        ></textarea>
        <button className="btn">SEND MESSAGE</button>
      </form>
      <div className="contact">
        <div>
          <p className="service_description">ADDRESS</p>
          <p className="service_name">{data?.about?.address}</p>
        </div>
        <div>
          <p className="service_description">PHONE</p>
          <p className="service_name">{data?.about?.phoneNumber}</p>
        </div>
        <div>
          <span className="email">{data?.email}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
