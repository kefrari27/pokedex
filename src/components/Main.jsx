import React from "react";
import Card from "./Card";
import Cards from "./Cards";


const Main=()=>{
    return(
        <>
        <div className = "container">
 
            {/* <img src = "./imgpokedex/pokedex.png" alt = "pokedex" />  */}
            <div className="left-content">
                <Card/>
                <Card/>
                <Card/>

                
            </div>
            <div className="right-content">
                <Cards/>
            </div>


        </div>

        </>
    )
}
export default Main;