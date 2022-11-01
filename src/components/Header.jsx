import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import MenuItem from '@mui/material/MenuItem';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import MenuItems from './Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeDropDown from './HomeDropDown';

const pages = ['My Products', 'Pricing', 'Blog'];
const settings = ['Login'];
const Header = () => {
  const token = localStorage.getItem('token')
  const image = localStorage.getItem('image')
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{bgcolor: 'white', py: 1}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontStyle: 'italic',
              textDecoration: 'none',
              color: 'primary.main'
            }}
          >
            Health Care
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Health Care
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={() => navigate('/')}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Home
            </Button>
            <HomeDropDown underline={true} label="doctors"/>
            <HomeDropDown underline={true} label="Consult online"/>
            <HomeDropDown underline={true} label="Hospitals"/>
            <HomeDropDown underline={true} label="Lab test"/>
            {/* <MenuItems /> */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Grid container direction="row" justifyContent="space-between" sx={{ width: "100%" }} alignItems="center">
                <Button
                  variant= 'contained'
                  onClick={() => navigate('/login')}
                  sx={{ my: 2, color: 'black', display: 'block', backgroundColor: 'danger.main', 
                  mx: 1, fontSize: '0.5px', borderRadius: '5px', color: 'white' }}
                  size= 'small'
                >
                  <PhoneIcon /> 
                </Button>
              <Grid item>
                <Tooltip title="Open settings">
                 <Button
                 variant = 'outlined'
                  onClick={handleOpenUserMenu}
                  sx={{ my: 2, color: 'danger.main', display: 'block', fontSize: '1.5x', borderColor: 'danger.main' }}
                >
                  <PersonIcon /> 
                  <ArrowDropDownIcon />
                </Button>
                </Tooltip> 
                <Menu
                  sx={{ mt: '45px' }}
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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <ListItem>
                        <ListItemButton >
                          <ListItemText primary={setting} />
                        </ListItemButton>
                      </ListItem>
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
