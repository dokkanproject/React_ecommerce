import * as React from 'react';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import ListItemText from '@mui/material/ListItemText';

import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import CardActions from '@mui/material/CardActions';
import ItemCount from '../ItemCount';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import {useState} from 'react';

const ItemDetail = ({info}) => {

    const [count, setCount] = useState(1);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

    const {addToList} = useContext(ShopContext)
    
    return(

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Item>
                    <Box sx={{background:'#000000',position:'top', height:35, alignContent:'center'}}>
                        <Typography sx={{color:'#ffffff'}}>STOCK DISPONIBLE: {info.stock}</Typography>
                    </Box>
                        <CardMedia
                                sx={{ height: 400 }}
                                image={info.imagen}
                                title={info.name}
                            />
                        <Rating name="read-only" value={info.ranking} readOnly />
                        <Typography sx={{ color: '#aeaeae', textAlign:'center', textDecoration:'line-through', fontSize:'13px' }}>
                            {info.precio}
                        </Typography>
                        <Typography sx={{ color: '#1e1e1e', textAlign:'center', fontSize:'16px', fontWeight:'bold' }}>
                            {info.descuento}
                        </Typography>
                    </Item>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Item>
                        <Typography gutterBottom variant="h6" component="div" sx={{ color: '#000000', fontWeight:'bold', textAlign:'center', width:'90%' }}>
                            {info.name}
                        </Typography>
                        <Typography sx={{color:'#000000', fontWeight:'bold', textAlign:'left'}}>ESPECIFICACIONES</Typography>
                        <ListItemText variant="body2" sx={{ color: 'text.secondary', textAlign:'left' }}>- {info.descripcion[0]}</ListItemText>
                        <ListItemText variant="body2" sx={{ color: 'text.secondary', textAlign:'left' }}>- {info.descripcion[1]}</ListItemText>
                        <ListItemText variant="body2" sx={{ color: 'text.secondary', textAlign:'left' }}>- {info.descripcion[2]}</ListItemText>
                    </Item>
                    <CardActions className='botonContainer'>
                        <ItemCount stockDisp={info.stock} count={count} setCount={setCount}></ItemCount>
                        <Button className='BotonComprar' onClick={() => addToList(info,count)} size="small">AGREGAR AL CARRITO</Button>
                    </CardActions>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ItemDetail