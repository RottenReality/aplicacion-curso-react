import React,{useState} from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
export const ItemDetail = ({detail}) => {

    const {id, title, price, stock, pictureUrl} = detail;
    const [count, setCount] = useState(0);
    const [compra, setCompra] = useState(false);
    const navigation = useNavigate();
    const {addItem} = useCart();

    const onAdd = () => {
      let purchase = {
        id,
        title, 
        price, 
        stock, 
        pictureUrl,
        quantity:count
      }
     setCompra(true);
     addItem(purchase);
    }


  return (
    <div>
        <h2>{detail.title}</h2>
        <img src={detail.pictureUrl} alt={detail.title}></img>
        <p> {detail.description} </p>
        <p> Precio: {detail.price} </p>
        <p> Disponible: {detail.stock} </p>
        {!compra ? 
          <ItemCount stock={detail.stock} initial={0} onAdd={onAdd} count = {count}  setCount = {setCount}></ItemCount> :  
          <div>
            <button onClick={()=>navigation('/cart') }>Ir al carrito</button>
            <button onClick={()=> setCompra(false)}>Seguir comprando</button>
          </div> }
    </div>
  )
};