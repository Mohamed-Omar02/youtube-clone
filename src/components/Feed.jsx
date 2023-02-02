import React, {useEffect, useState} from "react";
import {css} from "@emotion/react";
import {SideBar, Videos} from "../components";
// #212529
//fetch function
import {fetchFromApi} from "../utils/fetchFromApi";

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
const Feed = () => {
  const [selectedCat, setSelectedCat] = useState("");
  const [videos, setVideos] = useState([]);
  // setSelectedCat("New");
  selectedCat ? selectedCat : setSelectedCat("New");
  useEffect(() => {
    fetchFromApi(`search?query=${selectedCat}`)
      .then((res) => res.data)
      .then((res) => setVideos(res))
      .catch((err) => console.log("error"));
  }, [selectedCat]);

  return (
    <div className="feed " css={styles}>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-12 col-sm-3 col-md-2  d-flex flex-row flex-md-column ">
            <SideBar
              selectedCat={selectedCat}
              setSelectedCat={setSelectedCat}
            />
          </nav>
          <div className="content col-12 col-sm-9 col-md-10">
            <div className="category-title fs-5">
              {selectedCat} <span>Videos</span>
            </div>
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
