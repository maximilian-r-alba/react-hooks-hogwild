import React from "react";

function Filter({filterHogs}){

    return <select onChange = {(e) => filterHogs(e.target.value)}>
        <option value = "all">All</option>
        <option value = "greased">Greased</option>
        <option value = "non-greased">Non-Greased</option>
    </select>
}

export default Filter