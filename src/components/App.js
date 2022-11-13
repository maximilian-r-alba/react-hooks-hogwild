import React, { useState } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Sort from "./Sort";
import hogs from "../porkers_data";
import Pigpen from "./Pigpen";

function App() {
	
	const [hogArray , setHogArray] = useState(hogs)
	const [sort, setSort] = useState('none')

	function filterHogs(greasyFilter){
		setSort('none')
		switch (greasyFilter){
			case 'greased':
				const greased = hogs.filter((hog) => hog.greased === true)
				setHogArray(greased)
				break;
			case 'non-greased':
				const nongreased = hogs.filter((hog) => hog.greased === false)
				setHogArray(nongreased)
				break;
			case 'all': 
				const allFilter = hogs
				setHogArray(allFilter)
		}
	}

	function sortHogs(criteria) {
		
		setSort(criteria)
		switch (criteria){
			case 'weight':
				const weightArray = [...hogArray].sort((a,b) => {
					return a.weight - b.weight
				})
				setHogArray(weightArray)
				break;

			case 'name':
				const nameArray = [...hogArray].sort((a,b) => {
					let nameA = a.name.toLowerCase();
					let nameB = b.name.toLowerCase();

					if(nameA<nameB){
						return -1;
					}
					if (nameA>nameB){
						return 1;
					}
					return 0;
				})

				setHogArray(nameArray)
				break;

			case 'none':
				break;
		}
	}

	return (
		<div className="App">
			<Nav />
			<Filter filterHogs={filterHogs} />
			<Sort sort = {sort} setSort = {setSort} sortHogs = {sortHogs} />
			<Pigpen hogs = {hogArray} />
		</div>
	);
}

export default App;
