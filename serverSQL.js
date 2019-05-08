var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'akshat',
    password: 'cheeseMomo',
    database: 'user_data'
});

connection.connect((err) => {
    if(err){
        console.log('Error in connection!!!');
    }else{
        console.log('Connected to Database....');
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
})

app.get('/icon.ico', (req, res) => {
    console.log("__dirname + \'/icon.jpg\'");
    res.sendFile(__dirname + '/icon.jpg');
})

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
        connection.query("INSERT INTO user(username, password, first, last, email) VALUES(\'" + dataRecieved.username + "\' ,\'"+dataRecieved.password+"\',\'"+dataRecieved.first+"\' ,\'"+dataRecieved.last+"\' ,\'"+dataRecieved.email+"\');" , (error) => {
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
            }else{
                res.send('invalid password');
            }

            
        }
    })
})

app.listen(2000, () => {
    console.log('Server running...');
})
