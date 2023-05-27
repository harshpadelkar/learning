import React from "react";
import { BiCheck } from "react-icons/bi";
import "./style.scss";

const Lectures = ({ post }) => {
  console.log(post);

  return (
    <div className="course-content mx-auto">
      <ul className="course-content-list">
        {post &&
          post.map((contentItem, idx) => {
            return (
              <li
                style={{
                  borderTop: `${idx !== 0 ? "1px solid #00ffb9" : ""}`,
                }}
                key={idx}
              >
                <span>{contentItem.caption}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Lectures;
