import React, {useState} from 'react';
import {AppBarMenu} from '../../../AppBarMenu';

export const MainHeader = () => {
  const [AppData, setAppData] = useState([
	{
	  pages: ['Ads', 'Post Ad', 'Premium Listings'],
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