import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useEffect } from "react";

export default function Notification({ informacion, open, setOpen }) {
  
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [open, setOpen]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      message={`Se agregó ${informacion.name} al carrito`}
    />
  );
}