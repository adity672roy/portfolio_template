import React, { useEffect, useState } from "react";
import ImgSection from "./components/ImgSection";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import "./App.css";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const api = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      const response = await api.json();
      setData(response.user);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="hover-circle"
        style={{ left: position.x - 15, top: position.y - 15 }}
      ></div>
      <div className="pages">
        <div className="page">
          <div className="img_side ">
            <Menu data={data} />
            <ImgSection />
          </div>
          <Home data={data} />
          <About data={data} />
          <Portfolio data={data} />
          <Services data={data} />
          <Skills data={data} />
          <Contact data={data} />
          <Footer />
        </div>

        <div className="img_section ">
          <Menu data={data} />
          <ImgSection />
        </div>
      </div>
    </>
  );
};

export default App;
