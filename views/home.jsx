const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME !</h1>
              <a href='/places'/>
              <button className='btn-brimary'>Places page</button>
          </main>
      </Def>
    )
  }
  

module.exports = home
