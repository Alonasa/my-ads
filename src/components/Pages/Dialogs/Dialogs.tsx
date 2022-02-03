import React from 'react';
import {Message} from '../../Messages/Message';
import {AuthMenu} from '../../AuthMenu/AuthMenu';
import s from './Dialogs.module.css'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core';
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
  return (
	<div>
	  <AuthMenu/>
	  <Container className={s.dialogs}>
		<Grid container style={{margin: '25px 0',}}>
		  <ul className={s.dialogs__list}>
			<li className={s.dialog__item}><NavLink to="/dialogs/1" >Inna</NavLink></li>
			<li className={s.dialog__item}><NavLink to="/dialogs/2">Daniel</NavLink></li>
			<li className={s.dialog__item}><NavLink to="/dialogs/3">Adolf</NavLink></li>
			<li className={s.dialog__item}><NavLink to="/dialogs/4">Janna</NavLink></li>
		  </ul>
		  <Message/>
		</Grid>
	  </Container>
	</div>
  );
};