const express = require('express');
const notes = require('./routes/notes.js');
const audit = require('./routes/audit.js');

const app = new express();

app.use('/notes', notes);
app.use('/audit', audit);

app.get('/', (req, res)=>{
    res.send('hello there!!!');
});

app.listen('8088', '0.0.0.0', ()=>{
    console.log('server started... http://localhost:8088/')
});