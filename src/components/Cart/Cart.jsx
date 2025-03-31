import * as React from 'react';
import {Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Modal, Box, Paper, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ItemCart from './ItemCart';
import OrderForm from './OrderForm';

const Cart = () => {
    
    const navigate = useNavigate()
    const {lista} = useContext(ShopContext)
    const {clearList} = useContext(ShopContext)

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    console.log('Mi Lista es: ', lista)

    let precioTotal = 0;

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
        <Container>
          <Typography sx={{color:'#000000', fontWeight:'bold', textAlign:'center'}}>NO HAY PRODUCTOS EN EL CARRITO</Typography>
          <Button className='BotonComprar' sx={{marginTop:5}} variant="outlined" onClick={() => navigate('/')}>VOLVER AL INICIO</Button>
        </Container>
      )
    }else{
      return(
        <TableContainer className='ListaCarrito' component={Paper} sx={{marginTop:10, marginBottom:70, maxWidth:800}}>
        <Table aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Desc</TableCell>
              <TableCell align="center">CANT</TableCell>
              <TableCell align="right">PRECIO</TableCell>
              <TableCell align="right">SUMA</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {lista.map((row, index) => (
              <ItemCart key={row.id} item={row} indice={row.id}/>
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

        <Container>
          <Button sx={{margin:1}} className='BotonComprar' variant="outlined" startIcon={<DeleteIcon />} onClick={clearList}>LIMPIAR CARRITO</Button>
          <Button sx={{margin:1}} className='BotonComprar' variant="outlined" onClick={handleOpen}>FINALIZAR COMPRA</Button>
        </Container>
        <Modal open={open} onClose={handleClose}>
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", boxShadow: 24, p: 4 }}>
                <OrderForm lista={lista} precioTotal={ccyFormat(invoiceTotal)} closeForm={handleClose} />
            </Box>
        </Modal>
      </TableContainer>
      )
    }

    
}

export default Cart