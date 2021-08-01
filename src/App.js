import './App.css';
import React from 'react';
import Header from './component/Header/Header';
import Food from './component/meal/Food';
const App = () =>{
  return(
    <React.Fragment>
       <Header />
       <Food />
    </React.Fragment>
  );
}
export default App;