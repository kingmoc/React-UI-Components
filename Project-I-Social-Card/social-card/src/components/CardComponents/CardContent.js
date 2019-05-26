import React from 'react';
import './Card.css';

const CardContent = () => {
	return (
		<div className="content">
			<CardTitle />
			<Copy />
			<Link />
		</div>
	)
}

const CardTitle = () => <h4>Get started with React</h4>
const Copy = () => <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
const Link = () => <p className="link">reactjs.org</p>

export default CardContent 