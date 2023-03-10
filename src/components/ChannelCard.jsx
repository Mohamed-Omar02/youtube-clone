import React from "react";
import {Link} from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import {css} from "@emotion/react";

const styles = css`
  .card {
    background-color: #212529;
  }
  .card-body {
    background-color: #212529;
    h5 {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    > p {
      span:first-of-type {
        color: white;
        padding: 0 5px;
      }
      span {
        color: #dc3545;
      }
    }
    svg {
      color: red;
      height: 10px;
      width: auto;
      background-color: white;
    }
  }
`;
const ChannelCard = ({
  channelDetail: {channelId, thumbnail, title, subscriberCount},
}) => {
  return (
    <div className="channel my-2" css={styles}>
      <Link to={`channel/${channelId}`}>
        <div className="card bg-dark">
          <div className="card-img-top text-center py-3">
            <img
              src={thumbnail[0]? thumbnail[0].url:thumnail[1].url}
              alt="channel logo"
              className="rounded-circle"
            />
          </div>
          <div className="card-body">
            <h5 className="text-white text-center ">{title}</h5>
            <p className="text-center">
              {subscriberCount.split(" ").map((e) => (
                <span key={e}>{e}</span>
              ))}
              <CheckIcon className="rounded-circle mx-1" />
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
