import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import heroBannerImage from "../../../assets/hero-section.jpg";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <Img src={heroBannerImage} />
      </div>

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            To The Ultimate Learning App Designed to Empower Your Knowledge!
          </span>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
