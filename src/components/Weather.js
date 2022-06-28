import React, { useState } from 'react'
import './weather.css';
import DisplayWeather from './DisplayWeather';
export default function Weather() {
   
const [weatherdata,setWeatherData] = useState("")
function MyForm(){ 
    const [city,setcity] = useState("")
    const  handleSubmit =(e)=>{
        e.preventDefault();
        callApi(`${city}`)
    } 
     function callApi(city_name){
        let apikey="72826be3dfeb41c7b09e20735ea43c9b"
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apikey}`)
        .then(res=>res.json())
        .then(data=>setWeatherData(data))
        
    }
    return(
    <form onSubmit={handleSubmit} className="form">
        <label>Enter city</label>
        <input type="text" 
            value={city} 
            onChange={e => setcity(e.target.value)}
            />
        <br/>
        <input type="submit"/>
      </form>

    )
}
  return (
  
    <>
    <div className="div_body">
      <h1>Weather App</h1>
      <br/>
      <MyForm/>
      {weatherdata!="" ? <div><DisplayWeather data={weatherdata}/></div>:<div/>} 
      {/* {props.weatherdata!=undefined ? (<div>hi</div>):<div/>} */}
    </div>
    </>
  )
}







