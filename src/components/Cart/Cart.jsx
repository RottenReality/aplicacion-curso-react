import React from 'react'
import { useCart } from '../../context/CartContext'

export const Cart = () => {

  const {cart}=useCart()
  console.log('cart', cart)

  return (
    <div>Cart</div>
  )
}
