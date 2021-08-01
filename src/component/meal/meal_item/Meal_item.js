import react from 'react';
import './meal_item.css';
import Add_item from './Add_item';
const Meal_item = (props) =>{
    return(
       <div className='meal_items'>
           <div className='title'>{props.title}</div>
           <div className='description'>{props.description}</div>
           <div className='price'>${props.price}</div>
           <Add_item />
       </div>
    );
}
export default Meal_item;