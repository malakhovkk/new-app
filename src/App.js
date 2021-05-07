import React, { useState } from 'react';
import Table1 from './components/Table1.js';
import Pagination1 from './components/Pagination1.js';
import Status from './components/Status.js';
import UserCount from './components/UserCount.js';
import Limit from './components/Limit.js';

function App() {
	const [ active, setActive ] = useState(1);
	const [ status, setStatus ] = useState('active');
	const [ limit, setLimit ] = useState(10);
	const [ count, setCount ] = useState(100);

	function clicked_(page) {
		console.log(page);
		setActive(page);
	}
	function statusf(s) {
		setStatus(s);
	}
	function limitf(l) {
		setLimit(l.target.value);
	}
	function countc(c) {
		console.log(c.target.value);
		setCount(c.target.value);
	}
	return (
		<React.Fragment>
			<Status clicked_={statusf} />
			Limit:<Limit clicked_={limitf} />
			UserCount:<UserCount clicked_={countc} />
			<Table1 page={active} limit={limit} status={status} userCount={count} />
			<Pagination1 activeProps={active} clicked_={clicked_} />
		</React.Fragment>
	);
}

export default App;
