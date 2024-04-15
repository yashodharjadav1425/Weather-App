    import React, { useState, useEffect } from "react";
    import WeatherCard from "./WeatherCard";
    import "./App.css";
    const App = () => {
      const [searchValue, setSearchValue] = useState("pune");
      const [tempInfo, setTempInfo] = useState({});
      const getWeatherInfo = async () => {
        try {
          const apiKey = '87999e502e3d33bbc1b6645708661c62'; 
          const units = 'metric'; 
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(searchValue)}&units=${units}&appid=${apiKey}`;

          let res = await fetch(url);
          let data = await res.json();
          
          const { temp, pressure, humidity } = data.main;
          const { main : weathermood } = data.weather[0];
          const { name } = data;
          const { speed } = data.wind;
          const { country, sunset } = data.sys; 
          const myWeatherInfo = {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset,
          };
        console.log(myWeatherInfo);

          setTempInfo(myWeatherInfo);

        } catch (error) {
          console.log(error);
        }
      }
      useEffect(() => {
        getWeatherInfo()
      }, [tempInfo])
      return (
        <>
          
          <div className="App">
          <div className="header">CM's Weather App</div>
          <div className="Search">

            <input 
              type="search"
              placeholder="Enter City name"
              autoFocus
              id="search"
              className="searchTerm"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="btn" onClick={getWeatherInfo}>Search</button>
          </div>

          <WeatherCard tempInfo={tempInfo}/>      
          </div>
        
        </>
      );
    };
    export default App


    