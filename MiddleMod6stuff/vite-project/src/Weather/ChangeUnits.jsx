function ChangeUnits(props) {
  const changeUnit = (newUnit) => {
    props.handleUnitChange(newUnit)
  }

  return (
    <>
      <button onClick={() => changeUnit("F")}>fahrenheit</button>
      <button onClick={() => changeUnit("C")}>Celcius</button>
    </>
  );
}

export default ChangeUnits