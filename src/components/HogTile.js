import React, { useState } from "react";

function HogTile({hog}){
    const {name , image , greased , weight, specialty} = hog
    const highestMedal = hog['highest medal achieved']
    const [detailToggle, setDetailToggle] = useState(false)

    function showDetail(e){
        setDetailToggle(!detailToggle)
    }

return <div onClick={showDetail}>
        <h1>{name}</h1>
        <img src = {image} alt = {'picture of ' + name}></img>
       { detailToggle ? <div>
            <p>Specialty: {specialty}</p>
            <p>Weight: {weight}</p>
            <p>Greased?: {greased ? 'Yes' : 'No'}</p>
            <p>Highest Medal: {highestMedal}</p>
        </div> : null}
    </div>
}

export default HogTile