var http = require('http');

function authenticate(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    console.log('input: ' + username);

    var dataToSend = {
        username: username,
        password: password
    };

    var request = new XMLHttpRequest();

    request.open('POST', '/', true);
    request.send(dataToSend);

    request.onreadystatechange(() => {
        if(this.readyState == 4 && this.status == 200){
            if(this.response = 0){
                document.getElementById('message') = "Invalid Id/Password Please try again";
            }
        }
    })
}