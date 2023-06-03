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
  const [isLoading, setIsLoading] = useState(null);

  const { user } = useSelector((state) => state.user);
  let alreadyLikedByUser = video?.likes?.filter((like) => {
    return like._ref === user?._id;
  });

  const likeCourse = async (course, userID) => {
    setIsLoading(true);
    if (user) {
      const data = {
        userId: userID,
        courseId: course,
      };

      await updateWishlistedCourse(data);

      client.fetch(getCourse(video?._id)).then((res) => {
        setData(res);
        setIsLoading(null);
      });
    }
  };

  const unlike = async (course, userID) => {
    setIsLoading(true);
    if (user) {
      const data = {
        userId: userID,
        courseId: course,
      };

      await updateUnWishLishtedCourse(data);
      client.fetch(getCourse(video?._id)).then((res) => {
        setData(res);
        setIsLoading(null);
      });
    }
  };

  const arrRatings = video?.ratings;
  const totalRatingPoints = arrRatings?.reduce((acc, rating) => {
    const total = acc + rating;
    return total;
  }, 0);
  const rating = totalRatingPoints / video?.ratings?.length;

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
                        setVideoId(video?.video);
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
                      className="button-container"
                    >
                      <button className="fav-button">Entroll Now</button>
                      {alreadyLiked ? (
                        <button
                          className="fav-button button-flex"
                          onClick={() => unlike(video?._id, user?._id)}
                          disabled={isLoading}
                        >
                          <MdFavorite style={{ color: "red" }} />
                          Wishlisted
                        </button>
                      ) : (
                        <button
                          className="fav-button button-flex"
                          disabled={isLoading}
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
                      {`${video?.title} (${dayjs(video?.publishedAt).format(
                        "YYYY"
                      )})`}
                    </div>
                    <div className="subtitle">{video?.subtitle}</div>

                    <Genres data={video?.category} />

                    <div className="row">
                      <CircleRating rating={rating && rating} />
                      <div
                        className="playbtn"
                        onClick={() => {
                          setShow(true);
                          setVideoId(video?.video);
                        }}
                      >
                        <PlayIcon />
                        <span className="text">Watch Preview</span>
                      </div>
                    </div>

                    <div style={{ marginTop: "18px" }} className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{video?.description}</div>
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
                          <span className="text bold">Ratings: </span>
                          <span className="text">12 students</span>
                        </div>
                      }
                    </div>

                    {video?.authorImage && (
                      <div className="info">
                        <span className="text bold">Educater: </span>
                        <span className="text">
                          <span>{video?.authorName}</span>
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
