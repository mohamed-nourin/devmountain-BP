const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const movieDatabase = require('./controller.js')


app.get('/api/movies', getMovies)


app.listen(4004, () => {
    console.log('up on 4004')
})