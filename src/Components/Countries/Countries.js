import React, {useState}from "react";
import { useNavigate } from "react-router-dom";
import '../Countries/Countries.css'

const Countries =(props)=>{
    const navigate=useNavigate();

    const [data,setData]=useState(props.data);
    const handleClick=()=>{
        navigate('/')
    }
    return (
          <div>
            <div className="headerContent">
                <h1>Continent Name: {data[data.length-1].name}</h1>
                <h1>Continent Code: {data[data.length-1].code}</h1>
                <button onClick={handleClick}>Go Back to Continents</button>
                </div>
            <div className='countries'>
                
                {
                data.map((item)=>{
                    return( 
                    (item.region)?
                    <div className="countriesCart">
                    <h4>Name: {item.name}</h4>
                    <h4>Capital: {item.capital}</h4>
                    <h4>Currency: {item.currency.name}</h4>  
                    <h4>Language: {item.language.name}</h4>
                    </div>:""
                ) })    
            
                }
            </div>
        </div>
    )
}
export default Countries;