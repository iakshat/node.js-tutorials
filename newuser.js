function available(boolValue){

    var req = new XMLHttpRequest();

    var username = document.getElementById('username');

    req.onreadystatechange = () => {
        if(req.readyState === 4 && req.status === 200){
            if(req.responseText === 'valid'){
                document.getElementById('testUsername').innerHTML = "Hurray!!! username is available!";
            }else{
                document.getElementById('testUsername').innerHTML = "Sorry username already taken ;(";
                document.getElementById('username').innerHTML = "";             
            }
        }
    }

    var data = {
        'postId' : 1,
        'username' : username
    }

    req.open('POST', '/newuser', boolValue);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send( JSON.stringify(data) );
}

function submit(){
    available(false);

    if(document.getElementById('password') != document.getElementById('passsword')){
        document.getElementById('password').innerHTML = "";
        document.getElementById('passsword').innerHTML = "";
        document.getElementById('checkPassword').innerHTML="Passwords don't match :(";
    }

    var user = {
        'postId' : 2,
        'first' : document.getElementById("first"),
        'last' : document.getElementById('last'),
        'username' : document.getElementById('username'),
        'password' : document.getElementById('password'),
        'email' : document.getElementById('email'),
    }

    var req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if(req.readyState === 4 && req.status === 200)
        {
            if(req.responseText === 'user added'){
                document.getElementById('finalcall').innerHTML = "New User Added"; 
            }else{
                document.getElementById('finalcall').innerHTML = "User registration failed ;-(";
            }
        }
    }

    req.open('POST', '/newuser', true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send( JSON.stringify(user) );
}