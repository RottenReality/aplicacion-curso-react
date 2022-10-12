import { Grid } from '@mui/material';
import { useCart } from '../../context/CartContext';
import './CartItem.css'

export const CartItem = ({pedido}) => {
    const{removeItem} = useCart();
  return (
    <Grid className='itemCartContainer' item xs={12} sm={12} md={12} >    
        <img src={pedido.pictureUrl} alt={pedido.title}/>
        <span >{pedido.title}</span>
        <span >Cantidad: {pedido.quantity}</span>
        <span >${pedido.price}</span>
        <button  onClick={()=>removeItem(pedido.id)}>Borrar</button>      
    </Grid>
  )
}
