import {Box, Container} from '@material-ui/core';
import React from 'react';
import s from './Profile.module.css';


export const ProfileContent = () => {
  return (
	<Box m={{xs:0, sm: 3}}>
	  <Container>
		<div className={s.Profile__img}>
		  <img className={s.Profile__content_img} alt={'avatar'} width={250}
			   height={250} src="https://i.stack.imgur.com/l60Hf.png"/>
		</div>
		<ul style={{padding: 0}}>
		  <li className={s.Profile__content_item}><span
			className={s.Profile__content_title}>Days on website</span><span>10</span>
		  </li>
		  <li className={s.Profile__content_item}><span
			className={s.Profile__content_title}>Info</span>
			<span>Hi for everyone. I am James Bond like to sell my useless clothes</span>
		  </li>
		  <li className={s.Profile__content_item}><span
			className={s.Profile__content_title}>Total Ads</span>
			<span>15</span>
		  </li>
		  <li className={s.Profile__content_item}><span
			className={s.Profile__content_title}>Location</span>
			<span>London, UK</span>
		  </li>
		</ul>
	  </Container>
	</Box>
  );
  
};