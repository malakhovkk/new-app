import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pagination1({ activeProps, clicked_ }) {
	let items = [];
	const [ active, setActive ] = useState(activeProps);
	for (let number = 1; number <= 20; number++) {
		items.push(
			<Pagination.Item
				key={number}
				active={number === active}
				activeLabel=""
				onClick={() => {
					setActive(number);
					clicked_(number);
				}}
			>
				{number}
			</Pagination.Item>
		);
	}
	return (
		<React.Fragment>
			<Pagination>{items}</Pagination>
		</React.Fragment>
	);
}

export default Pagination1;
