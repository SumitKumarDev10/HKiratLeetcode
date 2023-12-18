// https://youtu.be/od4hT9abIMQ

const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const port = 3000; // You can change this port if needed

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//Interface
interface User {
    email: string;
    password: string
}

let userArray: Array<User> = [{email: "q", password: "p"}]


app.get('/signup', function(req, res) {
    res.statusCode = 200;
    res.send('<form id="loginformA" action="signup" method="post"><div><label for="email">Email: </label><input type="text" id="email" name="email"></input><label for="password">Password: </label><input type="password" id="password" name="password"></input></div><input type="submit" value="Submit"></input></form>')
});

app.post('/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    userArray.forEach(user => {
        if(user.email === email && user.password === password) {
            res.send('You are already signed up!')
        }
        else {
            userArray.push({email: email, password: password})
            console.log(userArray);
            res.send('Successfully signed up!')
        }
    })
    console.log(req.body)
  })

// app.get('/questions', function(req, res) {
//     res.send('Hello, workd from route 2!');
// });

// app.get('/submissions', function(req: Object, res) {
//     res.send('Hello, workd from route 2!');
// });
// app.get('/', function(req, res) {
//   res.send('Hello, Express!');
// });

// app.get('/route-2', function(req, res) {
//     res.send('Hello, workd from route 2!');
// });

// app.get('/chat', function(req, res) {
//     res.send("<h1 style=background-color:aquamarine;color=lightblue>Chat</h1>");
// });

// app.get('/json', function(req, res) {
//     res.json({name:"Bharatiya", age:"unknown"})
// })

/////
app.get('/login', function(req, res) {
    res.send('Hello, workd from route 2!');
});

app.listen(port, () => {
  console.log(`Server is running at https://${port}-sumitkumard-hkiratleetc-b8hhobwn738.ws-us106.gitpod.io/`);
});
