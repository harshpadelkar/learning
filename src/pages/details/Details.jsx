import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { courses, coursesHomePage, getCourse } from "../../query";

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

  return (
    <div>
      <DetailsBanner video={data?.[0]} loading={loading} setData={setData} />
      <Cast data={data?.[0]} loading={loading} />
      <Accordion items={data?.[0]?.lectures} />
    </div>
  );
};

export default Details;
