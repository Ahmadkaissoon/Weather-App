import React, { useState } from 'react'
import './WeatherApp.css'
import { clear , cloud , drizzle , humidity , rain , search_icon , snow , wind } from './WeatherPics'

const WeatherApp = () => {
    let api_key = "110bb928e5a529784b77d25ea47c4af3" ;

    const [wicon, setwicon] = useState(cloud);

    const search = async () => {
        const element = document.getElementsByClassName("city-input") ;
        if(element[0].value===""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response = await fetch(url) ; 
        let data = await response.json() ;
        const humidity=document.getElementsByClassName("humidity-percent");
        const wind=document.getElementsByClassName("wind-speed");
        const temp=document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName("weather-location");

        humidity[0].innerHTML =Math.floor(data.main.humidity)+" %";
        wind[0].innerHTML =Math.floor(data.wind.speed)+" km/h";
        temp[0].innerHTML =Math.floor(data.main.temp)+" °C";
        location[0].innerHTML =data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setwicon(clear) ;
        }

        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setwicon(cloud) ;
        }

        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setwicon(drizzle) ;
        }

        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setwicon(drizzle) ;
        }

        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setwicon(rain) ;
        }

        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setwicon(rain) ;
        }

        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setwicon(snow) ;
        }

        else{
            setwicon(clear) ;
        }
    }

  return (
    <div className='container'>
    {/* top side */}
      <div className='top-bar'>
        <input type="text" className='city-input' placeholder='search'/>
        <div className='search-icon' onClick={()=>{search()}}>
            <img src={search_icon} alt="search_icon"/>
        </div>
      </div>
    {/* center side */}
      <div className='weather-icon'>
        <img src={wicon} alt="cloud"/>
      </div>
      <div className='weather-temp'>
        24°C
      </div>
      <div className='weather-location'>
        LONDON
      </div>
    {/* buttom side */}
      <div className='data-container'>
        <div className='element'>
            <img src={humidity} className="icon" alt="humidity-icon" />
            <div className='data'>
                <div className='humidity-percent'>
                    64%
                </div>
                <div className='text'>
                    Humidity
                </div>
            </div>
        </div>

        
        <div className='element'>
            <img src={wind} className="icon" alt="wind-icon" />
            <div className='data'>
                <div className='wind-speed'>
                    18 km/h
                </div>
                <div className='text'>
                    Wind speed
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
