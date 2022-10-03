import {
  MoviesContainer,
  MoviesTitle,
  MoviesRow,
  MoviesPoster,
} from "./Movies.styles";
import movieTrailer from "movie-trailer";
import { useEffect, useState } from "react";
import Trailer from "./Trailer";

function Movies({ title, movies }) {
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    if (!movies || !movies.length) return;
    if (newMovies.length) return;
    const urlBreakPoint = "watch?v=";
    const moviesWithVideo = [];

    (async () => {
      for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        const res = await movieTrailer(null, { tmdbId: movies[i].id });
        if (!res) continue;
        movie.videoId = res.slice(
          res.indexOf(urlBreakPoint) + urlBreakPoint.length
        );
        moviesWithVideo.push(movie);
      }
    })();

    setNewMovies(moviesWithVideo);
  }, [movies]);

  return (
    <MoviesContainer>
      <MoviesTitle>{title}</MoviesTitle>
      <MoviesRow>
        {newMovies.map((movie) => {
          return (
            <>
              <Trailer movie={movie} />
            </>
          );
        })}
      </MoviesRow>
    </MoviesContainer>
  );
}

export default Movies;
