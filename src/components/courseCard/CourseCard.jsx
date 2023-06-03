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

const CourseCard = ({ data, fromSearch, mediaType, i }) => {
  const [starWidth, setStarWidth] = useState(22);
  const clientWidth = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  useEffect(() => {
    if (clientWidth.current.clientWidth < 560) {
      setStarWidth(14);
    } else if (clientWidth.current.clientWidth < 859) {
      setStarWidth(16);
    }
  }, [clientWidth]);

  return (
    <div
      style={{
        borderTop: `${i !== 0 ? "0.1px solid #ffffff4d" : "0"}`,
        paddingTop: `${i === 0 ? "0" : "2rem"}`,
      }}
      onClick={() => navigate(`/${data?.category}/${data?._id}`)}
      className="container"
      ref={clientWidth}
    >
      <div className="innerContainer">
        <div className="wrapper">
          <Img className="image" src={data?.image} />
        </div>

        <div className="searchContent">
          <div className="contentContainer">
            <h3 className="heading">{data?.title}</h3>
            <div>
              <div className="authorName">{data?.authorName}</div>
              <div className="starRatings">
                <StarRatings
                  starRatedColor="#ffa900"
                  rating={1}
                  starDimension={`${starWidth}px`}
                  starSpacing="0px"
                />
                <p>( {data?.ratings.length} )</p>
              </div>
            </div>
            <p className="description">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
