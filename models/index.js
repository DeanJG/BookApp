const { Schema, model } = require('mongoose')

const db = {
    Books: require('./Books.js')(Schema, model)
}

module.exports = db