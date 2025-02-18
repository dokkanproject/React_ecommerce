import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, Input, Typography } from '@mui/material';
import '../App.css';
import { useState, useEffect } from 'react';

const ItemCount = () =>
{
    const [contador, setContador] = useState(1)

    let stock = 5;

    /*
    useEffect(() => {
        console.log("Me estoy Renderizando al montarme/nacer solamente")
    },[])

    useEffect(() => {
        console.log("Me estoy Renderizando al montarme/nacer y cada vez que un estado cambia")
    })
    */
    useEffect(() => {
        console.log("Me estoy Renderizando al montarme/nacer y cada vez que el contador cambia")
    },[contador])

    const onAdd = () =>
    {
        console.log("Agregando al Carrito la cantidad de "+ contador)
    }

    const restarContador = () => {
        if(contador > 1)
        {
            setContador(contador - 1)
        }
    }

    const sumarContador = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
        
    }

    const onInputChange = (numero) => {
        
        if(isNaN(numero))
        {
            console.log("TIRO NAN")
        }
        else if(contador < stock)
        {
            setContador(numero)
        }
        else{
            setContador(stock)
        }
    }

    return (
        <Box>
            <Button onClick={restarContador}>-</Button>
            <Input className='ProductInput' type='number' onChange = {(event) => onInputChange(parseInt(event.target.value))} value={contador}></Input>
            <Button onClick={sumarContador}>+</Button>
            <Button className='BotonComprar' onClick={onAdd} size="small">AGREGAR AL CARRITO</Button>
        </Box>
    )
}

export default ItemCount