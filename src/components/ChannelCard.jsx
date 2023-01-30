import React from "react";
import {Link} from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import {css} from "@emotion/react";

const styles = css`
  .card-body {
    >p{
      span:first-of-type{
        color: white;
        padding: 0 5px;
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
      <Link to={`channel?id=${channelId}`}>
        <div className="card bg-dark">
          <div className="card-img-top text-center py-3">
            <img
              src={thumbnail[0].url || thumbnail[1].url}
              alt="channel logo"
              className="rounded-circle"
            />
          </div>
          <div className="card-body">
            <h3 className="text-white text-center">{title}</h3>
            <p className="text-center">
              {subscriberCount.split(" ").map(e=> <span key={e}>{e}</span>)}
              <CheckIcon className="rounded-circle mx-1" />
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
