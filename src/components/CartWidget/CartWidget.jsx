import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useCart} from '../../context/CartContext';

export const CartWidget = () => {
  const {cartQuantity} = useCart();
  return (
    <div> 
      <ShoppingCartIcon fontSize='medium'/> 
      <span>{cartQuantity() || ""}</span>
    </div>
  )
}