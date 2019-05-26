import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent'

const HeaderContainer = () => {
	return (

		<header className="headerContainer"> 

			<ImageThumbnail />
			<div className="body">
				<HeaderTitle />
				<HeaderContent />
			</div>
			
		</header>
		


	);
};

export default HeaderContainer;