import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch(); 
    const handleClearCart  = () =>{
        dispatch(clearCart())
    }
  return (
    <div className='text-center m-5 p-5'>
      <h1 className="font-bold text-xl my-4"> Cart </h1>
      <div className='w-6/12 m-auto'>
        <button 
            className="bg-green-500 text-white py-1 px-3 rounded-lg my-4"
            onClick={handleClearCart}
        > 
            Clear Cart
        </button>
        <ItemList items={cartItems}></ItemList>

      </div>
    </div>
  )
}

export default Cart
