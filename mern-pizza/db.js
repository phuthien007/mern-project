const mongoose = require('mongoose')
const mongoURL = 'mongodb+srv://phuthien007:Thienphu1@cluster0.mhggu.mongodb.net/mern-pizza'

mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const db = mongoose.connection
db.on('connected', () => {
    console.log(`MongoDb connection successfull`);
})

db.on('error', () => {
    console.log('MongoDb connection failed');
})

const Schema = mongoose.Schema

module.exports = {
    Schema: Schema,
    db: db
}
