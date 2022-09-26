import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'

export const Cart = () => {

  const {cart, cartTotal, clear}=useCart()
  const navigation = useNavigate();


  return (
    <div>
      {
        !cart.length
        ?<div>
          <h2>Tu carrito está vacío 😔</h2>
          <button onClick={()=>navigation('/')}>Ir a comprar</button>
        </div>
        : <div>
            <h2>Tu carrito</h2>
            {cart.map((pedido)=> <CartItem key={pedido.id} pedido={pedido}/>)}
            <span>Total de compra: ${cartTotal()}</span>
            <button onClick={clear}>Vaciar carrito</button>
            <button onClick={()=>navigation('/checkout')} >Finalizar Compra</button>
          </div>
      }
    </div>
  )
}
