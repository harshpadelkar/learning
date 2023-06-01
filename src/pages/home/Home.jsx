import React from "react";

import "./style.scss";
import format from "date-fns/format";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Developement from "./developement/Developement";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      {/* <Developement /> */}
      {/* <TopRated /> */}
    </div>
  );
};

export default Home;
