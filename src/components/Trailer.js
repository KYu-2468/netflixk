import React, { useEffect } from "react";
import YouTube from "react-youtube";
import Popup from "reactjs-popup";
import { MoviesPoster } from "./Movies.styles";
// import "reactjs-popup/dist/index.css";

const Trailer = ({ movie }) => {
  const opts = {
    height: "432",
    width: "768",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  if (!movie.poster_path) return <></>;

  return (
    <>
      <Popup
        trigger={
          <MoviesPoster
            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
            alt={movie.name}
          />
        }
        position="right center"
        modal
      >
        <YouTube videoId={movie.videoId} opts={opts} onReady={_onReady} />
      </Popup>
    </>
  );
};

export default Trailer;
