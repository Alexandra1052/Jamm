
import './App.css';
import Calculator from './Calculator/Calculator';
import IdealWeight from './IdealWeight/IdealWeight';
import Home from './Home/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import React, { Component } from 'react';


class App extends Component {
 

render(){
  return(
    <div className='app'>
 {/*    <Calculator></Calculator> */}

 <Router>
 <Routes>
 <Route exact path="/" element={<Home/>}/>
    <Route path = "/bmi-calculator" element={<Calculator/>}/>
    <Route path= "/ideal-weight" element={<IdealWeight/>}/>

 </Routes>
 
   
 </Router>


  </div>
  )
}}

export default App;
