import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";
import heroBannerImage from "../../../assets/hero-section.jpg";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/test`);
    }
  };

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
