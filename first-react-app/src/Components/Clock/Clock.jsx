import { useState, useEffect } from "react";


// Renders a digital time that updates every second
function Clock() {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // first arg is usually an arrow function
    let clockInterval = setInterval(() => tick(), 1000); //setting clockInterval to setInterval helps us clear console when unmounted aka clock turned off with button click on user side
    console.log("Clock component mounted");
    return () => {
        //any time component is unmounted, this code runs
        console.log('Clock component unmounted') 
        clearInterval(clockInterval) // this useEffect causes console to recognize unmounted and stop the function from updating
    }
  }, []); // second arg is an array of dependencies IF YOU LEAVE THIS OFF IT CRASHES YOUR APP FROM TOO MANY STATE UPDATES
 
  const tick = () => {
    setDate(new Date());
    console.log("tick"); // track the effect frequency
  };
  
  return (
    <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
    </div>
  );
}
// ++ Try removing the dependency array from useEffect
// and notice the difference in ‘tick’ log messages
// ++ Why do the console messages appear double?


export default Clock