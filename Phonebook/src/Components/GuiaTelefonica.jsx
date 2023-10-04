import { useEffect, useState } from "react";
import { Filter } from "./Filter";
import { PersonForm } from "./PersonForm";
import { Person } from "./Person";
import personsData from "../Services/personsData";
import { Notification } from "./Notification";

export const GuiaTelefonica = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPerson, setFilteredPerson] = useState([...persons]);
  const [confirmMessage, setConfirmMessage] = useState(null);
  const [errorMessasge, setErrorMessasge] = useState(null);

  //LLAMAR AL API MEDIANTE AXIOS
  useEffect(() => {
    personsData.getAll().then(response => setPersons(response)).
      catch(error => error(console.error(`Error ${error}`)))

  }, []);

  console.log(search)
  console.log(persons)
  console.log(filteredPerson)

  const onChangeInput = (e) => {
    const value = e.target.value;

    setNewName(value);
  };

  const onChagePhone = (e) => {
    const value = e.target.value;
    setNewNumber(value);
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  // CREAR UN NUEVO USUARIO EN EL DIRECTORIO
  const onSubmitValue = (e) => {
    e.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    console.log(newName);
    console.log(newNumber);
    const existingPerson = persons.find(person => person.name === newPerson.name); //Verifica si el nombre de usuario ya existe en el directorio. 

    if (existingPerson) {
      const confirmation = confirm(`${newName} ya está añadido en el directorio ¿Desea continuar y actualizar el número?`)

      if (confirmation)
        personsData.update(existingPerson.id, newPerson).then(() => {
          setPersons(persons.map(person => {
            return person.id === existingPerson ? { ...person, number: person.number } : person;
          }))
        })
    } else {
      personsData.create(newPerson).then(response => {
        setPersons([...persons, response]);
        setConfirmMessage(`${newName} - ${newNumber} is already added to phonebook`);
        setTimeout(() => {
          setConfirmMessage(null)
        }, 4000);
        setNewName("");
        setNewNumber("");
      })
        .catch(error => {
          setErrorMessasge(`${error.response.data.error}`);
          setTimeout(() => {
            setErrorMessasge(null)
          }, 4000);
        })
    }
  };

  //ELIMINAR DEL DIRECTORIO
  const handleDelete = (id) => {
    console.log(`ID a eliminar ${id}`)
    const personToDelete = filteredPerson.find(person => person.id === id);

    if (personToDelete) {
      const personName = personToDelete.name
      setConfirmMessage(`El usuario ${personName} ha sido eliminado con éxito.  `);
      setTimeout(() => {
        setConfirmMessage(null)
      }, 3000);
    }

    personsData.deletePerson(id).then(() => {
      setPersons(persons.filter(person => person.id !== id));
      setFilteredPerson(filteredPerson.filter(person => person.id !== id))


    }
    ).catch(error => {
      setErrorMessasge(`Error al eliminar a la persona ${error}`);
      setTimeout(() => {
        setErrorMessasge(null)
      }, 3000);
    })
  }

  useEffect(() => {
    const filterPerson = () =>

      persons.filter((person) => {
        const name = person.name && person.name.toLowerCase();
        const phone = person.number && person.number;

        return (name && name.toLowerCase().includes(search.toLowerCase())) ||
          (phone && phone.includes(search));
      });

    setFilteredPerson(filterPerson);
  }, [search, persons]);

  return (
    <div className="w-92 mx-auto mt-5 bg-slate-900 p-3 text-gray-100">
      <hr />
      <h1 className="text-2xl font-medium my-2">Directorio</h1>
      <Filter title="Filtrar en el directorio" search={search} onSearch={onSearch} />
      <PersonForm
        onSubmitValue={onSubmitValue}
        newName={newName}
        onChangeInput={onChangeInput}
        onChagePhone={onChagePhone}
        newNumber={newNumber}
        errorMessasge={errorMessasge}
        validMessage={confirmMessage}
      />
      <h2 className="font-medium text-xl my-2">Contactos: </h2>

      <Person filteredPerson={filteredPerson} handleDelete={(id) => handleDelete(id)} />
    </div>
  );
};
