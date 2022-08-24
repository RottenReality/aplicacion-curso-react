import React from 'react'

export const Producto = ({ item }) => {
  console.log(item);
  
  return (
    <div style={{ backgroundColor: "darkred" , color: 'white', margin: '8px' }}>
        <p>id: {item.id} </p>
        <p>nombre: {item.name} </p>
        <p>precio: ${item.price} </p>
    </div>
  )
}
