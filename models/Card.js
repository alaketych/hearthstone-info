const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CardSchema = new Schema({
    name    : String,
    plrClass: {
        type: Schema.Types.ObjectId,
        ref : 'Class'
    },
    cardSet : {
        type: Schema.Types.ObjectId,
        ref : 'Set',
    },
    type    : String,
    faction : String,
    rarity  : {
        type: Schema.Types.ObjectId,
        ref : 'Rarity',
    },
    cost    : Number,
    health  : Number,
    text    : String,
    flavor  : String,
    artist  : String,
    img     : String,
    imgGold : String,
})

module.exports = mongoose.model('Card', CardSchema)