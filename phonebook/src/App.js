import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((persons) => setPersons(persons));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };
    if (personExists(newName)) {
      const targetPerson = persons.find((p) => p.name === newName);
      console.log("This is ", targetPerson);
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with the new one?`
        )
      ) {
        personService.update(targetPerson.id, nameObject).then(() => {
          let newPhoneBook = persons.map((person) =>
            person.id !== targetPerson.id ? person : nameObject
          );
          console.log(newPhoneBook);
          setPersons(newPhoneBook);
        });
      }
      return false;
    }
    personService.create(nameObject).then((person) => {
      console.log(person);
      // setPersons(persons.concat(person));
      setPersons([...persons, person]);
      setNewName("");
      setNewNumber("");
    });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  function personExists(name) {
    if (persons.find((person) => person.name === name)) return true;
    return false;
  }

  const filterPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id);
    console.log(person);
    personService.deletePerson(id).then(() => {
      const filteredPersons = persons.filter((p) => p.id !== id);
      setPersons(filteredPersons);
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        text="filter shown with"
        value={newFilter}
        onChange={handleFilterChange}
      />
      <h3>add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        newFilter={newFilter}
        filterPersons={filterPersons}
        persons={persons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
