import axios from "axios"
import { useEffect, useState } from "react"
import { FieldText } from "./Components/FieldText"
import { CountryDetails } from "./Components/CountryDetails";


function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('')
  const [showCountry, setShowCountry] = useState({})

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`)
      .then(response => setCountries(response.data.map(({ languages, flags, name, capital, population, continent }) => ({
        name: name.common,
        population,
        capital,
        languages,
        flags,
        continent
      }))))
      .catch(error => console.error(`Ha ocurrido un error en el servidor ${error}`))
  }, [])
  console.log(countries)



  const onChangeVal = (e) => {
    const value = e.target.value;
    setSearch(value)
    setShowCountry({})
  }

  const filteredCountries = countries.filter(countries => (
    countries.name.toLowerCase().includes(search.toLowerCase())
  ))

  const handleShowCountry = (name) => {
    return setShowCountry(filteredCountries.filter(country => country.name.includes(name))[0])

  }
  console.log(showCountry)


  return (
    <main className="w-full flex flex-col justify-center items-center">
      <FieldText search={search} onChangeVal={onChangeVal} />
      {
        filteredCountries.length > 10 && <div className="my-4">Demasiados renderizados. Intente ser más específico.</div>
      }
      {
        filteredCountries.length <= 10 && filteredCountries.length > 1 && (<div className="my-4">{filteredCountries.map(country =>
          <div key={country.name} className="flex gap-2 my-1">
            <h1 >{country.name}</h1><button onClick={() => handleShowCountry(country.name)} className="px-2 bg-slate-600 text-gray-200 rounded-full" >Ver más</button>
          </div>
        )}</div>)
      }
      {
        filteredCountries.length === 1 && <CountryDetails countries={filteredCountries[0]} />
      }
      {showCountry.name && <CountryDetails countries={showCountry} />}
    </main>
  )
}

export default App
