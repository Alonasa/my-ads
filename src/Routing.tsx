import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {Profile} from './components/Pages/Profile/Profile';
import {Main} from './components/Pages/Main';


export const PATH = {
  ERROR_404: '/404',
  PROFILE: '/Profile',
}

export const Routing = () => {
  return (
	<div>
	  <Routes>
		<Route path="/" element={<Main/>}/>
		<Route path={PATH.PROFILE} element={<Profile/>}/>
		<Route path={PATH.ERROR_404}
			   element={<h1 style={{textAlign: 'center'}}>404. Page is not
				 find</h1>}/>
		<Route path="*" element={<Link to={PATH.ERROR_404}/>}/>
	  </Routes>
	</div>
  );
};