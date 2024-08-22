import React ,{ useEffect } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/image..png";

import "./about.css";
import InitZoom from "./zoom.js";




const About = () => {
  useEffect(() => {
    
    InitZoom();
  }, []);
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container" id="zoom">
        <img src={AboutBackgroundImage} alt=""  className="1coca"/>
        <img src={AboutBackgroundImage} alt="" id="imgZoom" />
      </div>

      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Cold drinks add variety to a balanced diet.
        </h1>
        <p className="primary-text">
        Cold drinks play a role in a balanced diet, offering refreshing alternatives to plain water and adding variety to your beverage choices.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <a className="a1" href="https://youtu.be/kpHBxLqkikw?si=pt2KmZ1HxvpL_IcT">
          <button className="watch-video-button">Watch Video</button></a>
        </div>
      </div>
    </div>
  );
};

export default About;
