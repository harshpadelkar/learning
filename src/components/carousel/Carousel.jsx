import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";

import "./style.scss";
import StarRatings from "react-star-ratings";

const Carousel = ({ data, loading }) => {
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

  return (
    <div className="videosSection">
      <ContentWrapper>
        {!loading ? (
          <div className="videos">
            {data?.map((course) => {
              const url = course?.image;
              return (
                <div
                  key={course?._id}
                  className="videoItem"
                  onClick={() => navigate(`/${course?.topic}/${course?._id}`)}
                >
                  <div className="videoThumbnail">
                    <Img src={url} />
                  </div>
                  <div className="videoTitle">{course?.courseName}</div>

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
                        rating={1}
                        starDimension="20px"
                        starSpacing="0px"
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

// <div className="carousel">
//       <ContentWrapper>
//         {title && <div className="carouselTitle">{title}</div>}
//         <BsFillArrowLeftCircleFill
//           className="carouselLeftNav arrow"
//           onClick={() => navigation("left")}
//         />
//         <BsFillArrowRightCircleFill
//           className="carouselRighttNav arrow"
//           onClick={() => navigation("right")}
//         />
//         {!loading ? (
//           <div className="carouselItems" ref={carouselContainer}>
//             {data?.map((item) => {
// const { url } = item.courseImage.asset;
// console.log(url);
//               return (
//                 <div
//                   key={item._id}
//                   className="carouselItem"
// onClick={() => navigate(`/${item.topic}/${item._id}`)}
//                 >
//                   <div className="posterBlock">
//                     <Img src={url} />
//                     {/* <CircleRating rating={item.vote_average.toFixed(1)} /> */}
//                     <Genres data={item.topic} />
//                   </div>
//                   <div className="textBlock">
//                     <span className="title">{item.courseName}</span>
//                     <span className="date">
//                       {dayjs(item.publishedAt).format("MMM D, YYYY")}
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <div className="loadingSkeleton">
//             {skItem()}
//             {skItem()}
//             {skItem()}
//             {skItem()}
//             {skItem()}
//           </div>
//         )}
//       </ContentWrapper>
//     </div>
