import React, {useState} from 'react';
import {MainContent} from '../MainContent';
import {Footer} from '../Footer/Footer';
import {AppBarMenu} from '../AppBarMenu';

export const Main = () => {
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
	<div>
	  <AppBarMenu data={AppData} changeAuth={changeAuth}/>
	  <MainContent/>
	</div>
  );
};