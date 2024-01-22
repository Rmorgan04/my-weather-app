import React from 'react';
import { useEffect, useState } from 'react';
import Weather from './Components/Weather';


function App() {

  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    async function fetchWeatherData() {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      })
  
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setWeatherData(result)
        console.log(result);
      });
  };
  
  fetchWeatherData();
  }, [lat, lon]);

  
 
  return (
    <div>
      {(typeof weatherData.main != 'undefined') ? (
        <Weather data={weatherData} />
      ) : (
        <div>Unable to Load Data</div>
      )}
      

    </div>
  );
}

export default App;
