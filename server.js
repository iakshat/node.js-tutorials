var express = require('express');

var app = express();

//GET
//POST
//PUT
//DELETE

//FOR THIS METHOD 
//  /Home == /home == /HoMe

//SENDS 404 ON NOT DEFINED

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.get('/home', (req, res) => {
    res.send('Home Page');
})

app.get('/about', (req, res) => {
    res.send('About Us');
})

app.listen(2000, () => {
    console.log('Server running on 127.0.0.1:2000');
});