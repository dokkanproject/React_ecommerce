import * as React from 'react';
import {useEffect, useState} from 'react';
import Producto from '../Item/Item';

const ItemDetailContainer = () =>
{
    const [isLoading, setLoading] = useState(true)
    const [ProductoInf,setProducto] = useState([])

    const GetItem = (prod)  =>
    {
        console.log('****** '+prod)
        return new Promise((resolve, reject) => {
            const infoProducto = prod
            
            setTimeout(()=>{
                infoProducto ? resolve(infoProducto) : reject("No Hay Productos")
                setLoading(false)
            }, 2000);
        })
    }

    useEffect(() => {
        miPromesa.then(res => {
            console.log(res)
            setProducto(res)
        })
    }, [])

    if(isLoading){
        return (
            console.log('Cargando Info de Producto')
        )
    }

    return (
        <Producto info={ProductoInf} GetItem={GetItem} />
    );
}

export default ItemDetailContainer