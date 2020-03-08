import React from 'react'

const SelectColor = ({ handleColorChange }) => {
	const handleChange = (e) => {
		handleColorChange(e.target.value)
	}
	return (
		<select className="round" onChange={handleChange}>
			<option value="blue">Blue</option>
			<option value="red">Red</option>
			<option value="green">Green</option>
		</select>
	)
}

export default SelectColor
