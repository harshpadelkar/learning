import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./style.scss";

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating">
      <CircularProgressbar
        value={rating}
        maxValue={5}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 2 ? "red" : rating < 4 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default CircleRating;
