import React, {useState} from 'react';
import {AppBarMenu} from '../AppBarMenu';

export const Profile = () => {
  const [AppData, setAppData] = useState([
	{
	  link: '#',
	  pages: ['Your Ads', 'Wishlist', 'Messages', 'Profile', 'Settings'],
	  isAuth: true,
	  loggedInn: ['Profile', 'LogOut'],
	  loggedOut: ['Login', 'Register']
	},
  ])
  const changeAuth = (auth: boolean) => {
	setAppData(AppData.map(f => f.isAuth === !auth ? {...f, isAuth: auth} : f));
  }
  
  return (
	<div>
	  <AppBarMenu data={AppData} changeAuth={changeAuth}/>
	</div>
  );
};