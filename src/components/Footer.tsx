import React from 'react';
import {Container, Grid} from '@material-ui/core';
import s from './Footer.module.css'

const pages = ['Page 1', 'Page 2']

export const Footer = () => {
  return (
	<footer className={s.Footer}>
	  <Container>
		<Grid container justifyContent={'space-between'} alignItems={'baseline'} spacing={2}>
		  <Grid item xs={12} sm={2}>
			<h3>My-Ads</h3>
		  </Grid>
		  <Grid item xs={12} sm={10}>
			<ul className={s.Footer__menu}>
			  {pages.map(p => {
				return (
				  <li key={p}><a href='#'>{p}</a></li>
				)
			  })}
			</ul>
		  </Grid>
		</Grid>
	  </Container>
	</footer>
  );
};
