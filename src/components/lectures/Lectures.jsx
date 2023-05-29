import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import "./style.scss";

const Lectures = ({ lectures }) => {
  return (
    <div className="course-content mx-auto">
      <ul className="course-content-list">
        {lectures?.map((lecture, idx) => {
          return (
            <li key={lecture._id}>
              <MdOutlineSlowMotionVideo />
              <span>{lecture.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Lectures;
