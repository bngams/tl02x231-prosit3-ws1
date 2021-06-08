const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const port = 3000
const sensors = require('./sensors')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// load sensors controller
app.use('/sensors', sensors)

// allow app to parse application/json
app.use(bodyParser.json())

// launch app
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})