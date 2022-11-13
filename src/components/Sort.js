import {React} from "react";

function Sort ({sortHogs , sort, setSort }){

    function handleSort (e){
        const sortValue = e.target.value
        setSort(sortValue)
        sortHogs(sortValue)
    }
    return <select value = {sort} onChange={handleSort}>
        <option selected value = 'none'>Deafult</option>
        <option value = 'weight'>Weight</option>
        <option value = 'name'>Name</option>
    </select>
}

export default Sort