import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import { useSelector } from "react-redux";
import useHarsh from "../../../hooks/useHarsh";
import { categoryFetch, coursesHomePage } from "../../../query";

const Development = () => {
  // const data = useSelector((state) => state.courses.data);
  // const loading = useSelector((state) => state.courses.loading);

  // const { data, loading } = useHarsh(categoryFetch("development"));

  // console.log(data);

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Development</span>
        {/* <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} /> */}
      </ContentWrapper>
      <Carousel data={data && data} loading={loading && loading} />
    </div>
  );
};

export default Development;
