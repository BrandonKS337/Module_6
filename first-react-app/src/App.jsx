import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Spidey from "./Spidey";
import Welcome from "./Components/Welcome";

function App() {
  const [count, setCount] = useState(0); // this segment is what controls the count's starting number on webpage

  const [count2, setCount2] = useState(100);

  const updateCount = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility!",
  };

  const batman = {
    name: "Batman",
    alterEgo: "Bruce Wayne",
    catchPhrase: "I'm Batman",
  };

  // const spideyJSX = (
  //   <>
  //     <h3 style={{ fontSize: count}} className={count}>{spiderman.name}</h3>
  //     <blockquote>{spiderman.catchPhrase}</blockquote>
  //     <cite>{spiderman.alterEgo}</cite>
  //   </>
  // );

  return (
    <> {/* <>= <React.Fragment> */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => updateCount()}>count is {count}</button>
        <button onClick={() => setCount2((count2) => count2 + 10)}>
          count is {count2}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Spidey countHere= {count} superhero={spiderman}/>
      <Spidey countHere= {count2} superhero={batman}/>

      {<Welcome name="students">
        <p>Child of Welcome</p>
        <p>Hey Hey Hey</p>
      </Welcome>}
    </>
  );
}

export default App;
