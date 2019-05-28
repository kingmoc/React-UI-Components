import React from 'react';
import './Button.scss';

const ActionButton = props => {
	console.log(props)

	return (
		<button className={`${props.actionStyles}`}>{props.text}</button>
	)
}

// ActionButton.defaultProps = {
// 	actionStyles: 'action',	
// }

const Action = () => {

	ActionButton.defaultProps = {
		actionStyles: 'action',	
	}

	return (
		<div className="action-buttons">
			<ActionButton text="&divide;"/>
			<ActionButton text="&times;"/>
			<ActionButton text="&#8722;"/>
			<ActionButton text="&#43;"/>
			<ActionButton text="&#61;"/>
		</div>
	)
}

export default Action