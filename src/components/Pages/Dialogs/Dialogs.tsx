import React from 'react';
import {Message} from '../../Messages/Message';
import {AuthMenu} from '../../AuthMenu/AuthMenu';
import s from './Dialogs.module.css'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core';

export const Dialogs = () => {
  return (
	<div>
	  <AuthMenu/>
	  <Container className={s.dialogs}>
		<Grid container style={{margin: '25px 0',}}>
		  <ul className={s.dialogs__list}>
			<li className={s.dialog__item}><span>Inna</span></li>
			<li className={s.dialog__item}><span>Daniel</span></li>
			<li className={s.dialog__item}><span>Adolf</span></li>
			<li className={s.dialog__item}><span>Janna</span></li>
		  </ul>
		  <Message/>
		</Grid>
	  </Container>
	</div>
  );
};