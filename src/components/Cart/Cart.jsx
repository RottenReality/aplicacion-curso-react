import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import './Cart.css'

export const Cart = () => {

  const {cart, cartTotal, clear}=useCart()
  const navigation = useNavigate();


  return (
    <div>
      {
        !cart.length
        ?<div className='containerEmptyCart'>
          <h2>Tu carrito está vacío</h2>
          <h3>😔</h3>
          <button onClick={()=>navigation('/')}>Ir a comprar</button>
        </div>
        : <div>
            <h2 className='containerCart'>Tu carrito</h2>
            {cart.map((pedido)=> <CartItem key={pedido.id} pedido={pedido}/>)}
            <div className='cartFinalContainer'>
              <div className='price'>
                <span >Total de compra: ${cartTotal()}</span>
              </div >
              <div className='cartButtons'>
                <button onClick={clear}>Vaciar carrito</button>
                <button onClick={()=>navigation('/checkout')}>Finalizar Compra</button>
              </div>
            </div>
            
          </div>
      }
    </div>
  )
}
