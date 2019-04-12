import React from 'react';

const PersonDetails = ({ match, people }) => {
  const personData = people.filter(person => {
    return person.id === parseInt(match.params.id)
  })
  const realData = personData.map(real => {
    return (
      <div className="container" key={real.id}>
        <div className="row">
          <div className='col col-md-12 mt-5'>
            <div className="card border border-info">
              <div className="card-body">
                <h2 className='card-title text-uppercase mb-4'>{real.name}</h2>
                <p><span className='text-info'>Company:</span> {real.company.name}</p>
                <p><span className='text-info'>Address:</span> {real.address.city}, {real.address.street} St. {real.address.suite}</p>
                <p><span className='text-info'>Phone:</span> {real.phone}</p>
                <p><span className='text-info'>Email:</span> {real.email}</p>
                <p><span className='text-info'>Username:</span> {real.username}</p>
                <a href={real.website} className='btn btn-info'>Website</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return realData;
}

export default PersonDetails