const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())


const inventory = ['chair', 'shampoo', 'conditioner', 'bread', 'milk', 'peaches', 'desk', 'computer', 'ps5', 'record']


app.get('/api/inventory', (req, res) => {
    res.status(200).send(inventory)
    res.status(200).send(inventory[+req.params.id])
})


app.get('/api/inventory/:id', (req, res) => {
    console.log(req.params.id)
})




const SERVER_PORT = 5050
app.listen(SERVER_PORT, () => console.log(`Up and running on ${SERVER_PORT}`))