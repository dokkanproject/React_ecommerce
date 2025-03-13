import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, Input } from '@mui/material';
import '../App.css';
import { useCount } from '../customHooks/useCount';
import { useEffect } from 'react';

const ItemCount = ({stockDisp, count, setCount}) =>
{
    let stock       = stockDisp;

    const { sumar, restar } = useCount(count, setCount, stock);
    
    useEffect(() => {
        console.log("Me estoy Renderizando al montarme/nacer y cada vez que el contador cambia "+count)
    },[count])

    const onInputChange = (numero) => {
        
        if(isNaN(numero))
        {
            console.log("TIRO NAN")
        }
        else if(count < stock)
        {
            setCount(numero)
        }
        else{
            setCount(stock)
        }
    }
        
    return (
        <Box>
            <Button className='botonesMasMenos' onClick={restar}>-</Button>
            <Input className='ProductInput' type='number' onChange = {(event) => onInputChange(parseInt(event.target.value))} value={count}/>
            <Button className='botonesMasMenos' onClick={sumar}>+</Button>
        </Box>
    )
}

export default ItemCount