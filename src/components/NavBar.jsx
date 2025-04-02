import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, Avatar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getDocs, collection, getDoc } from "firebase/firestore";
import { db } from '../firebase/client';
import CartWidget from './CartWidget';

const NavBar = () => {

  const [categorias, setCategorias] = useState([]);
  
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = useState(null);

  // Traemos las Categorias desde Firebase
  useEffect(() => {
    const getCategories = async () => {
      const categoriasRef = collection(db, "category");
      const querySnapshot = await getDocs(categoriasRef);
      const categoriasArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setCategorias(categoriasArray);
    };

    getCategories();
  }, []);

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
          <Typography variant="h6" noWrap component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 600,
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
              sx={{color:"#000000"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav}
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
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")} sx={{ textAlign: 'center' }} onClick={() => navigate(`categorias/${page.name}`)}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <IconButton className="icono">
              <Avatar alt="Massimo" className='avatar'sx={{textAlign:'left', alignContent:screenLeft}} src="/logo_techFusion.png" onClick={() => navigate('/')}/>
          </IconButton>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {categorias.map((page) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block', color:'#101010' }}
              >
                <Typography className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}  sx={{ textAlign: 'center' }} onClick={() => navigate(`categorias/${page.name}`)}>
                {page.name}
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

