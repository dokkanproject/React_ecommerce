import Slider  from "./Slider";
import { useLoader } from "../../customHooks/useLoader";
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';

const SliderContainer = () =>
{
    const [Slides, setSlides] = useState([])
    const [isLoading, setLoading] = useState(true)
    const Loader = useLoader(isLoading, "Cargando SLIDES...")

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await fetch("/data/slides.json");
                if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");
            
                const data = await response.json();
                
                setTimeout(() => {
                    setSlides(data);
                    setLoading(false);
                }, 500);

            } catch (error) {
                console.error(error.message);
                setLoading(false);
            }
        };

        fetchSlides();
        }, []);
        
        if (isLoading) return Loader;
    return(
        <Box sx={{ marginTop: -7, marginBottom:10 }}>
            <Slider>
                {Slides && Slides.map((image, index) => {
                return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
                })}
            </Slider>
        </Box>
    )
}

export default SliderContainer