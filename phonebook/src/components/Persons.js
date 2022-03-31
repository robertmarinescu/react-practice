import React from "react";

const PersonDetails = ({ person, handleDelete }) => (
  <p>
    {person.name} {person.number} &nbsp;
    <button onClick={() => handleDelete(person.id)}>delete</button>
  </p>
);


const Persons = ({ newFilter, filterPersons, persons, handleDelete }) => {
  return (
    <div>
      {newFilter
        ? filterPersons.map((person) => (
            <PersonDetails
              key={person.name}
              person={person.name}
              handleDelete={handleDelete}
            />
          ))
        : persons.map((person) => (
            <PersonDetails
              key={person.name}
              person={person}
              handleDelete={handleDelete}
            />
          ))}
    </div>
  );
};

export default Persons;
