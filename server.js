const { join } = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/bookapp_db"
require('dotenv').config()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())

require('./routes')(app)

require('mongoose').connect(MONGODB_URI, { useNewUrlParser : true, useCreateIndex : true, useFindAndModify : true })
    .then(_ => app.listen(PORT, () => console.log(`Server opened on port: ${PORT}`)))
    .catch(e => console.log(e))
