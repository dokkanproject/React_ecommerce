import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const Cart = () => {

    //Tenemos que hacer un UseState para el Carrito

    const {lista} = useContext(ShopContext)
    console.log('Mi Lista es: ', lista)

    return(
        <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{color:'#000000'}}>MI CARRITO</Typography>
            <Grid className="productoContainer" container spacing={4} columns={16}>
                {lista.map((item, index) =>
                    <Grid key={index} xs={8}>
                    <Typography sx={{color:'#000000'}}>{item.name} - Cantidad: {item.cantidad}</Typography>
                    </Grid>
                )}
            </Grid>
    </Box>
    )
}

export default Cart