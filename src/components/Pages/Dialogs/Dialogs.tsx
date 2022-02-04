import React from 'react';
import {Message} from '../../Messages/Message';
import {AuthMenu} from '../../AuthMenu/AuthMenu';
import s from './Dialogs.module.css'
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core';
import {NavLink, Route} from 'react-router-dom';
import {dialogData, DialogDataType} from '../../../state';
import {MessagesList} from '../../Messages/MesagesList';


export const Dialogs = (props: DialogDataType) => {
  return (
	<div>
	  <AuthMenu/>
	  <Container className={s.dialogs}>
		<Grid container style={{margin: '25px 0',}}>
		  <ul className={s.dialogs__list}>
			{props.data.map(item => {
			  return(
				<li className={s.dialog__item}>
				  <NavLink
					to={`/dialogs/${item.id}`}>{item.name}</NavLink></li>
			  )
			})}
		  </ul>
		  <Message/>
		</Grid>
	  </Container>
	</div>
  );
};