import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import SearchResultVideoCard from "./SearchResultVideoCard";
import useHarsh from "../../hooks/useHarsh";
import { coursesHomePage } from "../../query";

const SearchResult = () => {
  const { query } = useParams();

  const { data, loading } = useHarsh(coursesHomePage);

  const [pageNum, setPageNum] = useState(1);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {data?.map((item) => (
            <SearchResultVideoCard key={item?._id} video={item && item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
