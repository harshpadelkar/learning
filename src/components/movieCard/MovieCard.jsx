import React, { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";
import Img from "../lazyLoadImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";
import StarRatings from "react-star-ratings";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const [starWidth, setStarWidth] = useState(20);
  const clientWidth = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  useEffect(() => {
    if (clientWidth.current.clientWidth < 560) {
      setStarWidth(12);
    } else if (clientWidth.current.clientWidth < 859) {
      setStarWidth(15);
    }
  }, [clientWidth]);

  return (
    <div className="container" ref={clientWidth}>
      <div className="innerContainer">
        <div className="wrapper">
          <Img className="image" src={data?.image} />
        </div>

        <div className="searchContent">
          <div className="contentContainer">
            <h3 className="heading">{data?.courseName}</h3>
            <div>
              <div className="authorName">{data?.authorName}</div>
              <div className="starRatings">
                <StarRatings
                  starRatedColor="#ffa900"
                  rating={1}
                  starDimension={`${starWidth}px`}
                  starSpacing="0px"
                />
                <p>( {data?.likes?.length} )</p>
              </div>
            </div>
            <p className="description">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
