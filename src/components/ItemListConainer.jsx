import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Producto from './Item/Item';
import ItemList from './ItemList/ItemList';
import {useEffect, useState} from 'react';

const ListadoItems = () => {

  const [isLoading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])

  const miPromesa = new Promise ((resolve, reject) => {
    const Productos = [
      {
        id:'01',
        name:'Galaxy A05 Light Green 64GB',
        descripcion:['Procesador Octa-Core 2GHz, 1.8GHz','Camara frontal 8 MP','Camara trasera 50 MP + 2 MP'],
        precio:'$ 299.999',
        descuento:'$ 189.999',
        imagen:'./src/assets/Productos/Galaxy_a05.png',
        stock:5,
        ranking: 4
      },
      {
        id:'02',
        name:'Galaxy A24 Black',
        descripcion:['Procesador Octa-Core 2.2GHz,2GHz','Camara frontal 13.0 MP','Camara trasera 50.0 MP + 5.0 MP'],
        precio:'$ 579.999',
        descuento:'$ 399.999',
        imagen:'./src/assets/Productos/Galaxy_a24Black.png',
        stock:3,
        ranking: 4
      },
      {
        id:'03',
        name:'Galaxy Z Fold5 Icy Blue 256GB',
        descripcion:['Procesador Octa-Core 3.36GHz,2.8GHz','Camara frontal 10.0 MP','Camara trasera 50.0 MP + 12.0 MP'],
        precio:'$ 3.699.999',
        descuento:'$ 2.589.999',
        imagen:'./src/assets/Productos/Galaxy_zFold.png',
        stock:10,
        ranking: 5
      }
    ]

    setTimeout(()=>{
      Productos ? resolve(Productos) : reject("No Hay Productos")
      setLoading(false)
    }, 2000);
  });

  useEffect(() => {
    miPromesa.then(res => {
      console.log(res)
      setProductos(res)
    })
  }, [])

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