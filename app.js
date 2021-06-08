const express = require('express')
const app = express()
const router = express.Router()
const port = 3000
const sensors = require('./sensors')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// load sensors controller
app.use('/sensors', sensors)

// launch app
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})