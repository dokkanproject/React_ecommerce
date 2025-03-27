import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(`Fetching data from: ${url}`);

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Error al cargar los datos");

                const result = await response.json();

                console.log("Resultado "+result)
                
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, [url]);

    return { data, loading, error };
};