import { createContext, useState } from "react"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase/client"

export const ShopContext = createContext()

export const ShopComponentContext = ({children}) =>
{
    const [lista, setLista] = useState([])

    //Contamos la CANT de Items Agregados
    const handleCount = () => {
        let contador = 0
        lista.forEach((item) => {
            contador += item.cantidad
        })
        return contador
    }

    const addToList = (item,cantidad) =>
    {
        console.log('Desde CONTEXT '+item.name+' cantidad '+cantidad)

        // Ahora Verificamos si el producto ya está en la lista
        const index = lista.findIndex((prod) => prod.id === item.id);

        if (index !== -1) {
            // Si ya está en la lista, sólo actualizamos la cantidad y chequeamos que no se pase del STOCK
            const nuevaLista = [...lista];

            console.log('CANTIDAD En CARRITO '+nuevaLista[index].cantidad+' CANT COLOCADA '+cantidad+' STOCK de '+item.stock)

            if(nuevaLista[index].cantidad < item.stock)
            {
                nuevaLista[index].cantidad += cantidad;
                setLista([...nuevaLista]);
            }
        } else {
            // Si no está en la lista, Agregamos el Producto
            setLista([...lista, { ...item, cantidad }]);
        }
    }

    const removeFromList = (itemID) =>
    {
        setLista(lista.filter((item) => item.id !== itemID));
    }

    const clearList = () =>
    {
        setLista([]);
    }

    // Actualizamos la cantidad del Item y lo llamamos desde el CustomHook UseCount
    const actualizaCantidad = (itemID, cantidad) => {
        setLista(lista.map(item =>
            item.id === itemID ? { ...item, cantidad } : item
        ));
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

    return(
        <ShopContext.Provider value={{lista, addToList, removeFromList, clearList, actualizaCantidad, handleCount, updateStock}}>
            {children}
        </ShopContext.Provider>

    )
}