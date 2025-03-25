import * as React from 'react';
import { useParams } from 'react-router-dom';
import {useFetch} from '../../customHooks/useFetch'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Box } from '@mui/material';
import { db } from '../../firebase/client';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useLoader } from '../../customHooks/useLoader';

const ItemDetailContainer = () =>
{
    const { productID } = useParams(); // Obtenemos el ID de la URL
    //const { data: productos, loading, error } = useFetch("/data/productos.json");

    const productRef = doc (db, 'products',productID)
    const [producto, setProducto] = useState([])
    const [isLoading, setLoading] = useState(true)
    const Loader = useLoader(isLoading, "Cargando producto...")

    const getProduct = () =>
    {
        getDoc(productRef).then((snapshot =>{
            if(snapshot.exists()){
                console.log({id: snapshot.id, ...snapshot.data()})
                setProducto({id: snapshot.id, ...snapshot.data()})
                setLoading(false);
            }
        })
        )
    }

    useEffect(() =>{
        getProduct()
    }, [])

    if (isLoading) return Loader;

    return (
        <Box>
            <ItemDetail info={producto}/>
        </Box>
    );
}

export default ItemDetailContainer