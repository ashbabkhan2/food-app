import React from 'react';
import './cart.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const Cart = () =>{
  return(
       <button className='cart'> 
           <span><AddShoppingCartIcon className='icons' style={{color:'black',width:'18px'}} /></span>
           <span classname='cart__texts'>Cart</span>
           <span className='no_of_items'>3</span>
       </button>
  );
}
export default Cart;