import react from "react";
import HogTile from "./HogTile";

function Pigpen ({hogs}) {
    const hogtiles = hogs.map((hog) => <HogTile hog = {hog}></HogTile>)
    return <>
    {hogtiles}
    </>
}

export default Pigpen