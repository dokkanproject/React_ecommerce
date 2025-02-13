import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material';

const CartWidget = ({cantidad}) => {
    return (
        <Box>
            <ShoppingCartIcon />
            <p>{cantidad}</p>
        </Box>
    )
}

export default CartWidget
