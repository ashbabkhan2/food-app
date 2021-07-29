import './App.css';
import React from 'react';
import Header from './component/Header/Header';
import Meal from './component/meal/Meal';
const App = () =>{
  return(
    <React.Fragment>
       <Header />
       <Meal />
    </React.Fragment>
  );
}
export default App;