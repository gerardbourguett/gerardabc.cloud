/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import image from "../assets/img/perfil.jpeg";

const Header = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const cvLink = document.querySelector(".cv a");

    cvLink.addEventListener("click", (event) => {
      event.preventDefault(); // Evitar que el enlace se abra automáticamente
      const url = cvLink.href;
      window.open(url, "_blank"); // Abrir el enlace en una nueva pestaña
    });
  });

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Gerard B.</h1>
        </div>
        <Navbar />
        <div className="cv">
          <a
            href="https://drive.google.com/file/d/1aaFr9wV49F6fmeTUTZpIV5PmiyFPHp0-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Download CV</h3>
          </a>
        </div>
      </div>
      <section className="home">
        <div className="izq">
          <h1>Hi, I am Gerard</h1>
          <p>Full Stack Web Developer</p>
          <a href="#">I am a Computer Engineer from Rancagua, Chile</a>
        </div>
        <div className="der">
          <img src={image} />
        </div>
      </section>
    </header>
  );
};

export default Header;
