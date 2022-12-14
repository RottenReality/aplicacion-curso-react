import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { useContext,  useState } from 'react';
import { CartContext } from '../../context/CartContext';
import {db} from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom'
import './Checkout.css'
export const Checkout = () => {

    const {cart, cartTotal, clear} = useContext(CartContext)
    const [orderId, setOrderId] = useState()
    const navigation = useNavigate();

    const [buyer, setBuyer] = useState({
        name:'',
        email:'',
        phone:''
    });

    const {name, email, phone} = buyer;

    const generateOrder = async(data) =>{
        try{
            const col = collection(db, "orders")
            const order = await addDoc(col, data)
            setOrderId(order.id)
            clear()
        } catch(error) {
            console.log(error)
        }
    }

    const handleInputChange = (e) =>{
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const items = cart.map(e => {return {id:e.id, title:e.title, price:e.price, quantity: e.quantity}})
        const date = new Date()
        const total = cartTotal()
        const data = {buyer, items, date, total}
        generateOrder(data)
    }

  return (
    <div>
        <h1>Order data</h1>
        {!orderId ? 
        <div>
            <form className='formContainer' onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name' value={name} onChange={handleInputChange} />
                <input type="text" name='email' placeholder='Email' value={email} onChange={handleInputChange} />
                <input type="text" name='phone' placeholder='Phone' value={phone} onChange={handleInputChange} />
            </form>
            <div className='containerButtonsCheckout'>
                <input className='buttonBuy' type="submit" value='Buy' />
                <button onClick={()=>navigation('/cart')} >Go back</button>
            </div>
        </div> : 
            <div>
                <h3>Your order id is: {orderId} </h3>
                <button onClick={()=>navigation('/')} >Continue Shopping</button>
            </div>}

    </div>
  )
}