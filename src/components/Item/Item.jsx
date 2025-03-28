
import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, CardActionArea, Typography, ListItemText, Rating } from '@mui/material';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import "./Item.css";
import Notification from '../Notification';

const Producto = ({info}) =>
{
  const navigate = useNavigate()

  const {addToList} = useContext(ShopContext)

  const [open, setOpen] = useState(false)

  return (
    <>
    <Card className="tarjetaProducto" sx={{ maxWidth: 345, width: 345, cursor:'pointer'}} onClick={(e) =>{navigate(`/detalle/${info.id}`)}}>
      <Box sx={{background:'#000000', position:'top', height:40, alignContent:'center'}}>
        <Typography sx={{color:'#ffffff'}}>STOCK DISPONIBLE: {info.stock}</Typography>
      </Box>
      
      <CardActionArea>
      <CardMedia
        sx={{ maxHeight: 250, width: "100%", height: 250, objectFit: "contain" }}
        image={info.imagen}
        title={info.name}
      />
      
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {info.name}
        </Typography>
        <Rating name="read-only" value={info.ranking} readOnly />
        <ListItemText variant="body2" sx={{ color: 'text.secondary', textAlign:'left' }}>- {info.descripcion[0]}</ListItemText>
        <ListItemText variant="body2" sx={{ color: 'text.secondary', textAlign:'left' }}>- {info.descripcion[1]}</ListItemText>
        <ListItemText variant="body2" sx={{ color: 'text.secondary', textAlign:'left' }}>- {info.descripcion[2]}</ListItemText>
        
        <Typography sx={{ color: '#aeaeae', textAlign:'center', textDecoration:'line-through', fontSize:'13px' }}>
          $ {info.precio}
        </Typography>
        <Typography sx={{ color: '#1e1e1e', textAlign:'center', fontSize:'16px', fontWeight:'bold' }}>
        $ {info.descuento}
        </Typography>
      </CardContent>
      
      </CardActionArea>
      <Box sx={{background:'#000000', position:'bottom', height:60, alignContent:'center'}}>
        <CardActions className='botonContainer'>
          <Button className='BotonComprar' onClick={(e) => {
            e.stopPropagation();
            addToList(info,1)
            setOpen(true);
          }} size="small">AGREGAR AL CARRITO</Button>
      </CardActions>
      </Box>
    </Card>

    <Notification informacion={info} open={open} setOpen={setOpen} />
    </>
  );
}

export default Producto