import * as React from 'react';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useLoader } from '../../customHooks/useLoader';
import {getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/client';
import ItemList from '../ItemList/ItemList';

const ListadoItems = ({margenTop}) => {

  const { categoriaID } = useParams();
  const margen = margenTop
  const [isLoading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  
  const Loader = useLoader(isLoading, "Cargando productos...")

  // Llamamos a nuestra DB en Firebase
  const productosRef = query(collection(db,'products'))

  // Filtramos los Productos por Categoria
  const productosFilterRef = categoriaID
    ? query(collection(db, 'products'), where("category", "==", categoriaID))
    : null;

  // Traemos todos los Productos
  const getProducts = async () =>
  {
    const data = await getDocs(productosRef)
    const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    setProductos(dataFiltrada)
    setLoading(false);
  }
  
  // Traemos los Productos Filtrados por Categoría
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
    <ItemList productos={productos} categoriaID={categoriaID} margen={margen} productosFiltrados={productosFiltrados}/>
  );
}

export default ListadoItems