import React, { useEffect, useState } from "react";
import "./css/style.css"

const Tempapp =() => {
   
    const[city,setCity]=useState(null);
   
    const[search,setSearch]=useState("Bangalore")
   
    useEffect (() =>{
       
        const fetchApi = async () =>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=25b5c67ef658b4b600d605c53e8e3406`
            
            const response =await fetch(url)
          
            const resJson = await response.json();
            // console.log(resJson)
            
            setCity(resJson.main)
        }

        fetchApi();
    },[search])
    
    return(
        <>
<div className="app">
    <div className="search-box">
        
        <input type="search"value={search}  className="search-bar"  onChange={(event) =>{setSearch(event.target.value)}}/>
                          {/*     defalut place */}
    </div>
  
    {!city ? (
        <h1 className="errorMsg">No city found</h1>
    ) : (
        <div>
        <div className="location-box">
        <h2 className="location">
       {search} 
        </h2>
        <div className="weather-box">
    <h1 className="temp">
    
        {city.temp}°Cel
    </h1>
    <h3 className="weather"> Min : {city.temp_min}°Cel |Max :{city.temp_max}°Cel</h3>
    </div>
    </div>
    
    </div>

    )}

</div>

    </>
    )
    
}
export default Tempapp;