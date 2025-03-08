import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Producto from './Item/Item';
import {useEffect, useState} from 'react';

const ListadoItems = () => {

  const [isLoading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/data/productos.json");
        if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");
        
        const data = await response.json();
        
        setTimeout(() => {
          setProductos(data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if(isLoading){
    return (
      <Box sx={{ flexGrow: 1 }}>
        <CircularProgress />
        <Typography sx={{ color: '#000000', textAlign:'center' }}>CARGANDO PRODUCTOS.....</Typography>
      </Box>
    )
  }

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid className="productoContainer" container spacing={4} columns={16}>
        {productos.map((producto) => {
          return(
            <Grid key={producto.id} xs={8}>
              <Producto key={producto.id} info={producto}/>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  );
}

export default ListadoItems