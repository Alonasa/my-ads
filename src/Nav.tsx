import React, {useState} from 'react';
import {HashRouter} from 'react-router-dom';
import {AppBarMenu} from './components/AppBarMenu';
import {Routing} from './Routing';

export const Nav = () => {
  return (
	<div>
		<Routing/>
	</div>
  );
};