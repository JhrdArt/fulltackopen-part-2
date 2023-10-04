import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const DetailsWeather = ({ search }) => {
  const [dataWeather, setDataWeather] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`;
  const hook = () =>
    axios.get(url).then((response) => setDataWeather(response.data));

  useEffect(hook, [search]);

  console.log(dataWeather);

  return (
    <>
      <section>
        {dataWeather && (
          <div>
            <h2>Este es el clima actual en {search}: </h2>
            <p>
              <span className="font-bold">Temperature:</span>{" "}
              {dataWeather?.main &&
                (dataWeather?.main.temp - 273.15).toFixed(0)}
              °C{" "}
            </p>
            <div className="bg-gray-500">
              <img
                src={`https://openweathermap.org/img/wn/${dataWeather.weather && dataWeather?.weather[0].icon
                  }.png`}
                alt="img"
              />
            </div>
            <p>
              <span className="font-bold">Humidity:</span>{" "}
              {dataWeather?.main && dataWeather?.main.humidity}%
            </p>
            <p className="">
              <span className="font-bold">Description:</span>{" "}
              {dataWeather?.weather && dataWeather?.weather[0]?.description}
            </p>
          </div>
        )}
      </section>
    </>
  );
};
