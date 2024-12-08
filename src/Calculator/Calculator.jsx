import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import './Calculator.css';

 function Calculator(){
    const [height,setHeight] = useState("");
    const [weight,setWeight] = useState("");
    const [bmi,setBmi] = useState(null);
    const [category,setCategory] = useState("");

    const calculateBMI=()=>{
        if(height && weight){
            const heightInMeters = height/100;
            const bmi=(weight / (heightInMeters *heightInMeters)).toFixed(3);
            setBmi(bmi);
            if(bmi<18.5){
                    setCategory("Underweight");
            }
            else if(bmi >=18.5 && bmi<=24.9){
                setCategory("Normal Weight");
            }
            else if(bmi>=25 && bmi<=29.9){
                setCategory("Overweight");
            }
            else{
                setCategory("Obese");
            }
        }
    }
    const Reset=()=>{
        setWeight("");
        setHeight("");
        setCategory("");
        setBmi(null);
    }
    return(
        <div className='bmi-card'>
                <h2>BMI Calculator</h2>
                <div className="input-group">
                    <label className="txt"> Weight (kg)</label>
                    <input type="number"
                        value={weight}
                        onChange={(e)=>setWeight(e.target.value)}
                        placeholder="Enter your weight"
                        ></input>
                </div>
                <div className="input-group">
                    <label className="txt">Height (cm)</label>
                    <input type="number"
                            value={height}
                            onChange={(e)=>setHeight(e.target.value)}
                            placeholder="Enter your height"
                    ></input>
                </div>
                <button className="button-calc" onClick={calculateBMI}>Calculate BMI</button>
                <button className="button-calc" onClick={Reset}>Reset</button>
                <button className="button-calc"><Link to='/' className={'link'}>Home</Link></button>
                {
                    bmi && (
                        <div className='result'>
                            <h3>Your BMI: {bmi}</h3>
                            <h4>Category : {category}</h4>
                        </div>
                    )
                }
        </div>
    )
}

export default Calculator
