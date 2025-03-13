import { createContext, useState } from "react"

export const ShopContext = createContext()

export const ShopComponentContext = ({children}) =>
{
    const [lista, setLista] = useState([])

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

    return(
        <ShopContext.Provider value={{lista,addToList}}>
            {children}
        </ShopContext.Provider>

    )
}