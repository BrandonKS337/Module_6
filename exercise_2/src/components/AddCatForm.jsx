import { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //create a new cat object here
    const newCat = {
      id: Date.now(), //Generates a unique ID
      name,
      latinName,
      image,
    };

    // Passes the new cat to the parent component
    onAddCat(newCat);

    /* Resets the form fields, aka sets current value of name, latinName 
        or image to an empty string.*/
    setName("");
    setLatinName("");
    setImage("");
  };

  //beginning of return statement

  return (
    //create form "parent"
    <form onSubmit={handleSubmit}>
      {/*create inputs*/}
      <label>
        {/*name input */}
        name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        {/*LatinName input */}
        Latin Name:
        <input
          type="text"
          value={latinName}
          onChange={(event) => setLatinName(event.target.value)}
        />
      </label>
      <br />
      <label>
        {/* image/setImage input */}
        Image:
        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Cat</button>
    </form>
  );
}

export default AddCatForm;
