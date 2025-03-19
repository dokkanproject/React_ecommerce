import * as React from 'react';
import { useContext } from 'react';
import {useState} from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { CardMedia } from '@mui/material';
import { ShopContext } from '../../context/ShopContext';
import ItemCount from '../ItemCount';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


const ItemCart = ({item, indice}) =>
{
    const [count, setCount] = useState(item.cantidad)
    const {removeFromList} = useContext(ShopContext)

    function ccyFormat(num) {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        }).format(num);
    }


    return(
        <TableRow key={indice}>
            <CardMedia component="img" height="70" image={item.imagen} alt={item.name} sx={{ width:'auto'}}/>
            <TableCell>{item.name}</TableCell>
            <TableCell align="right">
                <ItemCount itemID={item.id} stockDisp={item.stock} count={count} setCount={setCount}></ItemCount>
            </TableCell>
            <TableCell align="right">{item.descuento}</TableCell>
            <TableCell align="right">{ccyFormat(item.descuento*item.cantidad)}</TableCell>
            <TableCell>
            <DeleteForeverOutlinedIcon onClick={() => removeFromList(item.id)} sx={{ cursor:'pointer'}}/>
            </TableCell>
        </TableRow>
    )
}

export default ItemCart