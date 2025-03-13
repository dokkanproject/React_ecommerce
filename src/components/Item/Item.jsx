
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Rating from '@mui/material/Rating';
import "./Item.css";
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const Producto = ({info}) =>
{
  const navigate = useNavigate()

  const {addToList} = useContext(ShopContext)

  return (
    <Card className="tarjetaProducto" sx={{ maxWidth: 345, cursor:'pointer'}} onClick={(e) =>{navigate(`/detalle/${info.id}`)}}>
      <Box sx={{background:'#000000', position:'top', height:80, alignContent:'center'}}>
        <Typography sx={{color:'#ffffff'}}>STOCK DISPONIBLE: {info.stock}</Typography>
        <CardActions className='botonContainer'>
        <Button className='BotonComprar' onClick={(e) => {
          e.stopPropagation();
          addToList(info,1)
        }} size="small">AGREGAR AL CARRITO</Button>
      </CardActions>
      </Box>
      
      <CardActionArea>
      <CardMedia
        sx={{ height: 250 }}
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
          {info.precio}
        </Typography>
        <Typography sx={{ color: '#1e1e1e', textAlign:'center', fontSize:'16px', fontWeight:'bold' }}>
        {info.descuento}
        </Typography>
      </CardContent>
      
      </CardActionArea>
    </Card>
    
  );
}

export default Producto