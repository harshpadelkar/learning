import React, { useEffect, useState } from "react";

import "./style.scss";
import { client } from "../../lib/client";
import format from "date-fns/format";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  // useEffect(() => {
  //   client
  //     .fetch(
  //       `*[_type == "post"] | order(_createdAt desc){
  //       _id,
  //        caption,
  //        video{
  //         asset->{
  //           _id,
  //           url
  //         }
  //        },
  //         userId,
  //         postedBy->{
  //           _id,
  //           userName,
  //           image
  //         },
  //         coursePostedBy->{
  //           _id,
  //           courseName,
  //           courseImage{
  //             asset->{
  //               _id,
  //               url
  //             }
  //           },
  //           video{
  //             asset->{
  //               _id,
  //               url
  //             }
  //           }
  //         },
  //         likes,
  //         comments[]{
  //           comment,
  //           _key,
  //           postedBy->{
  //           _id,
  //           userName,
  //           image
  //         },
  //         },
  //     }`
  //     )
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch(console.error);
  // }, []);

  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      {/* <Popular />
      <TopRated /> */}
    </div>
  );
};

export default Home;
