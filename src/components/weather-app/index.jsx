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

        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

        if (!apiKey) {
            console.error("API Key is missing! Check your .env file.");
            return;
        }

        try {

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`);

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data?.message || "Failed to fetch weather data");
            }

            setWeatherData(data);
            setLoading(false);
            setError(null);

        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);
        }
    }

    function handleSearch() {
        const query = search.trim();
        if (!query) return
        fetchWeatherData(query);
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
                error ? <div className="loading">{error.message}</div> :
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