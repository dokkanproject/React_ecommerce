
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Rating from '@mui/material/Rating';
import "./Producto.css";

const Producto = () =>
{
    return (
        <Card className="tarjetaProducto" sx={{ maxWidth: 345}}>
          <CardMedia
            sx={{ height: 250 }}
            image="./src/assets/Productos/celular_samsung.png"
            title="Galaxy A25"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                Galaxy A25 5G Blue Black 128GB
            </Typography>
            <Rating name="read-only" value={5} readOnly />
            <ListItemText variant="body2" sx={{ color: 'text.secondary', textAlign:'left' }}>- Pantalla de 6.5" Full HD+</ListItemText>
            <ListItemText variant="body2" sx={{ color: 'text.secondary', textAlign:'left' }}>- Cámara trasera de 50 MP con estabilizador de imagen</ListItemText>
            <ListItemText variant="body2" sx={{ color: 'text.secondary', textAlign:'left' }}>- Procesador Octa-core 5nm</ListItemText>
            
            <Typography sx={{ color: '#aeaeae', textAlign:'center', textDecoration:'line-through', fontSize:'13px' }}>
            $ 669.999
            </Typography>
            <Typography sx={{ color: '#1e1e1e', textAlign:'center', fontSize:'16px', fontWeight:'bold' }}>
            $ 499.999
            </Typography>
          </CardContent>
          <CardActions className='botonContainer'>
            <Button className='BotonReservar' size="small">RESERVAR</Button>
            <Button className='BotonComprar' size="small">COMPRAR</Button>
          </CardActions>
        </Card>
      );
}

export default Producto