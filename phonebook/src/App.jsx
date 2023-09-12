import { useState, useEffect } from "react";
import axios from 'axios'
import personServices from "./services/persons";
import NameFilter from "./components/NameFilter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newNameFilter, setNewNameFilter] = useState('')

  useEffect(() => {
    personServices
      .getAll()
      .then((intialPersons) => {
        setPersons(intialPersons)
      })},
    [])

  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName,
      number: newNumber
    }

    const personCopy = persons.find(person => person.name === newPerson.name)

    if (personCopy) {
      if (window.confirm(`${newPerson.name} Already in the phonebook, would you like to replace the the old number with ${newPerson.number}?`)) {
        personServices
        .update(personCopy.id, newPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== personCopy ? person : returnedPerson))
        })
        window.location.reload()
      }else{
        Alert('Nothing updated')
      }
    } else{
      personServices
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleNewNameFilterChange = (event) => setNewNameFilter(event.target.value)
  const handleDelete = (id, deleteName) => {

    if (window.confirm(`Are you sure you would like to delete ${deleteName} from the phonebook?`)) {
      personServices.remove(id)
      window.location.reload()
    } else{
      alert(`${deleteName} not removed`)
    }
  }

  const personsToShow = newNameFilter === '' ? persons : 
  persons.filter(person => person.name.toLowerCase().includes(newNameFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <NameFilter value={newNameFilter} handleChange={handleNewNameFilterChange}/>
      <PersonForm handleNameChange={handleNameChange}
                  handleNumberChange={handleNumberChange}
                  newName={newName}
                  newNumber={newNumber}
                  handleSubmit={addPerson}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleClick={handleDelete}/>
    </div>
  )
}

export default App