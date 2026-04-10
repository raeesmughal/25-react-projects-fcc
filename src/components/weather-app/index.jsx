import { useEffect, useState } from "react";
import Search from "./components/search";
import './style.css'


export default function Weather() {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    async function fetchWeatherData(param) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=f14969d7c26847e14a64a862b790d6d7`);
            const data = await response.json();



            if (data) {
                setLoading(false);
                setWeatherData(data);
            }


            console.log(data, "data");


        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);
        }
    }

    async function handleSearch() {
        fetchWeatherData(search)
    }

    useEffect(() => {
        fetchWeatherData('lahore')
    }, []);

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    console.log(weatherData)
    return <div className="weather-app">
        <Search
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
        />
        
        {
            loading ? <div className="loading">Loading...</div> :
                <div>
                    <div className="city-name">
                        <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
                    </div>
                    <div className="date">
                        <span>{getCurrentDate()}</span>
                    </div>
                    <div className="temperature">{weatherData?.main?.temp}</div>
                    <p className="description">
                        {
                            weatherData && weatherData.weather ? weatherData.weather[0]['description'] : ''
                        }
                    </p>
                    <div className="weather-info">
                        <div className="column">
                            <div>
                                <p className="wind">{weatherData?.wind?.speed}</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <p className="humidity">{weatherData?.main?.humidity}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                    </div>
                </div>
        }
    </div>
}