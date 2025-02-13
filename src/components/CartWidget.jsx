import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          border: `1px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));

    return (
        <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon className='cartIcon' />
        </StyledBadge>
        </IconButton>
    )
}

export default CartWidget
