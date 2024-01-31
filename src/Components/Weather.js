import { useState, useEffect } from "react";
import Forecast from "./Forecast";

function Weather({weatherData, forecastData}) {

    const icon = weatherData.weather[0].icon

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString().slice(0, 4) + new Date().toLocaleTimeString().slice(7);

    let city = '';
    if (weatherData.name === "Cherokee") {
        city = 'Tahlequah';
    } else {
        city = weatherData.name;
    }

    const sunriseDate = new Date(weatherData.sys.sunrise *1000).toLocaleTimeString().slice(0, 4) + new Date(weatherData.sys.sunrise *1000).toLocaleTimeString().slice(7);
    const sunsetDate = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString().slice(0, 4) + new Date(weatherData.sys.sunset * 1000).toLocaleTimeString().slice(7);


    return (
        <main className="screen">
            <header>
                <h2 className="city-name">{city}</h2>
            </header>
            <section className="main-section">
                <div className="weather-info">
                    <h3>{Math.floor(weatherData.main.temp)}&deg; F</h3>
                    <h4 className="description">{weatherData.weather[0].description}</h4>
                    <h4>{Math.floor(weatherData.main.temp_max)}&deg; / {Math.floor(weatherData.main.temp_min)}&deg; Feels like {Math.floor(weatherData.main.feels_like)}&deg;</h4>
                </div>
                <div className="icon-container">
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='weather' />
                </div>
            </section>
            <section className="forecast-section">
                <Forecast forecastData={forecastData} />
            </section>
            <section className="additional-info">
                <div className="additional-wrapper">
                    <div className="additional-item item-1">
                        <p className="sunrise"><span className="material-symbols-outlined">wb_twilight</span></p>
                        <p className="additional-text" >Sunrise</p>
                        <p>{sunriseDate}</p>
                    </div>
                    <div className="additional-item item-2">
                        <p className="sunset"><span className="material-symbols-outlined">wb_twilight</span></p>
                        <p className="additional-text" >Sunset</p>
                        <p>{sunsetDate}</p>
                    </div>
                    <div className="additional-item item-3">
                        <p className="humidity"><span className="material-symbols-outlined">water_drop</span></p>
                        <p className="additional-text" >Humidity</p>
                        <p>{weatherData.main.humidity}%</p>
                    </div>
                    <div className="additional-item item-4">
                        <p className="wind"><span className="material-symbols-outlined">air</span></p>
                        <p className="additional-text">Wind</p>
                        <p>{Math.floor(weatherData.wind.speed)} mph</p>
                    </div>
                    
                </div>
            </section>
            <footer>
                <p>Last Updated on {date} at {time}</p>
            </footer>
        </main>
    );
};

export default Weather;