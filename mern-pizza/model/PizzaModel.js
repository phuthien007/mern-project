const mongoose = require('mongoose')
const mongoURL = 'mongodb+srv://phuthien007:Thienphu1@cluster0.mhggu.mongodb.net/mern-pizza'

mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
const Schema = mongoose.Schema
const PizzaSchema = new Schema({
    name: {
        required: true,
        type: String 
    },
    varients: [],
    prices: [],
    category:{
        type:String,
        required: true 
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true 
    }
}, {
    collection: 'pizzas',
    timestamps: true 
})

const PizzaModel = mongoose.model('pizzas', PizzaSchema)

module.exports = PizzaModel