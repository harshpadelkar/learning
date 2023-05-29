import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Instructor</div>
        {!loading  ? (
          <div className="listItems">
            <div key={data?._id} className="listItem">
              <div className="profileImg">
                <Img src={data?.authorImage} />
              </div>
              <div className="name">{data?.authorName}</div>
              <div className="character">Software Developer</div>
            </div>
          </div>
        ) : (
          <div className="castSkeleton">{skeleton()}</div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
