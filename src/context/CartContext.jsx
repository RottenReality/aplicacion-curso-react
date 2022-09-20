import { useContext, useState } from "react";
import { createContext } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

  
    const addItem = (item) => {
        if(isInCart(item.id)){
            const currentCart = cart.map((prod)=>{
                if(prod.id == item.id){
                    return {...prod, quantity:prod.quantity + item.quantity}
                }else{
                    return prod
                }
            })
            setCart(currentCart)
        }else{
            setCart([...cart, item])
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter((item)=> item.id != id))
    }

    const clear = () => {
        setCart([])
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity * prod.price, 0)
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id == id)
    }

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, cartQuantity, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)