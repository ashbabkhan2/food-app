import React,{Fragment} from 'react';
import './header.css';
import Cart from '../cart/Cart';
const Header = () =>{
   return (
       <div className='headers'>
       <div className='navbar'>
           <div>
               <h5 className='brand'>eatbest</h5>
           </div>
           <ul className='navbar__lists'>
               <li><a href='#'>Orders</a></li>
               <li><Cart /></li>
           </ul>
       </div>
       <div className='header__texts'>
           <h4>eat the best</h4>
           <h4>food available near you</h4>
           <div className='header__buttons'>
               <a href='#' >SHOP NOW</a> 
               <a href='#' className='select'>EXPLORE</a>
           </div>
       </div>
       </div>
   );
}
export default Header;