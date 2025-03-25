import * as React from 'react';
import { Box, CircularProgress, Typography } from "@mui/material";

export const useLoader = (cargando,mensaje) =>{

    //console.log('Cargando '+cargando, 'Mensaje: '+mensaje)
    
    return (
        <Box sx={{ flexGrow: 1, textAlign: "center", mt: 3 }}>
          <CircularProgress />
          <Typography sx={{ color: "#000000" }}>{mensaje}</Typography>
        </Box>
      );
}