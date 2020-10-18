var express = require('express');
var router = express.Router();

router.get('/', (req, res)=> {
    res.send('Welcome to audit homepage');
});

router.get('/hi', (req, res)=> {
    res.send('audit says hi');
});

module.exports = router;