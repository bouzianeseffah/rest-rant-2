const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://www.galwaytourism.ie/wp-content/uploads/2019/05/top-5-restaurants-1024x768.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://www.liveenhanced.com/wp-content/uploads/2018/01/Meraki.jpg',
    founded: 2020
}])
.then(() => {
    console.log('success!')
    process.exit()
})
.catch(err => {
     console.log('Failure!', err)
     process.exit()
})