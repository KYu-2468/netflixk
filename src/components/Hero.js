import React, { useEffect, useState } from "react";
import {
  HeroButton,
  HeroContainer,
  HeroDescription,
  HeroTitle,
} from "./Hero.styles";
import axios from "axios";
import YouTube from "react-youtube";
import Popup from "reactjs-popup";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "d4549a0d743df214c56fc1e2e70655e2";

const getVideoId = async (movie) => {
  let videoId = null;
  const res = await axios.get(
    `${URL}/movie/${movie.id}/videos?api_key=${API_KEY}`
  );

  res.data.results.forEach((video) => {
    if (video.type === "Trailer" && video.official) {
      videoId = video.key;
    }
  });

  if (!videoId) return null;
  return videoId;
};

function Hero({ movie }) {
  const [videoURL, setVideoURL] = useState("");
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

  useEffect(() => {
    if (!movie) return;
    (async () => {
      const url = await getVideoId(movie);
      setVideoURL(url);
    })();
  }, [movie]);

  return (
    <HeroContainer background={movie?.backdrop_path}>
      <HeroTitle>{movie?.name}</HeroTitle>
      <HeroDescription>{movie?.overview}</HeroDescription>
      <Popup
        trigger={<HeroButton>Play</HeroButton>}
        position="right center"
        modal
      >
        <YouTube videoId={videoURL} opts={opts} onReady={_onReady} />
      </Popup>

      {/* <HeroButton>My List</HeroButton> */}
    </HeroContainer>
  );
}

export default Hero;
