import { useState } from "react";

function MoodChanger() {
    const [mood, setMood] = useState('happy');      //the useState is called a "hook" slide 50 of Mod6 content
    return (
        <div className="MoodChanger componentBox">
            Current Mood: {mood}
        </div>
    )
}

export default MoodChanger