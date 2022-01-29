import React from 'react';
import {NavLink} from 'react-router-dom';
import {MainHeader} from './MainHeader/MainHeader';

export const Error404 = () => {
  return (<div>
	<MainHeader/>
	<h1 style={{textAlign: 'center'}}>404. Page is not
	  found</h1>
	<NavLink to="/" className={'active'}>Go Home</NavLink>
  </div>)
};

