import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";
import useHarsh from "../../../hooks/useHarsh";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  const { data: harshData, loading: harshLoading } =
    useHarsh(`*[_type == "course"] | order(_createdAt desc){
             _id,
            courseName,
            courseImage{
              asset->{
                _id,
                url
              }
            },
            video{
              asset->{
                _id,
                url
              }
            },
          likes,
          comments[]{
            comment,
            _key,
            postedBy->{
            _id,
            userName,
            image
          },
        },
        topic,
        playlist
      }`);

  console.log(harshData && harshData);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      {/* <Carousel data={harshData} loading={harshLoading} /> */}
    </div>
  );
};

export default Trending;
