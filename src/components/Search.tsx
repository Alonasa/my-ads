import {Box, Grid} from '@material-ui/core';
import React from 'react';
import {LocationOn, SearchOutlined} from '@material-ui/icons';
import {UniversalFormControlWithIcon} from './UniversalFormControl/UniversalFormControlWithIcon';
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
										size={'small'}
										icon={<SearchOutlined/>}
		  />
		  
		  <UniversalFormControlWithIcon type={'text'}
										style={{background: '#ebedf9'}}
										placeholder={'Location'}
										multiline={false}
										size={'small'}
										icon={<LocationOn/>}
		  />
		</Grid>
		<UniversalButton title={'Search'} onClick={onClickHandler} variant={"contained"} endIcon={<SearchOutlined/>}/>
	  </Box>
	</div>
  );
};






