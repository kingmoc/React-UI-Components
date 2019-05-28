import React from 'react';
import './Button.scss';

const Numbers = () => {

	NumberButton.defaultProps = {
		buttonStyles: 'default',
		// alertMs: () => alert("This click works")
	}
	
	return (
		<div className="numbers">
			<NumberButton buttonStyles="clearZero" text="0"/>
			<NumberButton text="1"/>
			<NumberButton text="2"/>
			<NumberButton text="3"/>
			<NumberButton text="4"/>
			<NumberButton text="5"/>
			<NumberButton text="6"/>
			<NumberButton text="7"/>
			<NumberButton text="8"/>
			<NumberButton text="9"/>
			<NumberButton buttonStyles="clearZero" text="clear"/>
		</div>
	)
}

const NumberButton = (props) => {
	console.log(props)

let alertMs = () => alert("This click works")



	return (
		<button onClick={alertMs} className={`${props.buttonStyles}`}>{props.text}</button>
	)
}




export default Numbers
