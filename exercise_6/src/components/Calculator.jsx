//imports react automaticcaly to utilize the useState hook
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
  const calculateResult = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    //this part is what will put out an error if input is not a number for num1 num2
    if (isNaN(n1) || isNaN(n2)) {
      setResult("Invalid input");
      return;
    }

    //if inputs are numbers, switch statement will take in the operator used and then run the operation 
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

export default Calculator;
