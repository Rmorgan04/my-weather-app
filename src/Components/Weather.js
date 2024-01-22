import { useState, useEffect } from "react";

function Weather({data}) {

    let city = '';
    if (data.name === "Cherokee") {
        city = 'Tahlequah';
    } else {
        city = data.name;
    }

    return (
        <main className="screen">
            <header>
                <h2 className="city-name">{city}</h2>
            </header>
            <section className="main-section">
                <div className="weather-info">
                    <h3>{Math.floor(data.main.temp)}&deg; F</h3>
                    <p className="description">{data.weather[0].description}</p>
                    <p>{Math.floor(data.main.temp_max)}&deg; / {Math.floor(data.main.temp_min)}&deg; Feels like {Math.floor(data.main.feels_like)}&deg;</p>
                </div>
                <div>

                </div>
            </section>
        </main>
    );
};

export default Weather;