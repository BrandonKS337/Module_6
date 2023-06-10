import { useState } from "react";

function MoodChanger() {
  const [mood, setMood] = useState("happy"); //the useState is called a "hook" slide 50 of Mod6 content

  const consoleStuff = ()=> {
    console.log('Delay:', mood)
  }

  // Calls setMood with a fixed value of 'ecstatic'
  //begin with 'handle prefix by convention
  const handleWinLotto = () => {
    setMood("ecstatic");
    setTimeout(consoleStuff, 500)
    console.log(mood) //will be the previous/old value, not 'ecstatic' since re-render has been triggered but not yet completed
  };
  //Calls setMood with a contional state value
  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") {
      newMood = "really stressed";
    } else if (mood === "really stressed") {
      newMood = "giving up";
    } else {
      //switching from else if to else here makes the loop stop at this point instead of looping back up to stressed and repeating the statements forever
      newMood = "dead";
    }

    setMood(newMood);
  };

  return (
    <>
      <div className=" MoodChanger componentBox"> Current: {mood}</div>
      <button onClick={() => setMood("dead")}>Overtime</button>
      <button onClick={() => setMood("tired")}>Stay Up Late </button>
      <button onClick={() => setMood("What even is sleep anymore")}>
        All nighter{" "}
      </button>

      <button onClick={handleRunningLate}>Running Late</button>
      <button onClick={handleWinLotto}>Win Lotto</button>
    </>
  );
}

export default MoodChanger;
