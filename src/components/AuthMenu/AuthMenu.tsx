import {AppBarMenu} from '../AppBarMenu';
import React, {useState} from 'react';

export const AuthMenu = () => {
  const [AppData, setAppData] = useState([
	{
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
	  <AppBarMenu data={AppData} changeAuth={changeAuth}/>
  );
};
