import { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [synopsis, setSynopsis] = useState("");

  // ++ add support for the synopsis field as well, here and below
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data))
    onAddMovie({ title, year, synopsis }); //this is the "below" part mentioned on line 7
    setTitle(""); //after submitting this resets the title input clearing it for next use.
    setYear(""); //after submitting this resets the year input clearing it for next use.
    setSynopsis(""); //after submitting this resets the synopsis input clearing it for next use.
  };

  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Year Released:
          <input
            name="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <br />
        <label>
          Movie Synopsis:
          <input
            name="synopsis"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
          />
        </label>
        <br />
        <br />

        <button>Add Movie</button>
        <br />
      </form>
      <br />
    </div>
  );
}
// add this in MoviesList component
const handleAddMovie = (newMovie) => {
  newMovie.id = currentMovies.length + 1; // unreliable but succinct
  setCurrentMovies([...currentMovies, newMovie]);
};
<AddMovieForm onAddMovie={handleAddMovie} />;

export default AddMovieForm;
