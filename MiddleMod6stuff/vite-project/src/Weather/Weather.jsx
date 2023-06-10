import { useState } from "react";
import CheckWeather from "./CheckWeather";
import Temperature from "./Temperature";
import ChangeUnits from "./ChangeUnits";

function Weather() {
  const [weather, setWeather] = useState("sunny");
  const [tempCelcius, setTempCelcius] = useState(27);
  const [units, setUnits] = useState('C')

  const handleWeatherChange = (newWeather, newTemp) => {
  setWeather(newWeather);
  setTempCelcius(newTemp);
}

    const handleUnitChange = (newUnits) => {
        setUnits(newUnits)
    }

return (
  <div className="Weather componentBox">
    <h2>Today's Weather</h2><br/>
    <ChangeUnits handleUnitChange={handleUnitChange} />
    <br/>
    <div>
      <strong>{weather}</strong> with a temp of 
      <br/>
      <Temperature temp={tempCelcius} units={units} />
    </div>
    <br/>
      <CheckWeather onWeatherChange={handleWeatherChange} />
      
  </div>
);
}
export default Weather