import { useCart } from '../../context/CartContext';

export const CartItem = ({pedido}) => {
    const{removeItem} = useCart();
  return (
    <div style={{border: '3px', borderStyle: 'solid', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem'}}>    
        <img style={{height: 'auto', maxWidth:'100px'}} src={pedido.pictureUrl} alt={pedido.title}/>
        <span>{pedido.title}</span>
        <span>Cantidad: {pedido.quantity}</span>
        <span>${pedido.price}</span>
        <button onClick={()=>removeItem(pedido.id)}>Borrar</button>      
    </div>
  )
}
