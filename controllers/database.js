const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/hearthstone',
                { useNewUrlParser: true,
                  useUnifiedTopology: true})

                .then(result => {
                    console.log('Database was connected.')
                })
                .catch(error => {
                    error => console.log(error)
                })
