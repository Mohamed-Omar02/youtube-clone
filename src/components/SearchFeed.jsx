import React, {useEffect, useState} from "react";
import {css} from "@emotion/react";
import {Videos} from "../components";
// #212529
//fetch function
import {fetchFromApi} from "../utils/fetchFromApi";
import {useParams} from "react-router-dom";

const styles = css`
  background-color: black;
  min-height: calc(100vh - 71px);
  nav.d-flex {
    height: auto;
    max-width: 100%;
    padding: 0 2px;
    border-right: 1px solid #3d3d3d38;
    @media (min-width: 576px) {
      height: 92vh;
      & > div {
        max-width: 100%;
      }
    }
  }
  .row {
    overflow-x: hidden;
  }
  .content {
    color: white;
    padding: 0 10px;
    @media (max-width: 570px) {
      margin-top: 0px;
    }
  }
`;
const SearchFeed = () => {
  const {searchTerm} = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`search?query=${searchTerm}`)
      .then((res) => res.data)
      .then((res) => setVideos(res));
  }, [searchTerm]);

  return (
    <div className="feed " css={styles}>
      <div className="container">
        <div className="content ">
          <div className="category-title fs-5">
            Results for{" "}
            <h3 className="text-danger d-inline-block">{searchTerm}</h3> Videos
          </div>
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default SearchFeed;
