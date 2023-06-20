function SingleCat(props) {
  const { id, name, latinName, image } = props;
  //SingleCat component receives listed "props" as inputs in order to render details of a single cat
  //const variable here destructures/breaks down input to grab individual values




  return (
    <div>
      <h2>{name}</h2> 
      {/*Puts input for name into h2 tag*/}

      <p>Latin Name: {latinName}</p>
      {/*Takes the input from latinName into a p tag */}

      <img id={id} src={image} alt={name} style={{ width: "250px" }} />{" "}
      {/*Shows image of cat with set width of 250px using "inline" style css*/}
      {/* alt is set here as a placeholder for if 
      deciding to add an alt to the bigcats array at some point in future. Not needed 
      per current requirements though so just skipped tying it back in. */}
    </div>
  );
}

export default SingleCat;
