import React from 'react';
import './Header.css';

const HeaderTitle = () => {
	return (

		<div className="title">
			<h4>Lambda School</h4> 
			<p>@LambdaSchool &#183; <span><CurrentDate /></span></p>
		</div>
	)
}

const CurrentDate = () => {
	let fullDate = new Date();
	let date = fullDate.getDate();
	let month = fullDate.getMonth(); 
	let monthNames = [
		"jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"
	];
	return `${date} ${monthNames[month]}`

}


export default HeaderTitle