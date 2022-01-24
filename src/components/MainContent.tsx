import {Container, Grid, Paper} from '@material-ui/core';
import React from 'react';

export const MainContent = () => {
  return (
	<Container>
	  <Grid container alignContent={'center'} justifyContent={'space-between'} style={{padding: '20px 0', minHeight: '200px'}} spacing={2}>
		<Grid item xs={12} sm={4}>
		  <Paper style={{background: '#ebedf9', textTransform: 'uppercase'}}>
			sidebar
			search
		  </Paper>
		</Grid>
		<Grid item xs={12} sm={8}>
		  <Paper style={{background: '#ebedf9'}}>
			Main
			content
		  </Paper>
		</Grid>
	  </Grid>
	</Container>
  );
};
