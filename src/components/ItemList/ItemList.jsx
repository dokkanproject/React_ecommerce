import * as React from 'react';
import {Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import Producto from '../Item/Item';

const ItemList = ({productos, categoriaID, margen, productosFiltrados}) =>
{
    return(
        <Box sx={{ flexGrow: 1, marginBottom:10, marginTop: margen }}>
            <Typography variant="h4" sx={{ textAlign: "center", mb: 3, color:'#000000' }}>
                {categoriaID ? `${categoriaID.toUpperCase()}` : "PRODUCTOS DESTACADOS"}
            </Typography>

            <Grid className="productoContainer" container spacing={4} columns={16}>
                {categoriaID ? (
                    productosFiltrados.length > 0 ? (
                        productosFiltrados.map((producto) => (
                            <Grid key={producto.id} xs={8}>
                                <Producto info={producto} />
                            </Grid>
                        ))
                    ) : (
                        <Typography sx={{ color: "#000000", textAlign: "center" }}>
                            No hay productos en esta categoría.
                        </Typography>
                    )
                    ) : (
                    productos.map((producto) => (
                        <Grid key={producto.id} xs={8}>
                            <Producto info={producto} />
                        </Grid>
                    ))
                )}
            </Grid>
        </Box>
    )
}

export default ItemList