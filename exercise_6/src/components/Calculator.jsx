//imports react automatically to utilize the useState hook
import React, { useState } from "react";

// create function/component
function Calculator() {
  //set in variables for storing the 2 inputs, num1, num2 operator
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");

  // set a stored variable for the result in order to render the solution to page.
  const [result, setResult] = useState("");

  // handler for when user inputs are changed
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "num1") {
      setNum1(value);
    } else if (name === "num2") {
      setNum2(value);
    } else if (name === "operator") {
      setOperator(value);
    }
  };

  //handler for when user clicks "calculate" button.
  //takes num1 and num2 and checks if inputs are valid (numeric value)
  /* paresFloat: converts the input numbers from strings to "floating-point" numbers/aka floats 
  (extracts numbers from start of a string and stops once it finds something not a number extracting everything up to that point.)
  Used parseFloat to ensure user doesn't accidentally input something other than a number (not using any complicated operators that require letters)*/
  const calculateResult = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    //

    /* this part is what will put out an error if input is not a number for num1 num2.
    Basically what I was referring to above with parseFloat. This part says if input cant be "parsed as a float" then it returns NaN(Not a Number)
    and my if statement will set result to invalid instead of some crazy solution that is most likely inaccurate if the browser even runs it in the first place
    without throwing an error into the console.*/
    if (isNaN(n1) || isNaN(n2)) {
      setResult("Invalid input");
      return;
    }

    //if inputs are numbers (pass through the parseFloat), the below switch statement will take in the operator user typed and then run the math operation
    let calculatedResult;
    switch (operator) {
      case "+":
        calculatedResult = n1 + n2;
        break;
      case "-":
        calculatedResult = n1 - n2;
        break;
      case "*":
        calculatedResult = n1 * n2;
        break;
      case "/":
        calculatedResult = n1 / n2;
        break;
      default:
        calculatedResult = "Invalid operator";
    }

    // this stores the updated result to be rendered
    setResult(calculatedResult);
  };

  /*rendering section:
 The synopsis: renders inputs for num1/num2/operator. Sets the values their values to current "state" values and 
 uses the onChange "event" monitor.....watcher?? basically monitors for changes in input fields.
 adding in a <button> for calculating the result
 last thing was to render the result, simple <p> that will show actual result or an error msg*/
  return (
    <div>
      <input
        type="number"
        name="num1"
        value={num1}
        onChange={handleInputChange}
      />
      <br />
      <br />

      <input
        type="text"
        name="operator"
        value={operator}
        onChange={handleInputChange}
      />
      <br />
      <br />

      <input
        type="number"
        name="num2"
        value={num2}
        onChange={handleInputChange}
      />
      <br />
      <br />

      <button onClick={calculateResult}>Calculate</button>

      <p>Result: {result}</p>
    </div>
  );
}

/* The reason chose to use onChange here instead of trying to set it to pull directly when called was to work with the real-time data collection.
Personal notes expanding on onChange to refer back to later: (benefits to "real time input feedback using onChange per websites)
-- Going "Real-Time" lets user see results of their changes immediately as they modify input fields..helps with interactivity and responsive 
    "user experience" (aka let's them understand how things work better) 
-- Capturing input in real-time can help validate/handle errors as user types into the input fields. Ex: can render error msg if input is invalid 
    without user needing to click "calculate" button before displaying error.
-- Flexibility: storing input real-time allows you to perform additional actions or calcs based on the input AS the user provides it. (for use with "dynamic behavior")
    This allows you to do things like a preview of result or updating other things in the UI as the input is changed.
    
Collecting at time of Calculate clicks advantages:
-- Control over Calculation: doing it the other way of "when clicked pull input data" means control over WHEN data is pulled and how calc is performed. 
    Can be useful if you need to apply additional checks or transformations to input before performing the calculation.
-- Reduces computation time: if calcs are complicated or involve external resources running real-time will probably reduce live computations during period that user is continuously changing inputs without hitting Calculate.



Good source material for onClick vs OnChange:
https://www.quora.com/What-is-the-difference-between-onchange-and-onclick-in-JavaScript*/





export default Calculator;
