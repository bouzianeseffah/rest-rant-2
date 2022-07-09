const router = require('express').Router()


// GET /places
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
router.get('/', (req, res) => {
    let places = [{
        name: 'TAI',
        city: 'new york',
        state: 'NY',
        cuisines: 'tai-restaurent',
        pic: '/images/5b33c37a1ae6621d008b499c.webp'
      }, {
        name: 'Turkish-restaurent',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'turkish-restaurent',
        pic: '/images/13582074_1785449541683516_5400767550309930864_o.jpg'
      }]
      
    res.render('places/index', {places})
  })
 

module.exports = router