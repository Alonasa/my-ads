import * as React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@material-ui/core';
import {MenuTwoTone} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';

type AppBarMenuType = {
  pages: Array<string>
  isAuth: boolean
  loggedInn: Array<string>
  loggedOut: Array<string>
}

type AppBarDataType = {
  data: Array<AppBarMenuType>
  changeAuth: (auth: boolean) => void
}


export const AppBarMenu = (props: AppBarDataType) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
	setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  
  const authHandler = (id: string) => {
    return id === 'Login' ? props.changeAuth(true)
      : id === 'LogOut' ? props.changeAuth(false) : id
  }
  
  const navDataStyleHandler = (navData: boolean) => {
    return navData ? 'active' : ''
  }
  
  return (
    <AppBar position="static">
      <nav>
        {
          props.data.map(d => {
            return (
              <Container>
                <Toolbar disableGutters>
                  <Box sx={{mr: 2, minWidth: '80px'}}>
                    <NavLink to="/" className={(navData) => navDataStyleHandler(navData.isActive)}>My-ADS</NavLink>
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
                    <Box
                      sx={{
                        display: {xs: 'flex', md: 'none'},
                        alignSelf: 'flex-end'
                      }}>
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
                        {d.pages.map((page) => (
                          <MenuItem onClick={handleCloseNavMenu} key={page}>
                            <NavLink to={`/${page}`}
                                     className={(navData) => navDataStyleHandler(navData.isActive)}>
                              <Typography>{page}</Typography>
                            </NavLink>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                      {d.pages.map((page) => (
  
                        <Button key={page}
                                className={'button__white'}
                                onClick={handleCloseNavMenu}>
                          <NavLink to={`/${page}`}
                                   className={(navData) => navDataStyleHandler(navData.isActive)}>
                            <Typography
                              style={{color: '#ffffff'}}>{page}</Typography>
                          </NavLink>
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
                        {d.isAuth
                          ? d.loggedInn.map((setting) => (
                            <NavLink to={`${setting}`}
                                     className={(navData) => navDataStyleHandler(navData.isActive)}>
                              <MenuItem key={setting}
                                        onClick={handleCloseUserMenu}>
                                <Typography id={setting}
                                            onClick={(event) => authHandler(event.currentTarget.id)}
                                            align={'center'}>{setting}</Typography>
                              </MenuItem>
                            </NavLink>
                          ))
                          
                          : d.loggedOut.map((auth) => (
                            <NavLink to={`${auth}`}
                                     className={(navData) => navDataStyleHandler(navData.isActive)}>
                              <MenuItem key={auth}
                                        onClick={handleCloseUserMenu}>
                                <Typography id={auth}
                                            onClick={(event) => authHandler(event.currentTarget.id)}
                                            align={'center'}>{auth}</Typography>
                              </MenuItem>
                            </NavLink>
                          ))
                        }
                      </Menu>
                    </Box>
                  </Grid>
				</Toolbar>
			  </Container>
			
			);
		  })
		}
	  </nav>
	</AppBar>
  );
};

