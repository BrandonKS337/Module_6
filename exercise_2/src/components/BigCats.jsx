import { useState } from "react";
import SingleCat from "./SingleCat"; // pulls in new SingleCat component we created to render one cat at a time

function BigCats() {
  // const bigCats = [
  //CHANGING THIS FOR EXERCISE 4 REQUIREMENTS TO NEW VARIABLE ARRAY

const bigCatsData = [
    {
      id: 1,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image: "./src/assets/cheetah.jpg",
    },
    {
      id: 7,
      name: "Tiger",
      latinName: "Panthera tigris",
      image: "./src/assets/tiger.jpg",
    },
    {
      id: 3,
      name: "Jaguar",
      latinName: "Panthera onca",
      image: "./src/assets/jaguar.jpg",
    },
    {
      id: 4,
      name: "Leopard",
      latinName: "Panthera pardus",
      image: "./src/assets/leapard.jpg",
    },
    {
      id: 5,
      name: "Lion",
      latinName: "Panthera leo",
      image: "./src/assets/lion.jpg",
    },
    {
      id: 6,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image: "./src/assets/snow_leapard.jpg",
    },
    {
      id: 2,
      name: "Cougar",
      latinName: "Puma concolor",
      image: "./src/assets/cougar.jpg",
    },
    
    {
      id:8,
      name: "Hunter Killer EXTREME!!",
      latinName: "Faht Oranage Kat",
      image: "./src/assets/house_cat.jpg"
    },
  ];

  /*CREATING HANDLERS FOR EXERCISE 4 REQUIREMENTS
  CREATE BUTTON FOR ALPHABETICAL SOR
  CREATE BUTTON FOR REVERSING LIST*/

  const [bigCats, setBigCats] = useState(bigCatsData)
  const [sorted, setSorted] = useState(false)

  const handleSort = () => {
    const sortedCats = [...bigCats].sort((a,b) => a.name.localeCompare(b.name));
    setBigCats(sortedCats)
    setSorted(true)
  };

  const handleReverse = () => {
    const reversedCats = [...bigCats].reverse();
    setBigCats(reversedCats);
    setSorted(false);
  }

  // adding one more button for fun that resets the original list undoing the alphabetical/reverse sorts

  const handleReset = () => {
    setBigCats(bigCatsData);
    setSorted(false)
  }
  
  


  const catsList = bigCats.map((cat) => (
    // <div key={cat.name}>               //stricty for pulling the items as a list in its entirety
    //   <p>Name: {cat.name}</p>
    //   <p>Latin Name: {cat.latinName}</p>
    // </div>

    // <div key={cat.id}>           // If you want to use BigCats and pull them with id
    //   <p>Name: {cat.name}</p>
    //   <p>Latin Name: {cat.latinName}</p>
    // </div>

    <SingleCat   // This segment pulls in the SingleCat component and passes through all of the available keys. .... keys might not be the correct word here .. need to ask.
      key={cat.id}
      id={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      image={cat.image}
    />
  ))

  // return catsList;
  //  CHANGING RETURN STATEMENT TO BUILD UP FOR EXERCISE 4

  return (
  <>
      <div>
        <button onClick={handleSort}>Sort Alphabetically</button>
        <button onClick={handleReverse}>Reverse List</button>
        <button onClick={handleReset}>Reset the List</button>
      </div>
      {sorted && <p>List is sorted alphabetically</p>}
      {!sorted && <p>List is in its original order</p>}
      {catsList}
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
