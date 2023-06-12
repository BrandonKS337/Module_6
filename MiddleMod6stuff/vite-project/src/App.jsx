import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MoodChanger from "./MoodChanger.jsx/MoodChanger";
import Phrases from "./Phrases/Phrases";
// import CheckWeather from "./Weather/CheckWeather";
// import Temperature from "./Weather/Temperature";
import Weather from "./Weather/Weather";
import LogInForm from "./Login/LoginForm";
import SubmitForm from "./Login/SubmitForm";

function App() {
  return (
    <>
      <MoodChanger />
      <br />
      <Phrases />
      <br />
      <br />
      <br />
      <Weather />
      {/* <Temperature />
      <CheckWeather /> */}

      <br />

      <LogInForm/>
    </>
  );
}

export default App;
