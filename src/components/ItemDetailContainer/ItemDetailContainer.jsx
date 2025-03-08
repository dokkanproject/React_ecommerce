import * as React from 'react';
import { useParams } from 'react-router-dom';
import {useFetch} from '../../customHooks/useFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { Box } from '@mui/material';

const ItemDetailContainer = () =>
{
    const { productID } = useParams(); // Obtenemos el ID de la URL
    const { data: productos, loading, error } = useFetch("/data/productos.json");

    if (loading) return(
        <Box sx={{ flexGrow: 1 }}>
            <CircularProgress />
            <Typography sx={{ color: '#000000', textAlign:'center' }}>CARGANDO PRODUCTO.....</Typography>
      </Box>
    )
    if (error) return <p>Error: {error}</p>;

    // Buscar el producto por ID
    const producto = productos.find((p) => p.id === productID);

    if (!producto) return <p>Producto no encontrado</p>;

    return (
        <Box>
            <ItemDetail info={producto}/>
        </Box>
    );
}

export default ItemDetailContainer