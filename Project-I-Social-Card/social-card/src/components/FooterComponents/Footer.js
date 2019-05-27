import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer>
			<i class="far fa-comment"></i>
			<ReShare />
			<Like />			
			<i class="far fa-envelope"></i>
		</footer>
	)
}

const ReShare = () => {
	let num = 0;
	return (		

		<div className="share">
			<i class="fas fa-sync-alt"></i>
			<span>{num}</span>		
		</div>
	)
}

const Like = () => {
	const heart = <i class="far fa-heart"></i>;
	console.log(heart)
	// heart.addEventListener('click', () => {
	// 	return console.log("click works")
	// })
	let num = 0;
	return (		

		<div className="like">
			<i class="far fa-heart"></i>
			<span>{num}</span>		
		</div>
	)
}

export default Footer; 