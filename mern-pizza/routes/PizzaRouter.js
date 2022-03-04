const express = require('express')
const router = express.Router()
const PizzaModel = require('../model/PizzaModel')


router.post('/pizza', (req, res, next) =>{
    let name = req.body.name
    let varients = req.body.varients
    let prices = req.body.prices
    let category = req.body.category
    let image = req.body.image
    let description = req.body.description
    PizzaModel.create({
        name: name,
        varients: varients,
        prices: prices,
        category: category,
        image: image,
        description: description
    }).then((data) =>{
        res.json(data)
    }).catch((err) =>{
        res.status(500).json(err)
    })
})

router.get('/pizza', (req, res, next) => {
    PizzaModel.find({})
    .then((data) => {
        res.json(data)
    }).catch((err) => {
        res.status(500).json(err)
    })
})

router.get('/pizza/:id', (req, res, next) =>{
    PizzaModel.findById(req.params.id)
    .then((data)=>{
        res.json(data)
    }).catch((err) =>{
        res.status(500).json(err)
    })
})

router.put('/pizza/:id', (req, res, next) =>{
    PizzaModel.findByIdAndUpdate(req.params.id, req.body)
    .then((data)=>{
        res.json(data)
    }).catch((err) =>{
        res.status(500).json(err)
    })
})

router.delete('/pizza/:id', (req, res, next) =>{
    PizzaModel.findByIdAndDelete(req.params.id)
    .then((data)=>{
        res.json("Xóa thành công")
    }).catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router