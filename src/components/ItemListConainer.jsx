import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Producto from './Item/Item';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useLoader } from '../customHooks/useLoader';
import {getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/client';

const ListadoItems = ({margenTop}) => {

  const { categoriaID } = useParams();
  const margen = margenTop
  const [isLoading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  
  const Loader = useLoader(isLoading, "Cargando productos...")

  // Llamamos a nuestra DB en Firebase
  const productosRef = query(collection(db,'products'))

  const productosFilterRef = categoriaID
    ? query(collection(db, 'products'), where("category", "==", categoriaID))
    : null;

  const getProducts = async () =>
  {
    const data = await getDocs(productosRef)
    const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    setProductos(dataFiltrada)
    setLoading(false);
  }
  
  const getCategoryProducts = async () =>
  {
    if (!productosFilterRef) return;

    const dataCategory = await getDocs(productosFilterRef)
    const categoriaFiltrada = dataCategory.docs.map((doc) => ({...doc.data(), id: doc.id}))
    console.log(`Categoria Filtrada (${categoriaID}): `, categoriaFiltrada);
    setProductosFiltrados(categoriaFiltrada)
    setLoading(false);
  }


  useEffect(() => {
    setLoading(true);

    if (categoriaID) {
      getCategoryProducts()
    } else {
      getProducts()
    }
  }, [categoriaID])

/* Usamos Fetch para levantar la data de forma local. (Habilitar solo para TEST en Localhost)
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

  */

  // Filtramos los productos cuando cambia la categoría
  /*
  useEffect(() => {
    if (categoriaID) {
      getCategoryProducts()
    } else {
      setProductosFiltrados(productos);
    }
  }, [categoriaID, productos]); // Se ejecuta cuando cambia la categoría o la lista de productos
  */
  if (isLoading) return Loader;

  return (
    <Box sx={{ flexGrow: 1, marginBottom:10, marginTop: margen }}>

      <Typography variant="h4" sx={{ textAlign: "center", mb: 3, color:'#000000' }}>
        {categoriaID ? `${categoriaID.toUpperCase()}` : "PRODUCTOS DESTACADOS"}
      </Typography>

      <Grid className="productoContainer" container spacing={4} columns={16}>
        {categoriaID ? (
          productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <Grid key={producto.id} xs={8}>
                <Producto info={producto} />
              </Grid>
            ))
          ) : (
            <Typography sx={{ color: "#000000", textAlign: "center" }}>
              No hay productos en esta categoría.
            </Typography>
          )
        ) : (
          productos.map((producto) => (
            <Grid key={producto.id} xs={8}>
              <Producto info={producto} />
            </Grid>
          ))
        )}
      </Grid>
  </Box>
  );
}

export default ListadoItems