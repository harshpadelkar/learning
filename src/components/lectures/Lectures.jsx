import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import "./style.scss";

const Lectures = ({ lectures, onClick }) => {
  return (
    <div className="course-content mx-auto">
      <ul className="course-content-list">
        {lectures?.map((lecture, idx) => {
          return (
            <li onClick={onClick} key={lecture._id}>
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
