const express = require('express')
const PizzaRouter = require('./routes/PizzaRouter')
const cors = require('cors')
// init app
const app = express()

app.use(express.json())
app.use(express.urlencoded({ 'extended': false }))
app.use(cors())
// setup router pizza
app.use('/api/v1', PizzaRouter)

app.get('/', (req, res) => {
    res.send("Server working")
})


const port = process.env.PORT || 5000
app.listen(port, () => `Server is listenning on port: ${port}`)
