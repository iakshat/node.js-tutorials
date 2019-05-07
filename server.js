var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var priceList = {
    1 : 50,
    2 : 100,
    3 : 80
};

app.get('/home', (req, rep) => {
    rep.sendFile(__dirname + '/home.html');   //*
})

app.get('/data/:id', (req, rep) => {
    //rep.send('Data for id : ' + req.params.id + '\n Cost of item : ' + priceList[req.params.id]);

    //MAKE FOLDER NAMED 'views' AND MAKE EJS FILE NAMED 'output'
    rep.render('output', { price : priceList[req.params.id], id : req.params.id});

})

app.listen(2000, () => {
    console.log('Server running on 127.0.0.1:2000');
});