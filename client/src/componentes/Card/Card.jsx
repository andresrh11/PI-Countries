import React from "react";
import './card.css'

function Card({props}){
    
    return(
        
            <div className='cardContainer'>
            <h1>{props.name}</h1>
            <h2>{props.continents}</h2>
            
            <img className="bandera" src={props.flags} alt="" />   
        </div>
      
    )
}
export default Card;