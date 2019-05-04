var express = require('express');

var app = express();

//GET
//POST
//PUT
//DELETE

//FOR THIS METHOD 
//  /Home == /home == /HoMe

//SENDS 404 ON NOT DEFINED

var priceList = {
    1 : 50,
    2 : 100,
    3 : 80
};

app.get('/', (req, rep) => {
    rep.send('Home Page');
})

app.get('/home', (req, rep) => {
    rep.send('Home Page');
})

app.get('/about', (req, rep) => {
    rep.send('About Us');
})

app.get('/data/:id', (req, rep) => {
    rep.send('Data for id : ' + req.params.id + '\n Cost of item : ' + priceList[req.params.id]);
})

app.listen(2000, () => {
    console.log('Server running on 127.0.0.1:2000');
});