import React from 'react';
import { Link } from 'react-router-dom';


const Person = ({ person }) => {
  return (
    <div className='col col-md-4 mb-4'>
      <div className="card border border-info">
        <div className="card-body">
          <h5 className='card-title'>{person.name}</h5>
          <p><span className='text-info'>Address:</span> {person.address.city}, {person.address.street} St. {person.address.suite}</p>
          <p><span className='text-info'>Phone:</span> {person.phone}</p>
          <p><span className='text-info'>Email:</span> {person.email}</p>
          <Link to={`/person/${person.id}`} className="btn btn-info">Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Person
