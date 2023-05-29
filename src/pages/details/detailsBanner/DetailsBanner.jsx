import React, { useState } from "react";
import dayjs from "dayjs";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import { PlayIcon } from "../Playbtn";
import VideoPopup from "../../../components/videoPopup/VideoPopup";

const DetailsBanner = ({ video, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

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
                      style={{ display: "flex", gap: "10px", margin: "10px" }}
                    >
                      <button
                        style={{
                          cursor: "pointer",
                          fontSize: "15px",
                          display: "inline-block",
                          width: "100%",
                          padding: "16px 0",
                          fontWeight: "700",
                          transition: "all 300ms linear",
                          whiteSpace: " nowrap",
                        }}
                      >
                        Entroll Now
                      </button>
                      <button
                        style={{
                          cursor: "pointer",
                          width: "100%",
                          fontSize: "15px",
                          display: "inline-block",
                          padding: "6px 16px",
                          fontWeight: "700",
                          transition: "all 300ms linear",
                          whiteSpace: " nowrap",
                        }}
                      >
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
