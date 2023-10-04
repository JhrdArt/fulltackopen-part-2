import axios from "axios";
import { useEffect, useState } from "react";

export const CountryDetails = ({ countries }) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${countries.capital}&appid=${API_KEY}`)
            .then(response => setWeather(response.data))
            .catch(error => console.error(`No se pudo obtener los datos ${error}`))

    }, [])
    console.log(weather)
    return (
        <div className="w-80 flex flex-col items-center gap-2 mt-3 bg-blue-700 rounded-xl text-white p-4" key={countries.name}>
            <h2 className="text-2xl font-bold">{countries.name}</h2>
            <ul>
                <li><span className="font-semibold">Capital:</span> {countries.capital}</li>
                <li><span className="font-semibold">Población:</span> {countries.population}</li>
            </ul>
            <h2 className="text-xl font-bold">Lenguas</h2>
            <ul>
                {Object.keys(countries.languages).map(key => (
                    <li className="list-disc " key={key}>{countries.languages[key]}</li>
                ))}
            </ul>
            <h2 className="font-bold">Bandera de {countries.name}</h2>
            <img src={countries.flags.png} width={80} alt={`Bandera de ${countries.name}`} />
            <div className="flex flex-col items-center">
                <h2><span className="font-semibold">El tiempo en:</span> {countries.capital}</h2>
                <h3><span className="font-semibold">Temperatura:</span> {weather.main && (weather.main.temp - 273.15).toFixed(0)}C°</h3>
                <img src={`https://openweathermap.org/img/wn/${weather.weather && weather?.weather[0].icon}.png`} alt="" />
                <h4><span className="font-semibold">Viento</span> {weather.wind && weather.wind.speed} km por hora</h4>
            </div>
        </div>

    )
}
