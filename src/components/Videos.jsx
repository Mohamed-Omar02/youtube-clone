import React from "react";
import {VideoCard, ChannelCard} from "./";
import {css} from "@emotion/react";
import PlaylistCard from "./PlaylistCard";

const styles = css``;
const Videos = ({videos}) => {
  return (
    <div className="videos row justify-content-center">
      {videos.map((el, index) => (
        <div className="box col-10 col-md-4 col-lg-3" key={index}>
          {el.type === "video" && (
            <VideoCard
            //   css={css`>div{height: 200px,width:auto}
            // `}
              video={el}
            />
          )}
          {el.type === "channel" && (
            <ChannelCard
              channelDetail={el}
              css={css`height: 200px,width:auto
          `}
            />
          )}
          {el.type === "playlist" && (
            <PlaylistCard
              css={css`height: 200px,width:auto
          `}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Videos;
