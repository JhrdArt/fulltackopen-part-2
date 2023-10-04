import axios from "axios";
import { useEffect, useState } from "react";
import { FieldText } from "./Components/FieldText";
import { Countries } from "./Components/Countries";

export const SearchCountrys = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState([]);
  const [query, setQuery] = useState("");
  console.log(countries);

  useEffect(() => {

    axios.get(`https://restcountries.com/v3.1/all`)
      .then(response => setCountries(response.data.map(({ languages, name, area, capital, flags }) => ({
        name: name.common,
        area,
        capital,
        flags,
        languages
      }))
      ))
      .catch(error => console.error(`Hubo un error en la petición ${error}`))

  }, [])

  console.log(countries)

  useEffect(() => {
    const capital = countries.map(country => country.capital[0])

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}`)
      .then(response => {
        setWeather(response.data)
      })
      .catch(error => console.error(`Ha ocurrido un error ${error}`))
  }, [])

  console.log(weather)


  const onQuery = (e) => {
    e.preventDefault()
    setQuery(e.target.value.toString())
  }

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(query.toLowerCase()))

  return (
    <section className="">
      <FieldText search={query} onChangeVal={onQuery} />
      <Countries countries={countries} filteredCountries={filteredCountries} weather={weather} />
    </section>
  )
};

