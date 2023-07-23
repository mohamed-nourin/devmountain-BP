const functionsObject = require('./db.json')

moduel.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movieDatabase)
    },
    addMovie: (req, res) => {
        const { title, rating }
    }
}