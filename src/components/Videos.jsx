import {VideoCard, ChannelCard} from "./";
import PlaylistCard from "./PlaylistCard";

const Videos = ({videos, type}) => {
  return (
    <div className="videos row justify-content-center">
      {videos.map((el, index) => (
        <div className="box col-10 col-md-4 col-lg-3" key={index}>
          {el.type === "video" && <VideoCard video={el} />}
          {type && <VideoCard video={el} />}
          {el.type === "channel" && <ChannelCard channelDetail={el} />}
          {el.type === "playlist" && <PlaylistCard playlistDetail={el} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
