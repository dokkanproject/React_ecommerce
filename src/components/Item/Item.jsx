
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
    <Card className="tarjetaProducto" sx={{ maxWidth: 345, width: 345, cursor: 'pointer' }} 
        onClick={() => navigate(`/detalle/${info.id}`)}>
    <Box sx={{ background: '#000000', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography sx={{ color: '#ffffff' }}>STOCK DISPONIBLE: {info.stock}</Typography>
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

        {info.descripcion.map((desc, index) => (
          <Typography key={index} variant="body2" sx={{ color: 'text.secondary', textAlign: 'left' }}>
            - {desc}
          </Typography>
        ))}

        <Typography sx={{ color: '#aeaeae', textAlign: 'center', textDecoration: 'line-through', fontSize: '13px' }}>
          $ {info.precio}
        </Typography>
        <Typography sx={{ color: '#1e1e1e', textAlign: 'center', fontSize: '16px', fontWeight: 'bold' }}>
          $ {info.descuento}
        </Typography>
      </CardContent>
    </CardActionArea>

    <Box sx={{ background: '#000000', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CardActions className="botonContainer">
        {info.stock === 0 ? (
          <Typography sx={{ color: '#ff0000', fontWeight: 'bold', textAlign: 'center' }}>
            ¡NO HAY STOCK DISPONIBLE!
          </Typography>
        ) : (
          <Button className="BotonComprar" 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToList(info, 1);
                    setOpen(true);
                  }} 
                  size="small">
            AGREGAR AL CARRITO
          </Button>
        )}
      </CardActions>
    </Box>

    <Notification informacion={info} open={open} setOpen={setOpen} />
  </Card>
  )
}

export default Producto