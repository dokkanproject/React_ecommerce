import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Typography } from '@mui/material';

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
            <ShoppingCartOutlinedIcon className='cartIcon' />
        </StyledBadge>
        </IconButton>
    )
}

export default CartWidget
