import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import ItemCart from './ItemCart';

const Cart = () => {
    
    const {lista} = useContext(ShopContext)
    console.log('Mi Lista es: ', lista)

    // Constantes desde Material
    const TAX_RATE = 0.21;

    function ccyFormat(num) {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        }).format(num);
    }

    function subtotal(items) {
        return items.reduce((sum, item) => sum + (item.cantidad * Number(item.descuento)), 0);
    }

    const invoiceSubtotal = subtotal(lista);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;

    console.log('Items en el Carrito '+lista.length)

    if(lista.length == 0)
    {
        return(
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">NO HAY PRODUCTOS EN EL CARRITO</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        )
    }else{
        return(
        
            <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Desc</TableCell>
                <TableCell align="right">CANT</TableCell>
                <TableCell align="right">PRECIO</TableCell>
                <TableCell align="right">SUMA</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {lista.map((row, index) => (
                <ItemCart item={row} indice={index}/>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell></TableCell>
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
              </TableRow>
              <TableRow>
              <TableCell></TableCell>
                <TableCell>IVA</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
              </TableRow>
              <TableRow>
              <TableCell></TableCell>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        )
    }

    
}

export default Cart