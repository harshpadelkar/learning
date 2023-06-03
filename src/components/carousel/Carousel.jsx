import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";

import "./style.scss";
import StarRatings from "react-star-ratings";

const Carousel = ({ data, loading }) => {
  const [width, setWidth] = useState(0);
  const carouselContainer = useRef();
  const navigate = useNavigate();

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="videosSection">
      <BsFillArrowLeftCircleFill
        style={{ color: "white" }}
        className="carouselLeftNav arrow"
        onClick={() => navigation("left")}
      />
      <BsFillArrowRightCircleFill
        style={{ color: "white" }}
        className="carouselRighttNav arrow"
        onClick={() => navigation("right")}
      />
      <ContentWrapper>
        {!loading ? (
          <div ref={carouselContainer} className="videos">
            {data?.map((course, i, courses) => {
              const arrRatings = course?.ratings;
              const totalRatingPoints = arrRatings?.reduce((acc, rating) => {
                const total = acc + rating;
                return total;
              }, 0);
              const rating = totalRatingPoints / course.ratings.length;

              return (
                <div
                  key={course?._id}
                  className="videoItem"
                  onClick={() =>
                    navigate(`/${course?.category}/${course?._id}`)
                  }
                >
                  <div className="videoThumbnail">
                    <Img src={course?.image} />
                  </div>
                  <div className="videoTitle">{course?.title}</div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div className="videoName">{course?.authorName}</div>
                      <StarRatings
                        starRatedColor="#ffa900"
                        rating={rating}
                        starDimension="20px"
                        starSpacing="0px"
                        numberOfStars={5}
                      />
                    </div>

                    <div>
                      <button
                        style={{
                          cursor: "pointer",
                          fontSize: "12px",
                          display: "inline-block",
                          padding: "6px 12px",
                          fontWeight: "600",
                          transition: "all 300ms linear",
                          whiteSpace: " nowrap",
                          marginRight: "10px",
                        }}
                      >
                        Entroll
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
