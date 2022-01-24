import React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container, Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@material-ui/core';
import {MenuTwoTone} from '@material-ui/icons';

const pages = ['Ads', 'Post Ads', 'Premium Listings'];
const loggedInn = ['Profile', 'Logout'];
const loggedOut = ['Login', 'Logout']

export const AppBarMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const handleOpenNavMenu = (event: any) => {
	setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
	setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
	setAnchorElNav(null);
  };
  
  const handleCloseUserMenu = () => {
	setAnchorElUser(null);
  };
  
  
  return (
	<AppBar position="static">
	  <Container>
		<Toolbar disableGutters>
		  <Box sx={{ mr: 2, minWidth: '80px'}}
		  >
			My-ADS
		  </Box>
		  
		  <Grid container direction={'row'} justifyContent={'flex-end'}>
			<IconButton
			  aria-label="account of current user"
			  aria-controls="menu-appbar"
			  aria-haspopup="true"
			  onClick={handleOpenNavMenu}
			  color="inherit"
			>
			</IconButton>
		 
			<Box sx={{display: {xs: 'flex', md: 'none'}, alignSelf: 'flex-end'}}>
			  <IconButton
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleOpenNavMenu}
				color="inherit"
			  >
				<MenuTwoTone/>
			  </IconButton>
			  <Menu
				id="menu-appbar"
				anchorEl={anchorElNav}
				anchorOrigin={{
				  vertical: 'bottom',
				  horizontal: 'left',
				}}
				keepMounted
				transformOrigin={{
				  vertical: 'top',
				  horizontal: 'left',
				}}
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
			  >
				{pages.map((page) => (
				  <MenuItem key={page} onClick={handleCloseNavMenu}>
					<Typography>{page}</Typography>
				  </MenuItem>
				))}
			  </Menu>
			</Box>
			<Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
			  {pages.map((page) => (
				<Button
				  className={'button__white'}
				  key={page}
				  onClick={handleCloseNavMenu}
				><Typography style={{color:"#ffffff"}}>{page}</Typography>
				</Button>
			  ))}
			</Box>
		 
			<Box sx={{flexGrow: 0}}>
			  <Tooltip title="Open settings">
				<IconButton onClick={handleOpenUserMenu}>
				  <Avatar alt="Avatar" src="#"/>
				</IconButton>
			  </Tooltip>
			  <Menu
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
				  vertical: 'top',
				  horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
				  vertical: 'top',
				  horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			  >
				{loggedInn.map((setting) => (
				  <MenuItem key={setting} onClick={handleCloseUserMenu}>
					<Typography align={'center'}>{setting}</Typography>
				  </MenuItem>
				))}
			  </Menu>
			</Box>
		  </Grid>
		</Toolbar>
	  </Container>
	</AppBar>
  );
};

