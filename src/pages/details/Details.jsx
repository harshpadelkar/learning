import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { coursesHomePage, getCourse } from "../../query";

import "./style.scss";

import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import useHarsh from "../../hooks/useHarsh";
import Accordion from "../../components/accordian/Accordion";
import { useSelector } from "react-redux";

const Details = () => {
  const { mediaType, id } = useParams();

  const { user } = useSelector((state) => state.user);

  const { data, loading, setData } = useHarsh(getCourse(id));

  console.log(data);

  return (
    <div>
      <DetailsBanner video={data?.[0]} loading={loading} setData={setData} />
      <Cast data={data?.[0]} loading={loading} />
      <Accordion sections={data?.[0]?.sections} />
    </div>
  );
};

export default Details;
