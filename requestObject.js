const express = require('express');
// const handler = require('./handler');

const app = express();

/*

1. req.baseUrl -- the route in which the app is mounted ,it gives the base url of that route.
2. req.originalUrl  -- in case of sub app req.url is modified automatically and if we need original url then we use req.originalUrl

3. req.path --  path of the request.
4. req.hostName --in request header there is a property host and the value of this host property that is returned by req.hostName. Basically in req.host we find the host name.

5. req.ip --> get the ip address
6.req.method --->return the method of the request.
7.req.protocol  --> return the type of the request wheter it is http or https
8.req.params --> return the name properties of route
9.req.query --> return the query parameter of the request.and we get it as a object.
10. req.body ---> when we request as put or post then we send body with the request and req.body accepts that request as an object.

10.req.cookies ---> if client ends sends cookies then it is available on req.cookies.
11. req.signedCookies ---> if the cookies are signed then we get that signed cookes in req.signedCookies

12.req.secure  ---> if the connection type is http then it return false and if the type of the request is https then it's return true

*/

// 1.req.baseUrl -->
/*
const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
    console.log(req.baseUrl); // return /admin.. this route is mounted on admin sub app.And the base path of  the admin subapp is /admin

    res.send('We are in admin Dashboard');
});

app.use('/admin', adminRoute);
app.get('/user/:id', (req, res) => {
    console.log(req.baseUrl); // it return a blank.Becaue the it's the root route.

    res.send('Hello World');
});

*/
// 2. Original Url:
/*
const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
    console.log(req.originalUrl); // it returns'/admin/dashboard'

    res.send('We are in admin Dashboard');
});

app.use('/admin', adminRoute);
app.get('/user/:id', (req, res) => {
    console.log(req.originalUrl); // it returns '/user/3%20?%20filter=name '

    res.send('Hello World');
});

if no sub app available then req.url and req.originalUrl is same and req.url is the core module of node.

*/

/*

// 3. req.path

const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
    console.log(req.path); // it returns'/dashboard'

    res.send('We are in admin Dashboard');
});

app.use('/admin', adminRoute);
app.get('/user/:id', (req, res) => {
    console.log(req.path); // it returns '/user/3%20 '  query is not available in path.

    res.send('Hello World');
});

*/

// 4. req.hostName
/*
const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
    console.log(req.hostname); // it returns 'localhost'

    res.send('We are in admin Dashboard');
});

app.use('/admin', adminRoute);
app.get('/user/:id', (req, res) => {
    console.log(req.hostname); // it returns 'localhost'

    res.send('Hello World');
});

*/

// 5. req.ip --> get the ip address of the request.
// 6. req.method --> return the type of requested method of client.

// 7. req.protocol --> return the type of request either http or https

// 8. req.params --> req.params return an object and which have a parameter that is given on the time of request,.
/*

app.get('/user/:id', (req, res) => {
    console.log(req.params); // it returns '{ id: '4' } when the requested url is 'http://localhost:3000/user/4

    res.send('Hello World');
});

*/

// 9. req.query()

/*

app.get('/user/:id', (req, res) => {
    console.log(req.query); // it returns '{ ' filter': 'name' }', when the requested url is 'http://localhost:3000/user/4 ? filter=name'

    res.send('Hello World');
});

*/

// 10. req.body()

/*
app.use(express.json()); // enable this parser when the method is post and want to get the data of body.
app.post('/user', (req, res) => {
    console.log(req.body); // it returns '{ name: 'Bangladesh' }' and req.body always return a valid object

    res.send('Hello From Post.');
});

*/

// 11.req.cookies -->

/*

// at-first require this cookie parser.
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.get('/', (req, res) => {
    console.log(req.cookies);

    res.send('Hello World');
});

*/

// 12. req.secure --> it returns false when the connection is 'http' and returns true when the connection is 'https'
/*
// 13.req.app

// first create a file named appHandler.js and then put the callback of get method from that function
// import from appHandler file

const appHandler = require('./appHandler');

app.get('/user', appHandler);

*/

/*

// 13.app.route()

app.get('/user', (req, res) => {
    console.log(req.route); // return an object on console.

    res.send('This is the get.');
});
app.post('/user', (req, res) => {
    console.log(req.route); // return an object on console. with lots of properties
    res.send('This is the Post.');
});

*/

// 14. req.accepts()  -- > follow the documentatioin from header section set the Accept parameter.
// req.get()   --> get the value of header i.e if i want the value of 'Accecp' header parameter then i just simply find req.get('Accept');
app.listen(3000, () => {
    console.log('The server has started on port 3000.');
});
