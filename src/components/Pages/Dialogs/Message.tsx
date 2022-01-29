import React from 'react';
import {Box, Container, TextField} from '@material-ui/core';
import s from '../Dialogs/Message.module.css';
import {UniversalButton} from '../../UniversalButton';

export const Message = () => {
  const onClickHandler = () => {
	console.log('I am trying to send message')
  }
  
  return (
	<Box display={'flex'} sx={{ flexGrow: 1, flexDirection:{xs:'column', sm:'row'}, justifyContent:{sm: 'space-between'}, alignItems:{xs:'center'}, marginBottom: '20px',}}>
		<img className={s.Message__content_img} alt={'avatar'} width={100}
			 height={100} src="https://i.stack.imgur.com/l60Hf.png"/>
	  <TextField placeholder={'Write your message here'} variant={'outlined'}></TextField>
	  <UniversalButton title={'Send'} onClick={onClickHandler} color={'primary'} variant={'contained'}/>
	</Box>
  );
};