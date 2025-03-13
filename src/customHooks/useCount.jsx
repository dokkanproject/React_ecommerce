import { useState } from "react";

export const useCount = (count, setCount, stock) => {

    const restar = () => {
        if(count > 1)
        {
            setCount(count - 1)
        }
    }

    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
        
    }

    return{sumar, restar}
}
