import axios from "axios";
import movieTrailer from "movie-trailer";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "d4549a0d743df214c56fc1e2e70655e2";
const YTBreak = "watch?v=";

export const getVideoId = async (movie) => {
  try {
    let videoId = null;
    let count = 10;
    while (!videoId && count) {
      const res = await axios.get(
        `${URL}/movie/${movie.id}/videos?api_key=${API_KEY}`
      );
      const results = res.data.results;
      for (let i = 0; i < results.length; i++) {
        const video = results[i];

        if (video.type === "Trailer" && video.official) {
          videoId = video.key;
        }
      }
      count--;
    }

    if (!videoId) {
      videoId = await getVideoIdWithMovieTrailer(movie);
    }

    return videoId;
  } catch (error) {
    console.log(error);
  }
};

const getVideoIdWithMovieTrailer = async (movie) => {
  try {
    const videoId = await movieTrailer(null, { tmdbId: movie.id });

    return videoId.slice(videoId.indexOf(YTBreak) + YTBreak.length);
  } catch (error) {
    console.log("Movie Trailer Error");
  }
};
