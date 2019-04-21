import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { key: 'Arto Hellas', name: 'Arto Hellas', number: '040-123456' },
    { key: 'Martti Tienari', name: 'Martti Tienari', number: '040-123456' },
    { key: 'Arto Järvinen', name: 'Arto Järvinen', number: '040-123456' },
    { key: 'Lea Kutvonen', name: 'Lea Kutvonen', number: '040-123456' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState(' ')
  const [filteredPersons, setFilteredPersons] = useState([])

  const addPerson = (event) => {
    event.preventDefault()

    let personNames = persons.map(person =>
      person.name)

    if (personNames.indexOf(newName) !== -1) {
      alert(`${newName} on jo luettelossa`)
      return;
    }

    const personObject = {
      key: newName,
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    console.log(persons)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const setNewFilterToSearch = (event) => {
    let newFilter = event.target.value
    setNewFilter(newFilter.toLowerCase())

    setFilteredPersons(persons.filter( (person) => {
      return (
        person.name.toLowerCase().includes(filter)
      )
    }))
  }

  const filterContactInfo = () => {
    return (
      filteredPersons.map(person =>
        <p>{person.key} {person.number}</p>
      )
    )
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <div>
        rajaa näytettäviä <input
          value={filter}
          onChange={setNewFilterToSearch}
        />
      </div>
      <form onSubmit={addPerson}>
        <div>
          nimi: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          numero: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button
            type="submit">lisää
          </button>
        </div>
      </form>
      <h2>Numerot</h2>
      {filterContactInfo()}
    </div>
  )

}

export default App