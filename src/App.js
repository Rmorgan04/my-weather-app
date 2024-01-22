import React from 'react';
import { useEffect, useState } from 'react';
import Weather from './Components/Weather';


function App() {


  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      })

      await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
        setWeatherData(result)
        console.log(result);
        }),

        fetch(`https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
        setForecastData(result)
        console.log(result);
        })
      ]);
  
  };
  
  fetchData();
  }, [lat, lon]);

  
 
  return (
    <div>
      {(typeof weatherData.main != 'undefined') ? (
        <Weather weatherData={weatherData} forecastData={forecastData}/>
      ) : (
        <div>Unable to Load Data</div>
      )}
      

    </div>
  );
}

export default App;
