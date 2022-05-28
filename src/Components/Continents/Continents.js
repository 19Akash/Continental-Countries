import React, { useState } from 'react';
import '../Continents/Continents.css'
import {useNavigate} from "react-router-dom"
import { Countries } from '../../Assets/data';


const Continents =({handleData})=>{
    const navigate = useNavigate();
    const [continent,setContinent]=useState();
    const continents=[
        {
            name:"Asia",
            code:"AS"
        },
        {
            name:"Africa",
            code:"AF"
        },
        {
            name:"Europe",
            code:"EU"
        },
        {
            name:"North America",
            code:"NA"
        },
        {
            name:"South America",
            code:"SA"
        },
        {
            name:"Australia/Oceania",
            code:"OC"
        },
        {
            name:"Antarctica",
            code:"AN"
        }
];
    const handleClick =(cont,e)=>{
        let data= Countries.filter((item)=>{
            return item.region===cont.code
        })
        data=[...data,cont]
        handleData(data);
        navigate('/details')
       
    }
    const handleChange=(value)=>{
        let data= Countries.filter((item)=>{
            return item.region===value
        })
        let head= continents.filter((item)=>{
            return item.code===value
        })
        
        data=[...data,head[0]]
        handleData(data);
        console.log(data)
        navigate('/details')
    }

    return(
        <div>
            <div className='dropdown'>
                <label>Choose a Continent: </label>
                    <select onChange={(e) => handleChange(e.target.value)}>
                    <option value="">Select</option> 
                    <option value="AS">Asia</option> 
                    <option value="AF">Africa</option>
                    <option value="EU">Europe</option>
                    <option value="NA">North America</option>
                    <option value="SA">South America</option>
                    <option value="OC">Australia/Oceania</option>
                    <option value="AN">Antarctica</option>  
                </select>
            </div>
            <div className='continents'>
                {
                continents.map((item)=>{
                    return <div className="continentCart" onClick={(e)=>handleClick(item,e)}>{item.name}</div>
                })    
            
                }
            </div>
        </div>
    )
}
export default Continents;