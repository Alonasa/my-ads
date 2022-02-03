import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Profile} from './components/Pages/Profile/Profile';
import {Main} from './components/Pages/Main';
import {Error404} from './components/Error404';
import {Dialogs} from './components/Pages/Dialogs/Dialogs';
import {dialogData} from './state';


export const PATH = {
  ERROR_404: '/404',
  PROFILE: '/Profile',
  MESSAGES: 'Messages',
}

export const Routing = () => {
  return (
	<div>
	  <Routes>
		<Route path="/" element={<Main/>}/>
		<Route path={PATH.PROFILE} element={<Profile/>}/>
		<Route path={PATH.ERROR_404}
			   element={<Error404/>}/>
		<Route path={PATH.MESSAGES} element={<Dialogs data={dialogData}/>}/>
		<Route path="*" element={<Error404/>}/>
	  </Routes>
	</div>
  );
};