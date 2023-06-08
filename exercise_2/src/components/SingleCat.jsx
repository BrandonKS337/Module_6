function SingleCat(props) {
  const { id, name, latinName, image } = props;

  return (
    <div>
      <h2>{name}</h2>
      <p>Latin Name: {latinName}</p>
      <img src={image} alt={name} />  {/* alt is set here as a placeholder for if 
      deciding to add an alt to the bigcats array at some point in future. Not needed 
      per current requirements though so just skipped tying it back in. */}
    </div>
  );
}

export default SingleCat;

