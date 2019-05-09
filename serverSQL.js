var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'akshat',
    password: 'cheeseMomo',
    database: 'user_data'
});

var newsDB = mysql.createConnection({
    host: 'localhost',
    user: 'akshat',
    password: 'cheeseMomo',
    database: 'news'
});

connection.connect((err) => {
    if(err){
        console.log('Error in connecting to DB!!!');
    }else{
        console.log('Connected to Database user_data....');
    }
});

newsDB.connect((err) => {
    if(err){
        console.log('Error in connecting to DB!!');
    }else{
        console.log('Connected to Database news.....')
    }
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
})

// app.get('/icon.ico', (req, res) => {
//     console.log("__dirname + \'/icon.jpg\'");
//     res.sendFile(__dirname + '/icon.jpg');
// })

app.get('/newuser', (req,res) => {
    res.sendFile(__dirname + '/newuser.html');
})

app.post('/newuser', (req, res) => {
    var dataRecieved = req.body;
    console.log(dataRecieved);

    if(dataRecieved.postId === 1){
        connection.query("SELECT * FROM user WHERE username = \'"+dataRecieved.username+"\' ;", (error, rows, fields) => {
            if(error){
                console.log('Error in query!!');
            }else{
                console.log(typeof(dataRecieved.username));
                if(rows.length !=0){
                    res.send("Invalid");
                }else{
                    res.send("Valid");
                }
            }
        })
    }else if(dataRecieved.postId === 2){
        connection.query("INSERT INTO user(username, password, first, last, email, nationality) VALUES(\'" + dataRecieved.username + "\' ,\'"+dataRecieved.password+"\',\'"+dataRecieved.first+"\' ,\'"+dataRecieved.last+"\' ,\'"+dataRecieved.email+"\' ,\'"+dataRecieved.nationality+"\');" , (error) => {
            if(error){
                console.log('Error in query!!');
                res.send("error in adding user");
            }else{
                res.send("user added");                
            }
        });
    }

})

app.get('/login', (req, res) => {

    res.sendFile(__dirname + '/login.html');

})

var news = [ {news : "Please sign in to see news"} ];

app.post('/login', (req, res) => {
    var userInput = req.body;

    console.log(userInput);

    connection.query("SELECT * FROM user WHERE username = \'"+userInput.username+"\' ;", (error, rows, fields) => {
        if(error){
            console.log('Error in query!!');
        }else{
            //console.log(rows[0].password);
            //console.log(JSON.stringify(rows));
            if(rows.length === 0){
                res.send('not a user');
            }else if(userInput.password === rows[0].password){
                    res.send('verified');
                    newsDB.query("SELECT * FROM "+rows[0].nationality+" ;", (error, rows, fields) => {
                        if(error){
                            console.log('Error in query!!');
                        }else{
                            //res.send(rows);
                            //res.render('news', { news:rows});
                            news = rows;
                        }
                    });    
            }else{
                res.send('invalid password');
            }

            
        }
    })
})

app.get('/country/:username', (req, res) => {
    console.log(req.url);
    connection.query("SELECT * FROM user WHERE username =\'"+ req.params.username +"\' ;", (err, rows, fields) => {
        if(err){
            console.log("Error in query!!!");
        }else{
            res.send(rows[0].nationality);            
        }
    });
})

app.get('/news', (req, res) => {
    //res.sendFile(__dirname + "/views/news.ejs");
    console.log(news);
    res.render('news', { data : news});
})

app.listen(2000, () => {
    console.log('Server running...');
})
