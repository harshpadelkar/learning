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
import {
  updateWishlistedCourse,
  updateUnWishLishtedCourse,
  client,
} from "../../../lib/client";
import { useSelector } from "react-redux";
import axios from "axios";
import { getCourse } from "../../../query";

const DetailsBanner = ({ video, loading, setData }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [alreadyLiked, setAlreadyLiked] = useState(false);

  const { user } = useSelector((state) => state.user);
  let alreadyLikedByUser = video?.likes?.filter((like) => {
    return like._ref === user?._id;
  });

  const likeCourse = async (course, userID) => {
    const data = {
      userId: userID,
      courseId: course,
    };

    await updateWishlistedCourse(data);

    client.fetch(getCourse(video?._id)).then((res) => {
      console.log(res);
      setData(res);
    });
  };

  const unlike = async (course, userID) => {
    if (user) {
      const data = {
        userId: userID,
        courseId: course,
      };

      await updateUnWishLishtedCourse(data);
      client.fetch(getCourse(video?._id)).then((res) => {
        console.log(res);
        setData(res);
      });
    }
  };

  useEffect(() => {
    if (alreadyLikedByUser?.length > 0) {
      setAlreadyLiked(true);
    } else {
      setAlreadyLiked(false);
    }
  }, [alreadyLikedByUser, video]);

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

                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        gap: "10px",
                        padding: "20px 0",
                      }}
                      className=" w-full flex gap-2 py-3 px-2"
                    >
                      <button
                        style={{
                          cursor: "pointer",
                          fontSize: "15px",
                          fontWeight: "600",
                          background: "#0850bb",
                          padding: "18px 0",
                          border: "none",
                          color: "#ffffff",
                          borderRadius: "10px",
                          flexGrow: "1",
                        }}
                        className="cursor-pointer w-full  text-base py-4 font-bold bg-green-600 "
                      >
                        Entroll Now
                      </button>
                      {alreadyLiked ? (
                        <button
                          style={{
                            cursor: "pointer",
                            fontSize: "15px",
                            fontWeight: "600",
                            background: "#0850bb",
                            padding: "18px 0",
                            border: "none",
                            color: "#ffffff",
                            borderRadius: "10px",
                            flexGrow: "1",
                            display: "flex",
                            gap: "5px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onClick={() => unlike(video?._id, user?._id)}
                        >
                          <MdFavorite style={{ color: "red" }} />
                          Wishlisted
                        </button>
                      ) : (
                        <button
                          style={{
                            cursor: "pointer",
                            fontSize: "15px",
                            fontWeight: "600",
                            background: "#0850bb",
                            padding: "18px 0",
                            border: "none",
                            color: "#ffffff",
                            borderRadius: "10px",
                            flexGrow: "1",
                            display: "flex",
                            gap: "5px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onClick={() => likeCourse(video?._id, user?._id)}
                        >
                          <MdFavorite style={{ color: "white" }} />
                          Wishlist
                        </button>
                      )}
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
