import React, { useEffect, useState } from "react";
import {
  HeroButton,
  HeroContainer,
  HeroDescription,
  HeroTitle,
} from "./Hero.styles";
import { getVideoId } from "../globalFunctions";
import YouTube from "react-youtube";
import Popup from "reactjs-popup";

function Hero({ movie }) {
  const [videoURL, setVideoURL] = useState("");
  const opts = {
    height: window.innerHeight < 700 ? "300" : "480",
    width: window.innerWidth < 600 ? "300" : "854",
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
    (async () => {
      const url = await getVideoId(movie);
      setVideoURL(url);
    })();
  }, [movie]);

  return (
    <>
      <div className="background-faded"></div>
      <HeroContainer background={movie?.backdrop_path}>
        <HeroTitle>{movie?.name}</HeroTitle>
        {window.innerWidth < 600 ? (
          <></>
        ) : (
          <HeroDescription>{movie?.overview}</HeroDescription>
        )}

        <Popup
          trigger={
            <HeroButton style={{ backgroundColor: "white" }}>Play</HeroButton>
          }
          position="right center"
          modal
        >
          <YouTube videoId={videoURL} opts={opts} onReady={_onReady} />
        </Popup>
      </HeroContainer>
    </>
  );
}

export default Hero;
