import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, Input } from '@mui/material';
import '../App.css';
import { useCount } from '../customHooks/useCount';
import { useEffect } from 'react';

const ItemCount = ({itemID, stockDisp, count, setCount}) =>
{
    let stock       = stockDisp;
    
    const { sumar, restar } = useCount(count, setCount, stock, itemID);
    
    useEffect(() => {
        console.log("Me estoy Renderizando al montarme/nacer y cada vez que el contador cambia "+count)
    },[count])

    const onInputChange = (numero) => {
        
        if(isNaN(numero))
        {
            console.log("TIRO NAN")
        }
        if(count < stock)
        {
            console.log('CAMBIA y Actualizamos '+numero)
            setCount(numero)
        }
        if(numero <= 0)
        {
            setCount(1)
        }
        if(numero > stock)
        {
            setCount(stock)
        }
    }

    return (
        <Box component="section" className='countContainer' sx={{ p: 2, borderRadius: 5, textAlign:'center', width:'fit-content' }}>
            <Button className='botonMasMenos' onClick={restar}>-</Button>
            <Input className='ProductInput' type='number' onChange = {(event) => onInputChange(parseInt(event.target.value))} value={count}/>
            <Button className='botonMasMenos' onClick={sumar}>+</Button>
        </Box>
    )
}

export default ItemCount