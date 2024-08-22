import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";

import Navbar from "./Navbar";
import Bottle from "./bottle";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favorite Drink Served Ice-Cold & Refreshing
          </h1>
          <p className="primary-text">
            Healthy switcher chefs handle all the mixing, chilling, & flavor
            balancing, so you can enjoy a perfectly crafted cold drink.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <Bottle />
        </div>
      </div>
    </div>
  );
};

export default Home;
