import React, { useEffect, useState } from "react"; 
const ImgSection = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const api = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      const response = await api.json();
      setData(response.user.about.avatar);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="intro section-padding ">
      <div className="intro-profile">
        <div className="intro-border one"></div>
        <div className="intro-border two"></div>

        <div className="img-box">
          <img
            src={data.url}
            alt=""
            className="intro-img my-image"
            width="100%"
            height="100%"
            loading="lazy"
          />
        </div>

        <p>Hi there! I am</p>

        <div className="profile-name">
          <span>[</span>
          <div className="my-name">John doe</div>
          <span>]</span>
        </div>
      </div>

      <a href="#contact" className="intro-link">
        <span className="circle"></span>
        <span className="link-underline my-title">Software Developer</span>
      </a>
    </section>
  );
};

export default ImgSection;
