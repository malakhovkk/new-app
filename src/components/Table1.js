import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Table1({ page, limit, status, userCount }) {
	const [ data, setData ] = useState(null);
	useEffect(
		() => {
			console.log(
				`https://white3snet.com/list.php?userCount=${userCount}&page=${page}&limit=${limit}&status=${status}`
			);

			axios
				.get(
					`https://white3snet.com/list.php?userCount=${userCount}&page=${page}&limit=${limit}&status=${status}`
				)
				.then((res) => {
					console.log(res);
					setData(res.data.data);
				})
				.catch((err) => alert(err));
		},
		[ page, limit, status, userCount ]
	);

	function getKeys() {
		return data ? Object.keys(data[0]) : [];
	}
	const keys = getKeys().map((el, key) => <th key={key}>{el}</th>);
	const vals =
		data && data.map((el, key) => <tr key={key}>{getKeys().map((el2, key2) => <td key={key2}>{el[el2]}</td>)}</tr>);
	return (
		<Table striped bordered hover>
			<thead>
				<tr>{data && keys}</tr>
			</thead>
			<tbody>{data && vals}</tbody>
		</Table>
	);
}

export default Table1;
