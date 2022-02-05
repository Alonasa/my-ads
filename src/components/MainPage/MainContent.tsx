import {Container, Grid, Paper} from '@material-ui/core';
import React from 'react';
import {Search} from './Search';
import {ListItems} from './ListItems/ListItems';
import {ItemType} from '../../Redux/state';

export type ItemsPropsType = {
  items: Array<ItemType>
}

export const MainContent = (props: ItemsPropsType) => {
  return (
	<main>
	  <Container>
		<Grid container alignContent={'flex-start'}
			  justifyContent={'space-between'}
			  style={{padding: '20px 0', minHeight: '200px'}} spacing={2}>
		  <Grid item xs={12} sm={4}>
			<Paper style={{padding: '25px 0 25px'}}>
			  <Search/>
			</Paper>
		  </Grid>
		  <Grid item xs={12} sm={8}>
			<Paper>
			  <h2>Vip Ads</h2>
			  <ListItems items={props.items}/>
			</Paper>
		  </Grid>
		</Grid>
	  </Container>
	</main>
  );
};
