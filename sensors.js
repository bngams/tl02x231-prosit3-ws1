const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
    res.send({ response: true, sensors: 'All sensors' })
})

router.get('/:id', function (req, res, next) {
    const id = parseInt(req.params.id, 10);
    if (id > 4) {
        res.status(404).send({ response: false, sensors: 'Not found' });
    } else {
        res.send({ response: true, sensor: 'Found sensor' })
    }
})

router.post('/', function (req, res, next) {
    console.log(req.body);
    res.status(201).send('Add sensor');
})

router.put('/', function (req, res, next) {
    console.log(req.body);
    const id = req.body.id;
    if (id > 4) {
        res.status(404).send({ response: false, sensors: 'Not found' });
    } else {
        res.send('Deleted sensor')
    }
})

router.delete('/:id', function (req, res, next) {
    const id = req.params.id;
    if (id > 4) {
        res.status(404).send({ response: false, sensors: 'Not found' });
    } else {
        res.send('Edited sensor')
    }
})

module.exports = router