import { useRef } from "react";

export default function RefCounter() {
  //can include export here instead of bottom depending on the component layout
  let countRef = useRef(0);
  let count = 0;

  function handleClick() {
    countRef.current = countRef.current + 1;
    count = count + 1;
    alert(`You clicked ${countRef.current} (${count}) times!`);
  }

  return (
    <div>
      <button onClick={handleClick}>
        REFCOUNTER: Click me!
        {/* try rendering {count} or {countRef.current} here */}
        <h3>Count: {count}</h3>
        <h3>CountRef: {countRef.current}</h3>
      </button>
    </div>
  );
}
