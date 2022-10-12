import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { CartWidget } from '../CartWidget/CartWidget';
import NightsStayTwoToneIcon from '@mui/icons-material/NightsStayTwoTone';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const pages = ['jackets', 'shirts', 'pants'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" sx={{
      backgroundColor: '#121212',
      height: '7rem',
      border: '0',
      borderBottom: '1px',
      borderStyle: 'solid',
      borderColor: 'darkgray'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NightsStayTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, fontSize: '3rem', mr: 1, color: 'gold' }} />
          <NavLink to='/' className='linkHome'>
          <Typography
            variant="h6"
            noWrap 
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: '3rem',
              letterSpacing: '.3rem',
              color: 'gold',
              textDecoration: 'none',
            }}
          >
            KALON
          </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'gold'}}
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
                display: { xs: 'block', md: 'none' }
              }}
              
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <NightsStayTwoToneIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'gold' }} />
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
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: 'gold'
            }}
          >
            KALON
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                <NavLink to={`/categoria/${page}`} className='linksNavbar'> {page} </NavLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <NavLink to='/cart' className='linksNavbar'>
              <CartWidget />
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;