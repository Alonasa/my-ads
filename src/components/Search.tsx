import {
  Box,
  FormControl,
  Grid, Input,
  InputAdornment,
  TextField
} from '@material-ui/core';
import React from 'react';
import {AccountCircle, SearchOutlined} from '@material-ui/icons';
import {UniversalFormControlWithIcon} from './UniversalFormControlWithIcon';

export const Search = () => {
  return (
	<div>
	  <Box component="form" aria-autocomplete={'none'}>
		<Grid container>
		  <UniversalFormControlWithIcon type={"text"} style={{marginBottom: '15px'}} placeholder={"We have 100 ads next to you"} multiline={true}><SearchOutlined/></UniversalFormControlWithIcon>
		  
		  
		</Grid>
	  </Box>
	</div>
  );
};






