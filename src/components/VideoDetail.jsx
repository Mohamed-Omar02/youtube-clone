import {useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {useState, useEffect} from "react";
import {fetchFromApi} from "../utils/fetchFromApi";
import {css} from "@emotion/react";
import {VideoCard, Videos} from "./";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {Collapse, Button} from "react-bootstrap";

const styles = css`
  background-color: black;
  .video {
    // width: 100%;
    > div {
      aspect-ratio: calc(16 / 9);
      width: unset !important;
      height: unset !important;
    }
    .card {
      background-color: black;

      .card-title {
        font-size: 2rem;
        padding: 20px;
        color: white;
      }
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
  const [open, setOpen] = useState(true);

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
          <div className="video col-12 col-md-9">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id.substring(3)}`}
              className="react-player"
              controls
            />
            <div className="card card-body">
              <div className="card-title" dir="auto">
                {videoInfo.title}
              </div>
              <div className="desc">
                <div className="channel-title d-flex align-items-center">
                  <h5 className="d-inline-block">{videoInfo.channelTitle}</h5>
                  <CheckCircleIcon
                    css={css`
                      height: 15px;
                      width: auto;
                    `}
                  />
                </div>
                <div className="desc-content text-start mt-3">
                  <Button
                    variant="danger"
                    aria-controls="content"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                  >
                    description
                  </Button>
                  <Collapse in={open}>
                    <div className=" text-white text-start" id="content">
                      {videoInfo.description}
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
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
