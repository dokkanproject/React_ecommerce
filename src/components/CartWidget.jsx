import * as React from 'react';
import {Badge, styled, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const CartWidget = () => {

  const navigate = useNavigate()

  const {lista} = useContext(ShopContext)
  const {handleCount} = useContext(ShopContext)

  //console.log('Cantidad de productos en Carrito: ',lista.length)

  const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
    }));

  return (
      <IconButton aria-label="cart">
          <StyledBadge badgeContent={handleCount()} color="primary"
            onClick={() => navigate(`cart/`)}
          >
              <ShoppingCartOutlinedIcon className='cartIcon' />
          </StyledBadge>
      </IconButton>
  )
}

export default CartWidget
