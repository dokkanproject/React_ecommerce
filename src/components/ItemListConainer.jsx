import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Producto from './Producto';

const ListadoItems = () => {
  const Item = styled(Paper)(({ theme }) => ({}));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid className="productoContainer" container spacing={4} columns={16}>
        <Grid item xs={8}>
          <Item><Producto/></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><Producto/></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><Producto/></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><Producto/></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><Producto/></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><Producto/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ListadoItems