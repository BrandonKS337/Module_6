import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import PropsDisplayer from './components/PropsDisplayed'
import City from "./Components/City";
import Address from "./Components/Address";

function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>Playing With React/Vite!</h1>
      <p>below is an example of importing components:</p>
      <br />
    </div>
  );
}

function App() {
  //   const [count, setCount] = useState(0);

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };
  const spideyJSX = (
    <div>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  );
  const spideyJSXFragment = (
    <>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </>
  );

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {spideyJSX}
      {spideyJSXFragment}   Both of these render the same because you can use either <> OR <div> */}
      <ExampleComponent></ExampleComponent>
      {/* <PropsDisplayer /> */}


      {/* <City name="Sydney" />
      <City name="Melbourne" state="Vic" />
      <City name="Chicago" state="Illinois" country="USA" /> */}

      <City name="Newcastle">
        <div>Newcastle is a harbour city in the Australian state of New South Wales.</div>
        <div><strong>Population:</strong> 322,278 (2015)</div>
      </City>



      {/* <Address name="Bart Simpson" />
      <br />
      <Address name="Bart Simpson" houseNum="742 Evergreen Terrace" />
      <br />
      <Address
        name="Bart Simpson"
        houseNum="742 Evergreen Terrace"
        city="Springfield"
      />
      <br />
      <Address
        name="Bart Simpson"
        houseNum="742 Evergreen Terrace"
        city="Springfield"
        country="USA"
      />
      <br /> */}
    </>
  );
}

export default App;
