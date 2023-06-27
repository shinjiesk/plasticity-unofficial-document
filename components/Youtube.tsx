import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import "./Youtube.module.scss";

// `props` として `videoId` を受け取るように変更
interface YouTubePlayerProps {
  videoId: string;
}

function YouTubePlayer({ videoId }: YouTubePlayerProps) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // mute: 1,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      iframeClassName="youtubeIframe"
      onReady={onPlayerReady}
    />
  );
}

export default YouTubePlayer;
