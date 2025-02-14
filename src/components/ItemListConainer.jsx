import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Producto from './Producto/Producto';

const ListadoItems = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className="productoContainer" container spacing={4} columns={16}>
        <Grid item xs={8}>
          <Producto/>
        </Grid>
        <Grid item xs={8}>
          <Producto/>
        </Grid>
        <Grid item xs={8}>
          <Producto/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ListadoItems