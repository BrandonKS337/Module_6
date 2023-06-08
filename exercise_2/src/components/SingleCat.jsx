import React from 'react';

function SingleCat(props) {
  const { id, name, latinName, image } = props;

  return (
    <div>
      <h2>{name}</h2>
      <p>Latin Name: {latinName}</p>
      <img src={image} alt={name} />
    </div>
  );
}

export default SingleCat;

