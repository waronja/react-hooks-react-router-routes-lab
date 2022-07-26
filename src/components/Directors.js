import { directors } from "../data";

function Directors() {
  const director = directors.map((director) => {
    const movies = director.movies;

    return (
      <div key={director.name}>
        <h2>{director.name}</h2>
        <ol>
          {movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ol>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors;