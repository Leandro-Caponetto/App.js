
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function Cart() {

  const {getItemQty} = useContext(CartContext)

  return (
    <div>
      <Badge badgeContent={getItemQty()} color="primary">
        <ShoppingCartIcon />
        
      </Badge>
      
    </div >
  )
}

export default Cart