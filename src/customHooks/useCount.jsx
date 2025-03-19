import { ShopContext } from "../context/ShopContext";
import { useContext } from 'react';

export const useCount = (count, setCount, stock, idItem) => {

    const { actualizaCantidad } = useContext(ShopContext);

    const restar = () => {
        if(count > 1)
        {
            setCount(count - 1)
            actualizaCantidad(idItem, count - 1)
        }
    }

    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
            actualizaCantidad(idItem, count + 1)
        }
        
    }

    return{sumar, restar}
}
