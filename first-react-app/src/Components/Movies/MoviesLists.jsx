import Movie from "./Movie";

function MoviesList() {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  const movieItems = movies.map((movie) => (
    // <li key={movie.id}>{movie.title}</li>
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  return (
    <div className="MoviesList componentBox">
      <ul>
        {/* { movies.map(movie => (   
                    //normally use {} but because rendering object use ()
                    <li key={movie.id}>{movie.title}</li>
                ))} */}

        {/* can also move movie items out of the return to make it a 
                variable and then call it like below */}
        {movieItems}
      </ul>
    </div>
  );
}

export default MoviesList;
