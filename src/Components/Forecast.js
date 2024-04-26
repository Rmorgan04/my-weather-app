

function Forecast({forecastData}) {

    const forecastList = forecastData.list;
   
   

    return (
        <div className="forecast-container">
            <ul>
                {forecastList && forecastList.length > 0 && forecastList
            .filter((item) => new Date(item.dt * 1000).getHours() === 13)
            .map((item) => (
            <li key={item.dt}>
                <span className="forecast-info-left">
                    {new Date(item.dt * 1000).toLocaleDateString()}
                </span>
                <span className="forecast-info-right">
                        <span>
                            <img  className="forecast-icon forecast-item" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='weather' /> 
                        </span>
                        <span className="forecast-item">
                            <span className="material-symbols-outlined humid">water_drop</span>
                            {item.main.humidity}%  
                        </span>
                        <span>   
                            <span className="green">&#8593;</span>
                            {Math.floor(item.main.temp_max)}&deg;
                        </span>
                    
                </span> 
            </li>

        ))}
            </ul>
        </div>
    )
}

export default Forecast;