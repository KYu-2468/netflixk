import React from "react";
import YouTube from "react-youtube";
import Popup from "reactjs-popup";
import { MoviesPoster } from "./Movies.styles";

const Trailer = ({ movie }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <>
      <Popup
        trigger={
          <MoviesPoster
            key={movie.id}
            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
            alt={movie.name}
          />
        }
        position="center"
      >
        <YouTube videoId={movie.videoId} opts={opts} onReady={_onReady} />
      </Popup>
    </>
  );
};

export default Trailer;
