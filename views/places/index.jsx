const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className='col-sm-6'>
          <h2>
           
            <a href={`/places/${place.id}`}>
            {place.name}
            </a>
         </h2>
          <p className='text-center'>
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} width={500}/>
          <p className='text-center'>
            located in {place.city}, {place.state}
          </p>
          <h2>Description</h2>
          <h3>{place.showEstablished()}</h3>
          <h4>Serving {place.cuisines}</h4>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>palces to rant </h1>
              <div className='row'>
              {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  
  

module.exports = index
