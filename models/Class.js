const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClassSchema = new Schema({
    name    : String,
    cards   : {
        type: Schema.Types.ObjectId,
        ref : 'Card',
    }
})

module.exports = mongoose.model('Class', ClassSchema)