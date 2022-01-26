import {Box, Grid, Input, InputLabel, FormControl} from '@material-ui/core';
import React from 'react';
import {LocationOn, SearchOutlined} from '@material-ui/icons';
import {UniversalFormControlWithIcon} from './UniversalFormControlWithIcon';
import {UniversalButton} from './UniversalButton';

export const Search = () => {
  const onClickHandler = () => {
    console.log('Trying to search ads')
  }
  
  return (
	<div>
	  <Box component="form" aria-autocomplete={'none'}>
		<Grid container>
		  <UniversalFormControlWithIcon type={'text'} style={{
			background: '#ebedf9',
			border: 'none'
		  }} placeholder={'We have 100 ads next to you'} multiline={true}
										size={'small'}><SearchOutlined/></UniversalFormControlWithIcon>
		  <UniversalFormControlWithIcon type={'text'}
										style={{background: '#ebedf9'}}
										placeholder={'Location'}
										multiline={false}
										size={'small'}><LocationOn/></UniversalFormControlWithIcon>
		</Grid>
		<UniversalButton title={'Search'} onClick={onClickHandler} variant={"contained"} endIcon={<SearchOutlined/>}/>
	  </Box>
	</div>
  );
};






