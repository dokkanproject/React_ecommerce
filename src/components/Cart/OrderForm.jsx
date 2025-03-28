import * as React from 'react';
import { useState, useContext, Container } from "react";
import {TextField, Button, FormGroup, Typography, Alert, Divider} from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/client';
import { ShopContext } from '../../context/ShopContext';

const OrderForm = ({lista, precioTotal, closeForm}) => {
    
    console.log("Obtenemos la LISTA "+lista)
    const {clearList} = useContext(ShopContext)

    const [error, setError] = useState("");
    const [orderNumber, setOrderNumber] = useState()

    // CREAMOS LA ORDEN DE COMPRA
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        email: "",
    });

    const handleChange = (name, e) => {
        setFormData({...formData,[name]: e,});
    };

    const createOrder = () => {

        console.log("Datos del usuario:", formData);

        //Validamos si los datos ingresados son Correctos
        if (!formData.nombre || !formData.email || !formData.telefono)
        {
            console.log("Todos los campos son obligatorios.")
            setError("Todos los campos son obligatorios.");
            return;
        }

        setError("");

        const order = {
        buyer:
        {
            name: formData.nombre,
            telefono: formData.telefono,
            email: formData.email
        },
        items: lista.map((item) => ({
            id:item.id,
            title:item.name,
            quantity:item.cantidad,
            price:item.precio
        })),
        total:precioTotal
        }

        const orderCollection = collection(db,'orders')
        
        addDoc(orderCollection, order).then(({id}) => {
            console.log("ID de Compra " + id);
            setOrderNumber(id);
            closeForm();
            clearList();
          }).catch((error) => {
            console.error("Error al generar la orden:", error);
          });
    }

    return(
        <>
        {orderNumber ? (
        <>
            <Typography sx={{color:'#000000', fontWeight:'bold', textAlign:'center'}}>
                Finalizaste tu compra con éxito
            </Typography>
            <Typography sx={{color:'#000000', fontWeight:'bold', textAlign:'center'}}>
                Tu ID de compra es: {orderNumber}
            </Typography>
        </>) :(
        <div>
            <Typography sx={{color:'#000000', fontWeight:'bold', textAlign:'center'}}>FORMULARIO DE COMPRA</Typography>
            <Divider sx={{marginBottom:2, marginTop:2}} />
            <FormGroup>
                <TextField sx={{margin:1}} id="nombre" label="Nombre y Apellido" variant="outlined" onChange={(event) => handleChange(event.target.id, event.target.value)}/>
                <TextField sx={{margin:1}} id="telefono" label="Teléfono" variant="outlined" onChange={(event) => handleChange(event.target.id, event.target.value)}/>
                <TextField sx={{margin:1}} id="email" label="Email" variant="outlined" onChange={(event) => handleChange(event.target.id, event.target.value)} />
                {error && (
                    <Alert severity="error">{error}</Alert>
                )}       
                <Button className='BotonComprar' sx={{margin:1}} variant="outlined" onClick={createOrder}>FINALIZAR COMPRA</Button>
            </FormGroup>
        </div>
        )}
        </>
    )

}

export default OrderForm