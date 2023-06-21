import React from "react"; //not sure if REALLLLY needed but adding react import because were using react to run the app

function SingleCat(props) {
  const { id, name, latinName, image, onDeleteCat } = props; // added onDeleteCat to props handle state change/delete input from button click
  //SingleCat component receives listed "props" as inputs in order to render details of a single cat
  //const variable here destructured/breaks down input to grab individual values

  // Exercise 5. Add delete link for individual "cats" to be removed from list/array.
  // create handler for delete function
  const handleDelete = () => {
    onDeleteCat(id);
  };

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
      <br />
      <button onClick={handleDelete}>Remove Cat</button> {/*Actual button for user to click in order to remove cat from list*/}
    </div>
  );
}

export default SingleCat; //this export is being pulled directly into BigCats.jsx component not into the app.jsx. 
