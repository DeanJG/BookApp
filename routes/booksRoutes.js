const { Book } = require('../models')

module.exports = app => {
    app.get('/books', (req, res) => {
        Book.find({}, (e, books) => {
            if (e) throw e
            res.json(books)
        })
    })
    app.get('/books/:id', (req, res) => {
        Book.findById(req.params.id, (e, book) => {
            if (e) throw e
            res.json(book)
        })
    })
    app.post('/books', (req, res) => {
        Book.create(req.body, e => {
            if (e) throw e
            res.sendStatus(200)
        })
    })
    app.put('/books/:id', (req, res) => {
        Book.findByIdAndUpdate(req.params.id, req.body, e => {
            if (e) throw e
            res.sendStatus(200)            
        })
    })
    app.delete('/books/:id', (req, res) => {
        Book.findByIdAndDelete(req.params.id, e => {
            if (e) throw e
            res.sendStatus(200)
        })
    })
}