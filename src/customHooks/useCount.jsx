import { useState } from "react";

export const useCount = (initial = 1, stock) => {

    const [count, setCount] = useState(initial)

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

    return{count, sumar, restar}
}
