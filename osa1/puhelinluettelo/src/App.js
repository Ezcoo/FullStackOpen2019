import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { 
      key: 'Arto Hellas',
      name: 'Arto Hellas' 
    }
  ]) 
  const [ newName, setNewName ] = useState('')

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
    name: newName
  }

  setPersons(persons.concat(personObject))
  setNewName('')
  console.log(persons)
}

const names = () => {
  return (
    persons.map(person =>
      <p>{person.name}</p>
    )
  )
}

const handleNameChange = (event) => {
  setNewName(event.target.value)
}

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addPerson}>
        <div>
          nimi: <input 
                  value={newName} 
                  onChange={handleNameChange}
                />
        </div>
        <div>
          <button
            type="submit">lisää
          </button>
        </div>
      </form>
      <h2>Numerot</h2>
          {names()}
    </div>
  )

}

export default App