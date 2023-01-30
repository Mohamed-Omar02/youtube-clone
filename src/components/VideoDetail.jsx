import React from "react";
import {useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {useState, useEffect} from "react";
import {fetchFromApi} from "../utils/fetchFromApi";
import {css} from "@emotion/react";
import {VideoCard, Videos} from "./";

const styles = css`
  background-color: black;
  .video {
    // width: 100%;
    > div {
      aspect-ratio: calc(16 / 9);
      width: unset !important;
      height: unset !important;
    }
  }
  .box {
    width: 100%;
    display: block;
  }
`;
const VideoDetail = () => {
  const {id} = useParams();
  const [videoInfo, setVideoInfo] = useState("null");
  const [relatedVideos, setRelatedVideos] = useState("null");
  useEffect(() => {
    fetchFromApi(`video?${id}`)
      .then((res) => res)
      .then((res) => setVideoInfo(res));
    fetchFromApi(`related?${id}`)
      .then((res) => res.data)
      .then((res) => setRelatedVideos(res));
  }, [id]);
  return (
    <div className="video-details " css={styles}>
      <div className="container pt-5">
        <div className="row">
          <div className="video col-12 col-md-10">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id.substring(3)}`}
              className="react-player"
              controls
            />
          </div>
          <div className="related-videos col ">
            {typeof relatedVideos == "object" && (
              <div className="container">
                <Videos videos={relatedVideos} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
