import React from "react";

import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Developement from "./developement/Developement";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      {/* <Developement /> */}
    </div>
  );
};

export default Home;
