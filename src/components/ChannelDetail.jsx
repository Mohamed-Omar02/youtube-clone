import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {css} from "@emotion/react";
import {fetchFromApi} from "../utils/fetchFromApi";
import {ChannelCard} from "./";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {Videos} from "./";

const styles = css`
  background-color: black;
  min-height: calc(100vh - 71px);
  color: white;
`;
const ChannelDetail = () => {
  const {id} = useParams();
  const [channelInfo, setChannelInfo] = useState("second");
  useEffect(() => {
    fetchFromApi(`channel?id=${id}`)
      .then((res) => res)
      .then((res) => setChannelInfo(res));
  }, [id]);
  const {meta, data} = channelInfo;
  return (
    <div className="channel-detail" css={styles}>
      {meta && (
        <>
          <div className="channel-head">
            <div className="banner">
              <img
                src={meta?.image?.banner[2]?.url}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="thumbnail-info mt-3">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-3 text-end">
                    <img
                      src={meta?.thumbnail[1]?.url}
                      alt="channelLogo"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="col">
                    <h3>
                      {meta.title}
                      <span>
                        <CheckCircleIcon />
                      </span>
                    </h3>
                    <h6 className="text-white-50">
                      {meta.subscriberCount}
                      <span className="text-danger"> Subcriber</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {data && (
            <div className="channel-body mt-5">
              <div className="container">
                <h3 className="text-danger">Videos</h3>
                <Videos videos={data} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ChannelDetail;
