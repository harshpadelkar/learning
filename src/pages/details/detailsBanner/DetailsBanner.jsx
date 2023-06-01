import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { MdFavorite } from "react-icons/md";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import { PlayIcon } from "../Playbtn";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import { updateWishlistedCourse } from "../../../lib/client";
import { useSelector } from "react-redux";

const DetailsBanner = ({ video, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
  })

  const likeCourse = async (course, userID) => {
    const data = {
      userId: userID,
      courseId: course,
    };

    await updateWishlistedCourse(data);
  };

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!video && (
            <React.Fragment>
              <div className="backdrop-img"></div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setShow(true);
                        setVideoId(video?.videoUrl);
                      }}
                    >
                      <Img className="posterImg" src={video?.image} />
                    </div>

                    <div className=" w-full flex gap-2 py-3 px-2">
                      <button className="cursor-pointer w-full  text-base py-4 font-bold bg-green-600 ">
                        Entroll Now
                      </button>
                      <button
                        onClick={() => likeCourse(video?._id, user?.uid)}
                        className="cursor-pointer w-full text-base py-4 font-bold bg-green-600 flex gap-2 items-center justify-center"
                      >
                        <MdFavorite style={{ color: "white" }} />
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${video?.courseName} (${dayjs(
                        video?.publishedAt
                      ).format("YYYY")})`}
                    </div>
                    <div className="subtitle">{video?.courseName}</div>

                    <Genres data={video?.topic} />

                    <div className="row">
                      <CircleRating rating={4.9} />
                      <div
                        className="playbtn"
                        onClick={() => {
                          setShow(true);
                          setVideoId(video?.videoUrl);
                        }}
                      >
                        <PlayIcon />
                        <span className="text">Watch Preview</span>
                      </div>
                    </div>

                    <div style={{ marginTop: "18px" }} className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{video?.courseName}</div>
                    </div>

                    <div className="info">
                      {video?.publishedAt && (
                        <div className="infoItem">
                          <span className="text bold">Release Date: </span>
                          <span className="text">
                            {dayjs(video?.publishedAt).format("MMM D, YYYY")}
                          </span>
                        </div>
                      )}
                      {
                        <div className="infoItem">
                          <span className="text bold">Runtime: </span>
                          <span className="text">2h 50m</span>
                        </div>
                      }
                    </div>

                    {video?.publishedBy?.image && (
                      <div className="info">
                        <span className="text bold">Educater: </span>
                        <span className="text">
                          <span>{video?.publishedBy?.userName}</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <VideoPopup
                  show={show}
                  setShow={setShow}
                  videoId={videoId}
                  setVideoId={setVideoId}
                />
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
