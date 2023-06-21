import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BigCats from "./components/BigCats";
import SingleCat from "./components/SingleCat";
import AddCatForm from "./components/AddCatForm"; //Adding import for AddCatForm per exercise 5

function App() {
  // const [count, setCount] = useState(0)

  const bigCats = [
    /* in order to do the fun little button I added I found 
  that you HAVE to pull the bigCats array into the app()  or else my conent below 
  isn't working in regards to the button to randomly pick one of the cats objects */
    {
      id: 1,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image: "./src/assets/cheetah.jpg",
    },
    {
      id: 2,
      name: "Cougar",
      latinName: "Puma concolor",
      image: "./src/assets/cougar.jpg",
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
      id: 7,
      name: "Tiger",
      latinName: "Panthera tigris",
      image: "./src/assets/tiger.jpg",
    },
    {
      id: 8,
      name: "Hunter Killer EXTREME!!",
      latinName: "Faht Oranage Kat",
      image: "./src/assets/house_cat.jpg",
    },
  ];

  const [catToRender, setCatToRender] = useState({
    //this creates a placeholder and "default image" for the randomizer button
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: "./src/assets/cheetah.jpg",
  });

  const handleCatChange = () => {
    // Example function to change the cat to render
    const randomCatIndex = Math.floor(Math.random() * bigCats.length); // Generate a random index between 0 and 6
    const randomCat = bigCats[randomCatIndex]; // Get a random cat from the bigCats array
    setCatToRender(randomCat); // Set the random cat as the cat to render
  };

  return (
    <>
      <BigCats bigCatsData={bigCats} />
      {/*This portion is to render the whole BigCats array*/}
      <div>
        <h3>
          The full Big Cats list is commented out in the app.jsx file. Please
          feel free to turn it back on if you want to see entire collection of
          wonderful cats. For now enjoy the fun button instead!!
        </h3>
      </div>
      <SingleCat
        id={catToRender.id}
        name={catToRender.name}
        latinName={catToRender.latinName}
        image={catToRender.image}
        // onDeleteCat={handleDeleteCat}
      />
      <button onClick={handleCatChange}>Change Cat</button>
      {/* <AddCatForm/> */}{" "}
      {/* Don't actually need to render the form here because it's already being built into the BigCats component */}
    </>
  );
}

export default App;
