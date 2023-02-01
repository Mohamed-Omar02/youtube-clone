import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {demoVideoUrl} from "../utils/constants";
import {css} from "@emotion/react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";

const styles = css`
  background-color: black;
  border: 0;
  .card-img-top {
    background-color: transparent;
    border-radius: 10px;
    // max-height: 100px;
    max-width: 100%;
  }
  .card-body {
    background-color: black;
    min-height: 38.38px;

    .channel-title {
      color: #838383;
      font-size: 0.75rem;
      display: inline-block;
      svg {
        margin: 0 3px;
        height: 15px;
        width: auto;
      }
    }
  }
  .card-title {
    color: white;
    font-size: 1rem;
    white-space: break-spaces;
    min-height: 38.38px;
    max-height: 38.38px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const VideoCard = ({
  video: {
    videoId,
    title,
    thumbnail,
    channelTitle,
    viewCount,
    publishedText,
    channelThumbnail,
    authorThumbnail ,
  },
}) => {
  return (
    <Card className="d-block my-2" css={styles}>
      <Link
        to={videoId ? `/video/id=${videoId}` : demoVideoUrl}
        className="text-decoration-none"
      >
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
        <Card.Body className="px-0">
          <Card.Title dir="auto">
            {title.length > 60 ? title.slice(0, 55) + "..." : title}
          </Card.Title>
          <div className="row">
            <div className="col-2">
              {channelThumbnail && (
                <img
                  src={channelThumbnail[0].url}
                  alt="channelThumbnail"
                  className="rounded-circle img-fluid d-block w-100"
                />
              )}
              {authorThumbnail && (
                <img
                  src={authorThumbnail[0].url}
                  alt="channelThumbnail"
                  className="rounded-circle img-fluid d-block w-100"
                />
              )}
            </div>
            <div className="col p-0">
              <p className="channel-title mb-0">
                <span className="text-white-50 mt-2 mt-md-0 d-inline-block">
                  {channelTitle}
                  <CheckCircleIcon />
                </span>
                <span className="mt-2 mb-0 text-white-50 d-block">
                  <span>{viewCount} views</span>
                  <CircleIcon style={{width: "7px"}} />
                  <span>{publishedText}</span>
                </span>
              </p>
            </div>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default VideoCard;
