// import thư viện 
const bodyParser = require('body-parser');
const express = require('express');
var path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser')
//import thư viện do mình tạo
const routerLogin = require("./src/routers/routeLogin.js")
const routerRegister = require("./src/routers/routeRegister")
const routerComment = require("./src/routers/routeComment")
const routerUser = require("./src/routers/getUser")
const getcomment = require("./src/routers/getcomment")
const routerClinic = require("./src/routers/routeClinic")
const routerBook = require( "./src/routers/routeBook" )
const routerContact = require( "./src/routers/routeContact" )


// khai báo port
const port = 5555

//dùng express
const app = express()
//dùng cors
app.use(cors());
//dùng cookieparser
app.use(cookieParser())
//dùng bodyparser
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.use('/login', routerLogin);

app.use('/register', routerRegister);

app.use('/comment', routerComment);

app.use('/user', routerUser);

app.use('/clinic', routerClinic);


app.use('/book', routerBook);

app.use('/contact', routerContact);

routerBook

// app.use('/getcomment', getcomment);


app.listen(port, () => {
    console.log(` Running on the port : ${port}`)
})












// app.get('/private', (req, res, next) => {
//     try {
//         let token = req.cookies.token;
//         console.log(token);
//         let _id = jwt.verify(token, "mk");
//         if (_id) {
//             next();
//         }
//         else {

//         }
//     } catch (error) {
//         res.json("Bạn Phải Login")
//     }
// }, (req, res, next) => { res.json('Chúc Mừng bạn đã đến pagePrivate') })