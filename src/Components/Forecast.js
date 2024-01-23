

function Forecast({forecastData}) {

    const forecastList = forecastData.list;
   

    return (
        <div className="forecast-container">
            <ul>
                {forecastList && forecastList.length > 0 && forecastList
        .filter((item, index, self) => self.findIndex((i) => new Date(i.dt * 1000).toDateString() === new Date(item.dt * 1000).toDateString()) === index)
        .map((item) => (
            <li key={item.dt}>
            {new Date(item.dt * 1000).toLocaleDateString()} <span>{item.main.humidity}% {Math.floor(item.main.temp_max)}&deg; {Math.floor(item.main.temp_min)}&deg;</span>
            </li>
        ))}
            </ul>
        </div>
    )
}

export default Forecast;