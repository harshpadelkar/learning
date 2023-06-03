import React, { useState } from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import "./style.scss";
import VideoPopup from "../videoPopup/VideoPopup";

const Lectures = ({ lectures }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  return (
    <div className="course-content mx-auto">
      <ul className="course-content-list">
        {lectures?.map((lecture, idx) => {
          return (
            <li
              onClick={() => {
                setShow(true);
                setVideoId(lecture?.video);
              }}
              key={lecture?._key}
            >
              <MdOutlineSlowMotionVideo />
              <span>{lecture?.caption}</span>
            </li>
          );
        })}
      </ul>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default Lectures;
