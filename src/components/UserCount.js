import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
function UserCount({ clicked_ }) {
	function getNumbers() {
		let res = [];
		for (let i = 1; i <= 1000; i++) res.push(i);
		return res;
	}
	return (
		<Form.Control as="select" value={100} onChange={(e) => clicked_(e)}>
			{getNumbers().map((el) => <option>{el}</option>)}
		</Form.Control>
	);
}

export default UserCount;
