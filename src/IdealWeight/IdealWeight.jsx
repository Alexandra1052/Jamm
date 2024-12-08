import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import "./IdealWeight.css";
function IdealWeight(){
   
    const [gender,setGender]=useState("female");
    const [height,setHeight] = useState("");
    const [age,setAge] = useState("");
    const [iw,setiw]=useState(null);

    const CalculateIW=()=>{
        let iw;
        if(height &&  age){
            console.log(gender);
            if(gender =="female"){
                console.log(gender);
                iw=(45.5+0.91 *( height - 152.4)).toFixed(2);
                
            }
            else {
              iw=(50+0.91 * (height - 152.4)).toFixed(2);
    
            }
            setiw(iw);
        }
        console.log(iw);
       
    }
    const resetVal=()=>{
        setHeight("");
        setAge("");
        setGender("");
        setiw(null);
    }
    return(
        <div className="bmi-card_iw">
            <h2>Ideal Weight Calculator</h2>
            <div className="input-group">
            <label className="txt">Gender: </label>
            <select name="gender" value={gender} onChange={(e)=>setGender(e.target.value)} className="gender">
                
                <option value='female' className="option">Female</option>
                <option value='male'className="option">Male</option>
            </select>
            </div>
            <div className="input-group">
            <label className="txt" >Height</label>
            <input value={height} type="number" onChange={(e)=>setHeight(e.target.value)} placeholder="Enter your height"></input>
            </div>
            <div className="input-group">
            <label className="txt" id="text" >Age:</label>
            <input value={age} type="number" onChange={(e)=>setAge(e.target.value)} placeholder="Enter your age"></input>
            </div>
            <div className="container">
            <button className="btn" onClick={CalculateIW}>Calculate</button>
            <button className="btn" onClick={resetVal}>Reset</button>
            <button className="btn"><Link to='/' className={'link'}>Home</Link></button>
            </div>

           
            {
               iw&& (
                    <div className="result">
                        <h4>Your ideal weight: {iw}</h4>
                    </div>
                )
            }
        </div>
    )
}
export default IdealWeight