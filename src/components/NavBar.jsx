import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar } from '@mui/material';

import CartWidget from './CartWidget';

const categorias = ['Celulares', 'Tablets', 'Auriculares'];

const NavBar = () => {
    return (
        <Box sx={{ width: '100%' }}>
        <AppBar position="fixed">
            <Toolbar className='toolbar'>
            <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>

            {categorias.map((page) => (
                <MenuItem key={page}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}

            <CartWidget cantidad="1"/>
            <IconButton className="icono">
                <Avatar alt="Massimo" className='avatar' src="./src/assets/logo.png" />
            </IconButton>
            </Toolbar>
        </AppBar>
        </Box>
    )
}


export default NavBar

