import { MoviesContainer, MoviesTitle, MoviesRow } from "./Movies.styles";
import { useEffect, useState } from "react";
import Trailer from "./Trailer";
import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "d4549a0d743df214c56fc1e2e70655e2";

function Movies({ title, movies }) {
  // const [newMovies, setNewMovies] = useState([]);

  // useEffect(() => {
  //   if (!movies || !movies.length) return;
  //   if (newMovies.length) return;
  //   const moviesWithVideo = [];

  //   (async () => {
  //     for (let i = 0; i < movies.length; i++) {
  //       const movie = movies[i];
  //       try {
  //         let videoId = null;
  //         const res = await axios.get(
  //           `${URL}/movie/${movie.id}/videos?api_key=${API_KEY}`
  //         );

  //         res.data.results.forEach((video) => {
  //           if (video.type === "Trailer" && video.official) {
  //             videoId = video.key;
  //           }
  //         });

  //         if (!videoId) continue;
  //         movie.videoId = videoId;
  //         moviesWithVideo.push(movie);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   })();

  //   setNewMovies(moviesWithVideo);
  // }, [movies]);

  return (
    <MoviesContainer>
      <MoviesTitle>{title}</MoviesTitle>
      <MoviesRow>
        {movies.map((movie) => {
          return <Trailer movie={movie} key={movie.id} />;
        })}
      </MoviesRow>
    </MoviesContainer>
  );
}

export default Movies;
