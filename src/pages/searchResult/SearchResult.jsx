import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import useHarsh from "../../hooks/useHarsh";
import { coursesHomePage, getSearchResults } from "../../query";
import Spinner from "../../components/spinner/Spinner";
import CourseCard from "../../components/courseCard/CourseCard";

const SearchResult = () => {
  const { query } = useParams();

  const { data, loading } = useHarsh(getSearchResults(query));

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.length > 0 ? (
            <>
              {data?.map((item, index) => {
                return (
                  <CourseCard
                    key={index}
                    data={item}
                    fromSearch={true}
                    i={index}
                  />
                );
              })}
            </>
          ) : (
            <span style={{ color: "white" }} className="resultNotFound">
              Sorry, Results not found!
            </span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
