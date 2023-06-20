import { useState } from "react";
import SingleCat from "./SingleCat"; // pulls in new SingleCat component we created to render one cat at a time
import AddCatForm from "./AddCatForm"; //have to pull AddCatForm into this in order to get the forms to work
import bigCatsData from "../assets/bigCatsData"; //importing array from new file inside assets folder

function BigCats() {
  // const bigCats = [
  //CHANGING THIS FOR EXERCISE 4 REQUIREMENTS TO NEW VARIABLE ARRAY

  <bigCatsData />; // pulled this whole array out and placed it into it's own file in assets folder to eliminate 25+ lines of code

  /*CREATING HANDLERS FOR EXERCISE 4 REQUIREMENTS
  CREATE BUTTON FOR ALPHABETICAL SOR
  CREATE BUTTON FOR REVERSING LIST*/

  const [bigCats, setBigCats] = useState(bigCatsData);
  const [sorted, setSorted] = useState(false);
  // Exercise5: adding in a "state" for storing the list of cats so that it can act as a librarydb.....kinda
  const [cats, setCats] = useState(bigCatsData);

  const handleSort = () => {
    /* had to modify the code here from Cats to cats to fix sorting/filtering/reset. 
      BigCats is being used elseWhere for different purposes */
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    /*The localeCompare() method returns a number indicating whether a reference string comes before, or after, or 
    is the same as the given string in sort order. In implementations with Intl.Collator API support, this method simply calls Intl.Collator .Mar 26, 2023*/
    setCats(sortedCats);
    setSorted(true);
  };

  const handleReverse = () => {
    const reversedCats = [...cats].reverse(); // had to modify the code here from BigCats to cats to fix sorting/filtering/reset. BigCats is being used elseWhere for different purposes
    setCats(reversedCats);
    setSorted(false);
  };

  // adding one more button for fun that resets the original list undoing the alphabetical/reverse sorts

  const handleReset = () => {
    setCats(bigCatsData);
    setSorted(false);
  };

  //Adding a handler for adding the new cat to the list
  const handleAddCat = (newCat) => {
    setCats((prevCats) => [...prevCats, newCat]);
  };

  //Exercise 4: Filter cats from Panthera family with button
  //new handler to filter them out
  const handleFilterPanthera = () => {
    const filteredCats = bigCats.filter((cat) =>
      cat.latinName.toLowerCase().includes("panthera")
    );
    setCats(filteredCats);
    setSorted(false);
  };

  //commenting this out as part of exercise 5 to rename the variable
  // const catsList = bigCats.map((cat) => (
  const catsList = cats.map((cat) => (
    // <div key={cat.name}>               //stricty for pulling the items as a list in its entirety
    //   <p>Name: {cat.name}</p>
    //   <p>Latin Name: {cat.latinName}</p>
    // </div>

    // <div key={cat.id}>           // If you want to use BigCats and pull them with id
    //   <p>Name: {cat.name}</p>
    //   <p>Latin Name: {cat.latinName}</p>
    // </div>

    <SingleCat // This segment pulls in the SingleCat component and passes through all of the available keys. .... keys might not be the correct word here .. need to ask.
      key={cat.id}
      id={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      image={cat.image}
    />
  ));

  // return catsList;
  //  CHANGING RETURN STATEMENT TO BUILD UP FOR EXERCISE 4

  return (
    <>
      <div>
        <button onClick={handleSort}>Sort Alphabetically</button>
        <button onClick={handleReverse}>Reverse the List</button>
        <button onClick={handleReset}>Reset the List</button>
        <button onClick={handleFilterPanthera}>Filter Panthera family</button>
      </div>
      {sorted && <p>List is sorted alphabetically</p>}
      {!sorted && <p>List is in its original order</p>}
      {catsList}
      <AddCatForm onAddCat={handleAddCat} />
    </>
  );
}

export default BigCats;

/* hint by Robert
create filter:
ex: const handleFilterMovies = (year) => {
  let newMovies = currentMovies.filter(movie => movie.year < year)

  setCurrentMovies(newMovies)
}

///create button in return statement
<button onClick{() => handleFilterMovies(2004)Panthera family filter</button>}


//for second part create button that pulls original array and then sets newMovies to movies
*/
