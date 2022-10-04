import { MoviesContainer, MoviesTitle, MoviesRow } from "./Movies.styles";
import Trailer from "./Trailer";

function Movies({ title, movies }) {
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
