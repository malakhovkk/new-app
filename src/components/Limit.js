import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
function Limit({ clicked_ }) {
	function getNumbers() {
		let res = [];
		for (let i = 1; i <= 100; i++) res.push(i);
		return res;
	}
	return (
		<Form.Control as="select" value={10} onChange={(e) => clicked_(e)}>
			{getNumbers().map((el) => <option>{el}</option>)}
		</Form.Control>
	);
}

export default Limit;
