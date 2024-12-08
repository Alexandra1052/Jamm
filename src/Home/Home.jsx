import React from "react";
import './Home.css';
import {Link} from "react-router-dom";

function Home(){
    
    
   
    return(
        <div className="bmi-card">
           <h1>Choose your calculator:</h1>
           <div className="container">
           <button className="button_home"><Link to='/ideal-weight' className={'link'} >Ideal Weight</Link></button>
           <button className="button_home"><Link to='/bmi-calculator' className={'link'}>BMI Calculator</Link></button>
           </div>
         
        </div>
    )
}

export default Home