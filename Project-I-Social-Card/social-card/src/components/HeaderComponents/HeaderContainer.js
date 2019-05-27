import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent'
import CardContainer from '../CardComponents/CardContainer'

const HeaderContainer = () => {
	return (

		<header className="headerContainer"> 

			<ImageThumbnail />
			<div className="body">
				<HeaderTitle />
				<HeaderContent />
				<CardContainer /> 
			</div>
			
		</header>
		


	);
};

export default HeaderContainer;