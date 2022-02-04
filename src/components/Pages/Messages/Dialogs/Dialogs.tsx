import React from 'react';
import {Message} from '../Message';
import {AuthMenu} from '../../../AuthMenu/AuthMenu';
import s from './Dialogs.module.css'
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {dialogData, DialogDataType} from '../../../../state';
import {MessagesList} from '../MesagesList';


const DialogItem = (props: DialogDataType)=> {
  return(
	<>
	  {props.data.map(item => {
		return(
		  <li key={item.id} className={s.dialog__item}>
			<NavLink
			  to={`/Messages/dialogs/${item.id}`}>{item.name}</NavLink>
		  </li>
		)
	  })}
	</>
  )
}

const DialogsElements = () => {
  return (
    <MessagesList items={dialogData[0].data}/>
  )
}

export const Dialogs = () => {
  return (
	<div>
	  <AuthMenu/>
	  <Container className={s.dialogs}>
		<Grid container style={{margin: '25px 0',}}>
		  <ul className={s.dialogs__list}>
			<DialogItem data={dialogData}/>
		  </ul>
		  <div>
			<DialogsElements/>
			<Message/>
		  </div>
		</Grid>
	  </Container>
	</div>
  );
};