import React from 'react';
import {Message} from '../../Messages/Message';
import {AuthMenu} from '../../AuthMenu/AuthMenu';
import s from './Dialogs.module.css'
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {DialogDataType} from '../../../state';


export const Dialogs = (props: DialogDataType) => {
  return (
	<div>
	  <AuthMenu/>
	  <Container className={s.dialogs}>
		<Grid container style={{margin: '25px 0',}}>
		  <ul className={s.dialogs__list}>
			<li className={s.dialog__item}>
			  <NavLink
				to={`/dialogs/${props.id}`}>{props.name}</NavLink></li>
		  </ul>
		  <Message/>
		</Grid>
	  </Container>
	</div>
  );
};