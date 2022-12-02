import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DoctorsDropDown from './DropDown/DoctorsDropDown';
import HospitalsDropDown from './DropDown/HospitalsDropDown';
import ConsultDropDown from './DropDown/ConsultDropDown';
import LabTestDropDown from './DropDown/LabTestDropDown';
import PhoneModal from './PhoneModal';
import logo from '../assests/launch_screen.svg'
import styled from 'styled-components'
const Image = styled.img`
    height: 70px;
    width: 100px;
`

const settings = ['Login'];
const Header = () => {
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

  const handleChange = () => {
    localStorage.removeItem('Name');
    localStorage.removeItem('Type');
    navigate('/')
  };

  const token = localStorage.getItem('Name')
  return (
    <AppBar position="static" sx={{bgcolor: 'white', py: 1}} id='header'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src= {logo} />
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: '10px' }}>
            <Button
              onClick={() => navigate('/')}
              sx={{ my: 2,mt: '1.3rem', color: 'primary.main', display: 'block' }}
            >
              Home
            </Button>
            <DoctorsDropDown />
            <ConsultDropDown />
            <HospitalsDropDown />
            <LabTestDropDown />
            <Button
              onClick={() => navigate('/surgeries')}
              sx={{ mt: 2, color: 'primary.main', display: 'block' }}
            >
              Surgeries
            </Button>
            <Button
              onClick={() => navigate('/offers')}
              sx={{ mt: 2, color: 'primary.main', display: 'block' }}
            >
              Special Offers
            </Button>

            {/* <MenuItems /> */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Grid container direction="row" justifyContent="space-between" sx={{ width: "100%" }} alignItems="center">
                <PhoneModal />
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
                        {token ?
                        <ListItemButton  onClick={() => handleChange() }>
                          <Grid container direction='column'>
                            <Typography sx={{mb: '10px', color: 'danger.main'}}>
                              {token}
                            </Typography>
                            <ListItemText primary={"Log Out"} />
                          </Grid>
                        </ListItemButton>
                        : <ListItemButton  onClick={() => navigate('/login')} >
                          <ListItemText primary={setting} />
                      </ListItemButton>
                       }
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
