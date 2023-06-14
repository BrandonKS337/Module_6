import { useState } from "react";
import Movie from "./Movie";

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
    id: 4,
    title: "Im a random movie",
    year: 2029,
    synopsis: "not a real moveie",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
  },
];

function MoviesList() {
  const [currentMovies, setCurrentMovies] = useState(movies);

  const movieItems = currentMovies.map((movie) => (
    // <li key={movie.id}>{movie.title}</li>
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  const handleAddMovie = (newMovieToAdd) => {
    let newMovie = {
      ...newMovieToAdd,
      id: currentMovies.length + 1,
    };
    let newMovies = [...currentMovies, newMovie];

    setCurrentMovies(newMovies);
  };

  const handleReverseMovies = () => {
    //first clone of original, so we don't mutate it
    console.log("button clicked"); // added to troubleshoot reverse not working

    //to modify and update state here are the steps:

    //First:
    let newMovies = [...currentMovies];
    //Second:
    newMovies.reverse(); // ModiFies the clone
    //Third:
    setCurrentMovies(newMovies); // sets updated clone in state
  };

  return (
    <div className="MoviesList componentBox">
      <ul>
        {/* { movies.map(movie => (   
                    //normally use {} but because rendering object use ()
                    <li key={movie.id}>{movie.title}</li>
                ))} */}
        {/* can also move movie items out of the return to make it a 
                variable and then call it like below */}
        {movieItems} {/*removed to include the reverse button*/}
      </ul>
      

      <button onClick={() => handleAddMovie(formData)}>Add Movie</button>

      <button onClick={() => handleFilterMovies(2000)}>Filter Movies</button>

      <button onClick={handleReverseMovies}>Reverse List</button>
    </div>
  );
}

export default MoviesList;