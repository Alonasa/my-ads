import {Container, Grid} from '@material-ui/core';
import React from 'react';

export const MainContent = () => {
  return (
	<Container>
	  <Grid container alignContent={'center'} justifyContent={'space-between'}>
		<Grid item xs={12} sm={3}>sidebar
		  search</Grid>
		<Grid item xs={12} sm={9}>Main
		  content</Grid>
	  </Grid>
	</Container>
  );
};
