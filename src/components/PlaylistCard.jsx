import React from "react";
import {css} from "@emotion/react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const styles = css`
  background-color: black;
  border: 0;
  &:hover .overlay > span {
    color: #dc3545;
  }
  .img {
    height: fit-content;
    position: relative;
    > div {
      position: absolute;
      top: 0;
      right: 0;
      background-color: #99999970;
      width: 35%;
      height: 100%;
      z-index: 99;
      border-radius: 0 10px 10px 0;
      color: white;
        .video-count {
          margin-bottom: -0.75rem;
          transition: 0.3s;
        }
        .material-symbols-rounded {
          font-size: 3rem;
          transition: 0.3s;
        
      }
    }
  }
  .card-img-top {
    border-radius: 10px;
    position: relative;
  }
  .card-body {
    background-color: black;
    min-height: 38.38px;
    .channel-title {
      color: #838383;
      font-size: 0.75rem;
      display: inline-block;
    }
  }
  .card-title {
    color: white;
    font-size: 1rem;
    min-height: 38.38px;
  }
  .channel-title {
    color: #838383;
    font-size: 0.75rem;
    display: inline-block;
    svg {
      margin: 0 3px;
      height: 15px;
      width: auto;
    }
 
`;
const PlaylistCard = ({
  playlistDetail: {title, channelTitle, videoCount, videoId, thumbnail},
}) => {
  return (
    <div className="playlist-detail">
      <Card className="d-block my-2" css={styles}>
        <Link to={videoId ? `/video/id=${videoId}` : demoVideoUrl}>
          <div className="img">
            <Card.Img
              height={180}
              width={358}
              variant="top"
              src={
                thumbnail[0].url
                  ? thumbnail[0].url
                  : "https://via.placeholder.com/150"
              }
            ></Card.Img>
            <div className="overlay d-flex justify-content-center align-items-center flex-column">
              <span className="video-count  fs-5 pe-2">{videoCount}</span>
              <span className="material-symbols-rounded ">playlist_play</span>
            </div>
          </div>
          <Card.Body className="px-0">
            <Card.Title dir="auto">
              {title.length > 60 ? title.slice(0, 55) + "..." : title}
            </Card.Title>
            <div className="channel-title">
              <span className="text-white-50 mt-2 mt-md-0 d-inline-block">
                {channelTitle}
                <CheckCircleIcon />
              </span>
            </div>
            <small className="float-end text-white-50 ">playlist</small>
          </Card.Body>
        </Link>
      </Card>
    </div>
  );
};

export default PlaylistCard;
