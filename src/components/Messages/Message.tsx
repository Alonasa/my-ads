import React from 'react';
import {Box, Paper, TextField} from '@material-ui/core';
import s from './Message.module.css';
import {UniversalButton} from '../UniversalButton';

export const Message = () => {
  const onClickHandler = () => {
	console.log('I am trying to send message')
  }
  
  return (
	<Paper style={{marginBottom: '20px'}}>
	  <Box display={'flex'} sx={{
		flexDirection: {xs: 'column', sm: 'row'},
		justifyContent: {sm: 'space-between'},
		alignItems: {xs: 'center'},
		margin:{ sm: '20px'},
		minHeight: {xs:'250px', sm: '150px'}
	  }}>
		<img className={s.Message__content_img} alt={'avatar'} width={100}
			 height={100} src="https://i.stack.imgur.com/l60Hf.png"/>
		<TextField multiline={true} maxRows={3}
				   style={{flexGrow: 1, margin: '0 20px'}}
				   placeholder={'Write your message here'}
				   variant={'outlined'}></TextField>
		<UniversalButton title={'Send'} onClick={onClickHandler}
						 color={'primary'} variant={'contained'}/>
	  </Box>
	</Paper>
  );
};