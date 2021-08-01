import React,{useState,useEffect} from 'react';
import Meal_item from './meal_item/Meal_item';
import './Meal2.css';
const Meal2 = () =>{
 const [value,setvalue] = useState([]);
 useEffect(()=>{
    setvalue([
     {id:1,name:'Burger',price:30,description:'Cheese burger'},
     {id:2,name:'Pizza',price:200,description:'Extra mozerella cheese'},
     {id:3,name:'Sandwich',price:70,description:'double sandwich'}
 ]);
 },[]);
 
  return(
     <div className='Meal2'>
        {value.map((e)=>{
            return <Meal_item key={e.id} title={e.name} description={e.description} price={e.price}/>
        })}
     </div>
  );
}
export default Meal2;