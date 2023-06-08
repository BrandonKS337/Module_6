import SingleCat from "./SingleCat"; // pulls in new SingleCat component we created to render one cat at a time

function BigCats() {
  const bigCats = [
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
  ];

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
  ));

  return catsList;
}

export default BigCats;
