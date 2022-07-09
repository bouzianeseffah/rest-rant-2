const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
            <div>
            </div>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="/images/funny_cat_face_pictures.jpg" height={'500'} width={500}  alt="image"  />

          </main>
      </Def>
    )
  }
  

module.exports = error404
