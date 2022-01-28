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

type AppBarMenuType = {
  link: string
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
    if (id === 'LogOut') {
      props.changeAuth(false)
      console.log(props.data.map(t => t.isAuth));
    }
    if (id === 'Login') {
      props.changeAuth(true)
      console.log(props.data.map(t => t.isAuth));
    }
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
                    <a href={d.link}>My-ADS</a>
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
						  <MenuItem onClick={handleCloseNavMenu}>
							<Typography>{page}</Typography>
						  </MenuItem>
						))}
				</Menu>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                      {d.pages.map((page) => (
                        <Button key={page}
                                className={'button__white'}
                                onClick={handleCloseNavMenu}
                        ><Typography
                          style={{color: '#ffffff'}}>{page}</Typography>
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
                            <MenuItem key={setting}
                                      onClick={handleCloseUserMenu}>
                              <Typography id={setting}
                                          onClick={(event) => authHandler(event.currentTarget.id)}
                                          align={'center'}>{setting}</Typography>
                            </MenuItem>
                          ))
                          
                          : d.loggedOut.map((auth) => (
                            <MenuItem key={auth} onClick={handleCloseUserMenu}>
                              <Typography id={auth}
                                          onClick={(event) => authHandler(event.currentTarget.id)}
                                          align={'center'}>{auth}</Typography>
                            </MenuItem>
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

