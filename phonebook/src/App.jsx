import { useState, useEffect } from "react";
import axios from 'axios'
import NameFilter from "./components/NameFilter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newNameFilter, setNewNameFilter] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((res) => {
        setPersons(res.data)
      })},
    [])

  const addPerson = (event) => {
    event.preventDefault()
    console.log('Button Clicked', event.target)

    const newPerson = {
      name: newName,
      number: newNumber
    }

    console.log(newPerson)

    let res = false

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newPerson.name || persons[i].number === newPerson.number) {
        res = true
        break
      }
    }

    if (res) {
      alert(`${newName} or ${newNumber} is already added to the phonebook`)
    } else{
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewNumber('')

  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleNewNameFilterChange = (event) => setNewNameFilter(event.target.value)

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
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App