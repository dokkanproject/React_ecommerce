import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";

const ItemList = () =>
{
    const [Listado, setItemList] = useState([])

    useEffect(()=>
    {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            setItemList(json)
        })
        .catch(error => {
            console.log('Error del Catch '+error)
        })
    }, [])

    return (
    <>
    {Listado.map((producto) => {
        return(
            <Typography sx={{ color: '#000000', textAlign:'center' }}>{producto.title}</Typography>
        )
    })}
    </>
    );
}

export default ItemList