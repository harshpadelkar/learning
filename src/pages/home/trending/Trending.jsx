import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import useHarsh from "../../../hooks/useHarsh";
import { getCarouselData } from "../../../query";

const Trending = () => {
  const { data, loading } = useHarsh(getCarouselData());

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Recent Courses</span>
      </ContentWrapper>
      <Carousel data={data && data} loading={loading && loading} />
    </div>
  );
};

export default Trending;
