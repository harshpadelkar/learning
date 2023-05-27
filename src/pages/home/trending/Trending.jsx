import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import { courses } from "../../../query";
import { fetchDataFromHarshApi } from "../../../utils Nakali/harshApi";

import useHarsh from "../../../hooks/useHarsh";
import { useSelector } from "react-redux";

const Trending = () => {
  const { data: harshData, loading: harshLoading } = useHarsh(courses);
  const data = useSelector((state) => state.courses.data);
  const loading = useSelector((state) => state.courses.loading);

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Recent Courses</span>
        {/* <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} /> */}
      </ContentWrapper>
      <Carousel data={data} loading={loading} />
    </div>
  );
};

export default Trending;
