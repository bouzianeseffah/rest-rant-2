const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String,  },
  pic: String,
  pic: {type: String, default: 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/epic-burger-cheeseburger.jpg?quality=82&strip=1'},
  cuisines: { type: String,  },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: { 
    type: Number,
    min: [1673, 'surely not that old?'],
    max: [new Date().getFullYear(), 'hey, this is in the future!']

  
  },
  comments: [{type: mongoose.Schema.Types.ObjectId, 
  ref: 'Comment'
}]
})
placeSchema.methods.showEstablished = function() {
  return(
    `${this.name} has been serving ${this.state} since ${this.founded}.`
  )
} 
module.exports = mongoose.model('Place', placeSchema)

