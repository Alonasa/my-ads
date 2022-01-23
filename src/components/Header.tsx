import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import React from 'react';
import {MenuTwoTone} from '@material-ui/icons';

export const Header = () => {
  return (
	<Box sx={{ flexGrow: 1 }}>
	  <AppBar position="static">
		<Toolbar>
		  <IconButton
			size="small"
			edge="start"
			color="inherit"
			aria-label="menu"
		  >
			<MenuTwoTone/>
		  </IconButton>
		  <Typography component="div">
			News
		  </Typography>
		  <Button color="inherit">Login</Button>
		</Toolbar>
	  </AppBar>
	</Box>
  );
};
