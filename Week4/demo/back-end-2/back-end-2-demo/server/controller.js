const movieDatabase = require('./db.json')
let currentId = 11

module.exports = {
    getMovies: (req, res) => {
    res.status(200).send(movieDatabase)
    },
    addMovie: (req, res ) => {
        const { title, rating, imageURL } = req.body

        movieDatabase.push({
            id: currentId,
            title: title,
            rating: rating,
            imageURL: imageURL
        })

        currentId++

        res.status(200).send(movieDatabase)
    }
}