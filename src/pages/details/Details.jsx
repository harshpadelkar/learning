import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { courses, coursesHomePage } from "../../query";

import "./style.scss";

import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import useHarsh from "../../hooks/useHarsh";
import Accordion from "../../components/accordian/Accordion";

const Details = () => {
  const { mediaType, id } = useParams();

  const { data, loading } = useHarsh(coursesHomePage);

  const detailedCourse = data?.filter((course) => course._id === id);

  return (
    <div>
      <DetailsBanner video={detailedCourse?.[0]} loading={loading} />
      <Cast data={detailedCourse?.[0]} loading={loading} />
      <Accordion items={detailedCourse?.[0]?.lectures} />
    </div>
  );
};

export default Details;
