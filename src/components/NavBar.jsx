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
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import CartWidget from './CartWidget';

const categorias = ['Celulares', 'Tablets', 'Buds'];

const NavBar = () => {

  const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" sx={{backgroundColor:'#eeeeee'}}>
            <Container maxWidth="xl">
            <Toolbar className='toolbar'>

          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#101010',
              textDecoration: 'none',
              cursor:'pointer',
            }}
          >
          TECH FUSION
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {categorias.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")} sx={{ textAlign: 'center' }} onClick={() => navigate(`categorias/${page}`)}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            <IconButton className="icono">
                <Avatar alt="Massimo" className='avatar' src="/logo_techFusion.png" />
            </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 50,
              letterSpacing: '.2rem',
              color: '#101010',
              textDecoration: 'none',
              cursor:'pointer',
            }}
          >
            TECH FUSION
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {categorias.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', color:'#101010' }}
              >
                <Typography className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}  sx={{ textAlign: 'center' }} onClick={() => navigate(`categorias/${page}`)}>
                {page}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <CartWidget/>
        </Box>
            </Toolbar>
            </Container>
        </AppBar>
    )
}


export default NavBar

