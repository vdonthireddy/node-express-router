var express = require('express');
var router = express.Router();

router.get('/', (req, res)=> {
    res.send('Welcome to notes homepage');
});

router.get('/hi', (req, res)=> {
    res.send('notes says hi');
});

module.exports = router;