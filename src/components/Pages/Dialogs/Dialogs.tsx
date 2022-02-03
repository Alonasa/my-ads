import React from 'react';
import {Message} from '../../Messages/Message';
import {AuthMenu} from '../../AuthMenu/AuthMenu';
import s from './Dialogs.module.css'
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {v1} from 'uuid';

type MessageType = {
  id: string
  text: string
}

type DialogType = {
  id: string
  name: string
  data: MessageType[]
}

const dialogData = [
  {
	id: v1(),
	name: 'Inna',
	data: [{id: v1(), text: 'Hi'}, {id: v1(), text: 'How are you Doing?'}]
  },
  {
	id: v1(),
	name: 'Daniel',
	data: [{id: v1(), text: 'Hi'}, {
	  id: v1(),
	  text: 'Do you remember me? We have meet in pub last summer'
	}]
  },
  {
	id: v1(),
	name: 'Adolf',
	data: [{id: v1(), text: 'Hi. I am starving'}, {
	  id: v1(),
	  text: 'Can you please buy some food for me?'
	}, {
	  id: v1(),
	  text: 'I will be glad to have fresh mouse today. '
	}, {
	  id: v1(),
	  text: 'Hey, if you will not bring me food in 1h, I"l destroy your working place. Time counting start!'
	}]
  },
  {
	id: v1(),
	name: 'Jana',
	data: [{
	  id: v1(),
	  text: 'Hello. You were request for design prices. Here they are!'
	}]
  },
]


export const Dialogs = (props: DialogType) => {
  return (
	<div>
	  <AuthMenu/>
	  <Container className={s.dialogs}>
		<Grid container style={{margin: '25px 0',}}>
		  <ul className={s.dialogs__list}>
			<li className={s.dialog__item}><NavLink
			  to={`/dialogs/${props.id}`}>{props.name}</NavLink></li>
		  </ul>
		  <Message/>
		</Grid>
	  </Container>
	</div>
  );
};