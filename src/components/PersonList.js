import React from 'react'
import Person from './Person';

const PersonList = ({ people }) => {

  const personList = people.length > 0 && people.map(person => {
    return <Person person={person} key={person.id} />
  })

  return (
    <div className='container mt-5'>
      <div className="row">
        {personList}
      </div>
    </div>
  )

}

export default PersonList
