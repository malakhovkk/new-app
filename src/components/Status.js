import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
function App({ clicked_ }) {
	const [ status, setStatus ] = useState('active');
	return (
		<DropdownButton id="dropdown-basic-button" title={status}>
			<Dropdown.Item
				onClick={() => {
					setStatus('active');
					clicked_('active');
				}}
			>
				active
			</Dropdown.Item>
			<Dropdown.Item
				onClick={() => {
					setStatus('pending');
					clicked_('pending');
				}}
			>
				pending
			</Dropdown.Item>
			<Dropdown.Item
				onClick={() => {
					setStatus('disable');
					clicked_('disable');
				}}
			>
				disable
			</Dropdown.Item>
		</DropdownButton>
	);
}

export default App;
