function Spidey(props) {

  const { countHere, superhero} = props



  console.log(countHere)

  return (
    //because we're returning JSX use smooth brackets
    <>
      <h3 style={{ fontSize: props.countHere}}>{superhero.name}</h3>
      <blockquote>{superhero.catchPhrase}</blockquote>
      <cite>{superhero.alterEgo}</cite>
    </>
  );
}

export default Spidey;
