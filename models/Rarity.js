const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RaritySchema = new Schema({
    name    : String,
    cards   : {
        type: Schema.Types.ObjectId,
        ref : 'Card',
    },
})

module.exports = mongoose.model('Rarity', RaritySchema)