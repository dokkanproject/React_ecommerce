import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Producto from './Item/Item';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const ListadoItems = () => {

  const { categoriaID } = useParams();
  const [isLoading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([]);

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

  // Filtramos los productos cuando cambia la categoría
  useEffect(() => {
    if (categoriaID) {
      setProductosFiltrados(productos.filter(p => p.category === categoriaID));
    } else {
      setProductosFiltrados(productos);
    }
  }, [categoriaID, productos]); // Se ejecuta cuando cambia la categoría o la lista de productos

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
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <Grid key={producto.id} xs={8}>
              <Producto info={producto} />
            </Grid>
          ))
        ) : (
          <Typography sx={{ color: "#000000", textAlign: "center" }}>
            No hay productos en esta categoría.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}

export default ListadoItems