// Synchronous Error Handling
/*

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(a);
});

// Error Handling for Synchronous Code:
// For synchronous code express can handle the error by Default.And the process is express has a invisible middleware which treat as last middleware on an application.And when express get the error from synchronous code then it send the error to the default error handling middleware.And the error handling middleware process the error and run the server.

/*
    the structure of error handling middleware is
    app.use(err,req,res,next)=>{
        next()
    }
*/

/*
// if any router is not available on the application but the user hit on that router then there will be an error occour.And this error is a little error and not the error of a programmer or developer.It'a an error of client.And the status code for this error is 404.If we want to customize the error then we simply write a middleware and that is given below.
app.use((req, res, next) => {
    next('Requested Url is not found!!!');
});

// if we want to customize the default error handler of express then it should be look like.

app.use((err, req, res, next) => {
    if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send('There is an error on Server.');
    }
});

// if we want to recive stream and buffer and write to file and in that case if any error is occured then in console we saw that 'ERR Header file is already sent' and the reason is if we write res.any then it send the header file and if error occured and if we again write the res.any then it show the 'error,Header file is already sent' and here is the handling process of that type of error.
app.get('/', (req, res) => {
    for (let i = 0; i <= 10; i++) {
        if (i === 5) {
            next('There is an error!');
        } else {
            res.write('a');
        }
    }
});
app.use((req, res, next) => {
    next('Requested Url is not found!!!');
});
app.use((err, req, res, next) => {
    if (res.headerSent) {
        next('There is an error!!!');
    } else if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send('There is an error on Server.');
    }
});
app.listen(3000, () => {
    console.log('The Server has started on Port 3000.');
});
*/

// Asynchronous Error Handling::
const express = require('express');

const app = express();
const fs = require('fs');

app.get('/', (req, res, next) => {
    fs.readFileSync('/file-does-not-exist', (err, data) => {
        if (err) {
            next(err);
        } else {
            res.send(data);
        }
    });
});

app.listen(3000, () => {
    console.log('The server has started on port 3000');
});
