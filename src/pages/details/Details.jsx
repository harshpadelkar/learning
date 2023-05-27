import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../query";

import "./style.scss";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";
import useHarsh from "../../hooks/useHarsh";
import Lectures from "../../components/lectures/Lectures";
import Accordion from "../../components/accordian/Accordion";
import { useSelector } from "react-redux";
// import Accordion from "../../components/Accordion";

const isInitial = true;

const Details = () => {
  const { mediaType, id } = useParams();
  const [stateLoading, setStateLoading] = useState(null);

  const { data: harshData, loading: harshLoading } = useHarsh(courses);

  const data = useSelector((state) => state.courses.data);
  const loading = useSelector((state) => state.courses.loading);

  const detailedCourse = data?.filter((course) => course._id === id);

  // console.log(data);
  // const { data: credits, loading: creditsLoading } = useFetch(
  //   `/${mediaType}/${id}/credits`
  // );

  return (
    <div>
      <DetailsBanner video={detailedCourse?.[0]} loading={loading} />
      <Cast data={detailedCourse?.[0]?.postedBy} loading={loading} />
      <Accordion items={detailedCourse?.[0]?.post} />
    </div>
  );
};

export default Details;
