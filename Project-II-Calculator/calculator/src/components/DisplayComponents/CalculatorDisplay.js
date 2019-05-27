import React from 'react';
import './Display.scss';

const CalculatorDisplay = props => {
	return (
		<div className="calc-display">
		
			<div className={`${props.displayStyle}`}>
			
				<h1>{props.text}</h1>
			
			</div>

		</div>
	)
}

CalculatorDisplay.defaultProps = {
	displayStyle: 'display',	
}

export default CalculatorDisplay