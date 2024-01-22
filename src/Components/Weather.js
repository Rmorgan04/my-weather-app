import { useState, useEffect } from "react";

function Weather({data}) {

    let city = '';
    if (data.name === "Cherokee") {
        city = 'Tahlequah';
    } else {
        city = data.name;
    }

    const sunriseDate = new Date(data.sys.sunrise *1000).toLocaleTimeString();
    const sunsetDate = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    console.log(sunriseDate, sunsetDate);

    return (
        <main className="screen">
            <header>
                <h2 className="city-name">{city}</h2>
            </header>
            <section className="main-section">
                <div className="weather-info">
                    <h3>{Math.floor(data.main.temp)}&deg; F</h3>
                    <h4 className="description">{data.weather[0].description}</h4>
                    <h4>{Math.floor(data.main.temp_max)}&deg; / {Math.floor(data.main.temp_min)}&deg; Feels like {Math.floor(data.main.feels_like)}&deg;</h4>
                </div>
                <div>

                </div>
            </section>
            <section>

            </section>
            <section className="additional-info">
                <div className="additional-wrapper">
                    <div className="additional-item">
                        <p className="sunrise"><span class="material-symbols-outlined">
wb_twilight
</span></p>
                        <p className="additional-text" >Sunrise</p>
                        <p>{sunriseDate}</p>
                    </div>
                    <div className="additional-item">
                        <p className="sunset"><span className="material-symbols-outlined">
wb_twilight
</span></p>
                        <p className="additional-text" >Sunset</p>
                        <p>{sunsetDate}</p>
                    </div>
                    <div className="additional-item">
                        <p className="humidity"><span class="material-symbols-outlined">
water_drop
</span></p>
                        <p className="additional-text" >Humidity</p>
                        <p>{data.main.humidity}%</p>
                    </div>
                    <div className="additional-item">
                        <p className="wind"><span class="material-symbols-outlined">
    air
    </span></p>
                        <p className="additional-text">Wind</p>
                        <p>{data.wind.speed} mph</p>
                    </div>
                    
                </div>
            </section>
        </main>
    );
};

export default Weather;