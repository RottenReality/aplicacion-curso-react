import React from 'react'
import './producto.scss'


export const Producto = ({ item }) => {
  console.log(item);
  

  return (
    <div className='producto-container'>
        <p>id: {item.id} </p>
        <p>nombre: {item.name} </p>
        <p>precio: ${item.price} </p>
    </div>
  )
}
