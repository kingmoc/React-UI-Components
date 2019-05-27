import React from 'react';
import './Button.scss';

const NumberButton = props => {
	return (
		<button className={`${props.buttonStyles}`}>{props.text}</button>
	)
}

NumberButton.defaultProps = {
	buttonStyles: 'default',	
}

const Numbers = () => {
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

export default Numbers
