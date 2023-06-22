import { useEffect, useState } from "react";

function ActivityFinder() {
  const [participants, setParticipants] = useState(1);
  //   const [activity, setActivity] = useState("");
  const [activity, setActivity] = useState("DEFAULT"); // this causes the suggested activity to not show for a split second longer

    // const thisVar = 'something' // this is a variable creaeted for useRef hook/ class 6/21/23 5:44 time stamp roberts TZ

  useEffect(() => {
    // console.log("useEffect ActivityFinder"); //commented out to insert running effect instead
    console.log("running Effect");

    let ignore = false;

    fetch(
      "https://www.boredapi.com/api/activity?" + "participants=" + participants
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Activity Finder", data);
        // setActivity(data.activity); // removed and moved down 2 lines for cleanup hook slide 12
        if (!ignore) {
          setActivity(data.activity);
        }
      });

    return () => {
      ignore = true;
      console.log("Cleanup effect");
    };
  }, [participants]);

  return (
    <div>
      <h3>Activity Finder</h3>
      <label>
        Choose number of particpants:
        <select
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Suggest Activity:</strong>
        {activity}
      </div>
      <br />
    </div>
  );
}

export default ActivityFinder;
