const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <div>
              <img src={data.place.pic}  alt= {data.place.city}  />
              <h2>{data.place.state} </h2>
              <p>at {data.place.cuisines}</p>
              <h2>Rating</h2>
              <p>not rated</p>
              <form method='post' action="">
              <div>
                 <label htmlFor="comments">Comments</label>
                 <input className='form-control' type="" id='comments' name='comments' />
              </div>
              </form>
              <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                Edit
              </a>
              <form method='post' action={`/places/${data.id}?_method=DELETE`}>
                <button type='submit' className='btn btn-danger'>
                  Delete
                </button>
              </form>
            </div>
            
             
            
            
            
            
            
          </main>
        </Def>
    )
}

module.exports = show
