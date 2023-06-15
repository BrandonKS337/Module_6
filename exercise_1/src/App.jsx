import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./Components/Greeting.jsx";
import AddCatForm from "../../exercise_2/src/components/AddCatForm";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* <Greeting name="Jimmy" /> */}
      {/*This will render Greeting Component while passing the "prop" 
      name through*/}

      {/* <Greeting /> */}
      {/*This greeting component call will show Hello World do to component 
      having ternary statement in the Greeting.jsx file */}

      <Greeting name="Joe Easy">
        <h1>Salutations RANDOM VIEWERS!!!!! {<br />} I am a greeting message per step 4 of the exercise 1 requirements!!</h1>
        <p>I'm using Children elements here from app.jsx</p>
        <h4>The first line is using an h1 tag and is imbedded underneath the Greeting component call in the app.jsx</h4>
        <h5>I'm a new child element taking in the props.child change in Greeting.jsx</h5>
      </Greeting>
      {/* <Greeting>Hello</Greeting> */}
    </>
  );
}

export default App;
