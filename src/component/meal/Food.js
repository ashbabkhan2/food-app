import React from 'react';
import Meal from './Meal';
import Meal2 from './Meal2';
import './food.css';
const Food = () =>{
  return(
    <React.Fragment>
          <Meal />
          <Meal2 />
    </React.Fragment>
  );
}
export default Food;