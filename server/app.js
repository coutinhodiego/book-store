const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const router = require('./routes/routes')

require('./db/db-connection')
const app = express()

app.use(cors())

app.use(bodyParser.json({limit: 524288000}))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', router)

app.listen(3000, () => console.log('Example app listening on port 3000!'))