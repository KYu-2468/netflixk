import { MoviesContainer, MoviesTitle } from "./Movies.styles";

function Movies({ title, movies }) {
  return (
    <MoviesContainer>
      <MoviesTitle>{title}</MoviesTitle>
    </MoviesContainer>
  );
}

export default Movies;
