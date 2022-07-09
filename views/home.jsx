const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME !</h1>
              <div>
                <img src="/images/brenda-godinez-MsTOg6rhRVk-unsplash.jpg" alt="chia fruit shake" />
                <div>
                    photo by <a href="AUTHOR_LINK">Brenda godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
              </div>

              <a href='/places'/>
              <button className='btn-brimary'>Places page</button>
          </main>
      </Def>
    )
  }
  

module.exports = home
