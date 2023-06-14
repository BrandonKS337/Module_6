import { useState } from "react"

/* Whole Purpose of this entire section is to create a purposeful error 
and render that Error message component on the page */


function Bomb() {
    throw new Error('Big Boom booOoOOooOOOOOoMM')

}

function ExplodingBomb() {
    const [exploded, setExploded] = useState(false)

    return(
        <div>
            <button onClick={() => setExploded(!exploded)}>DANGER: Clock to explode bomb!</button>

            {exploded ? <Bomb /> : null}
        </div>
    )
}

export default ExplodingBomb