import React from "react";
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

const Details = () => {
  const { mediaType, id } = useParams();

  const { data: harshData, loading: harshLoading } = useHarsh(courses);

  const detailedCourse = harshData?.filter((course) => course._id === id);

  // console.log(data);
  // const { data: credits, loading: creditsLoading } = useFetch(
  //   `/${mediaType}/${id}/credits`
  // );

  return (
    <div>
      {<DetailsBanner video={detailedCourse?.[0]} loading={harshLoading} />}
    </div>
  );
};

export default Details;
