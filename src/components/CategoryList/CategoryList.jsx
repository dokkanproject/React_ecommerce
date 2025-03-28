import * as React from 'react';
import {Box, Grid2, Card, CardMedia, CardActionArea, Typography} from '@mui/material/';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/client';
import ListadoItems from '../ItemListContainer/ItemListConainer';
import SliderContainer from '../Slider/SliderContainer';

const ListadoCategorias = () => {

    const [categorias, setCategorias] = useState([]);
  
  const navigate = useNavigate()

  // Traemos las Categorias desde Firebase
  useEffect(() => {
    const getCategories = async () => {
      const categoriasRef = collection(db, "category");
      const querySnapshot = await getDocs(categoriasRef);
      const categoriasArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        imagen: doc.data().imagen
      }));

      setCategorias(categoriasArray);
    };

    getCategories();
  }, []);

    return (
        <Box sx={{ flexGrow: 1 , marginTop: 15}}>
            <SliderContainer/>
            <Grid2 className="productoContainer" container spacing={4} columns={16}>
                {categorias.map((page) => (
                    <Grid2 key={page.id} xs={8}>
                        <Card className="tarjetaCategoria" sx={{ maxWidth: 300, width: 345, cursor:'pointer'}} onClick={(e) =>{navigate(`categorias/${page.name}`)}}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ maxHeight: 200, width: "100%", height: 150, objectFit: "contain" }}
                                image={page.imagen}
                                title={page.name}
                            />
                            <Typography key={page.id} sx={{ textAlign: 'center', fontWeight:'bold' }} onClick={() => navigate(`categorias/${page.name}`)}>
                                {page.name}
                            </Typography>
                        </CardActionArea>
                        </Card>
                    </Grid2>
                ))}
            <ListadoItems margenTop={3}/>
            </Grid2>
        </Box>
    )
}

export default ListadoCategorias