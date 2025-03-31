import * as React from 'react';
import { useState, useContext, Container } from "react";
import {TextField, Button, FormGroup, Typography, Alert, Divider, Box} from '@mui/material';
import { doc, addDoc, collection, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';
import { ShopContext } from '../../context/ShopContext';

const OrderForm = ({lista, precioTotal, closeForm}) => {
    
    console.log("Obtenemos la LISTA "+lista)
    const {clearList} = useContext(ShopContext)

    const [error, setError] = useState("");
    const [orderProcess, setOrderProcess] = useState("")
    const [orderNumber, setOrderNumber] = useState()
    const [formData, setFormData] = useState({nombre: "",telefono: "",email: ""});

    const handleChange = (name, e) => {
        setFormData({...formData,[name]: e,});
    };

    // ACTUALIZAMOS EL STOCK DE LOS PRODUCTOS COMPRADOS
    const updateStock = async (productosComprados) => {
        try {
            const updates = productosComprados.map(async (item) => {
            const productRef = doc(db, "products", item.id);
            const nuevoStock = item.stock - item.cantidad;
        
            if (nuevoStock >= 0) {
                await updateDoc(productRef, { stock: nuevoStock });
                console.log(`Stock actualizado para ${item.name}: ${nuevoStock}`);
            } else {
                console.error(`Stock insuficiente para ${item.name}`);
            }
            });
        
            await Promise.all(updates);
        } catch (error) {
            console.error("Error actualizando stock:", error);
        }
    };

    // CREAMOS LA ORDEN DE COMPRA
    const createOrder = async () => {

        console.log("Datos del usuario:", formData);

        //Validamos si los datos ingresados son Correctos
        if (!formData.nombre || !formData.email || !formData.telefono)
        {
            console.log("Todos los campos son obligatorios.")
            setError("Todos los campos son obligatorios.");
            return;
        }

        setOrderProcess("PROCESANDO COMPRA")
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

        try{
            const orderCollection = collection(db,'orders')
            const docRef = await addDoc(orderCollection, order);

            console.log("ID de Compra " + docRef.id);
            setOrderNumber(docRef.id);
            await updateStock(lista);
            setOrderProcess("");

        }catch(error){
            console.error("Error al generar la orden:", error);
        }
    }

    return(
        <>
        {orderNumber ? (
        <>
        <Box sx={{alignContent:'center'}}>
            <Typography sx={{color:'#000000', fontWeight:'bold', textAlign:'center'}}>
                ¡{formData.nombre} FELICIDADES POR TU COMPRA!
            </Typography>
            <Typography sx={{color:'#000000', fontWeight:'bold', textAlign:'center'}}>
                Tu ID de Referencia es
            </Typography>
            <Typography sx={{color:'#ff0000', fontWeight:'bold', textAlign:'center'}}>{orderNumber}</Typography>
            <Button className='BotonComprar' sx={{margin:1}} variant="outlined"
            onClick={() => {
                closeForm();
                clearList();
              }}
              >CONTINUAR</Button>
        </Box>
        </>
        ):(
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
                {orderProcess &&(<Alert severity="info">{orderProcess}</Alert>)}   
                <Button className='BotonComprar' sx={{margin:1}} variant="outlined" onClick={createOrder}>FINALIZAR COMPRA</Button>
            </FormGroup>
        </div>
        )}
        </>
    )

}

export default OrderForm