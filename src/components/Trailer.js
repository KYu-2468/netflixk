import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Popup from "reactjs-popup";
import { MoviesPoster } from "./Movies.styles";
import { getVideoId } from "../globalFunctions";

const Trailer = ({ movie }) => {
  const [videoURL, setVideoURL] = useState("");
  const opts = {
    height: window.innerHeight < 700 ? "300" : "480",
    width: window.innerWidth < 600 ? "300" : "800",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  useEffect(() => {
    if (!movie) return;
    let url = null;
    (async () => {
      url = await getVideoId(movie);
      console.log("url: ", url);
      setVideoURL(url);
    })();
  }, [movie]);

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
        <YouTube videoId={videoURL} opts={opts} onReady={_onReady} />
      </Popup>
    </>
  );
};

export default Trailer;
