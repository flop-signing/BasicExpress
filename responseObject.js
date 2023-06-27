// Response ---> Represents the HTTP Response.
// Properties of Response----->

// 1. res.app() --> return to the app instance.
// 2. res.headerSent() --->boolean if the app sent the HTTP headers for the response.
// 1. res.locals() --> local variable scope to the response.

// Methods:
// 1.res.cookie  --> sets the cookie name to value.
// 2.  res.clearCookie() -->clears cookie by name.
// 3. res.end() --> end the response process.(we don't send data only end the process.)
/// 4. res.send() --> send the HTTP Response.(we send data with response and then process is end)

// 5. res.json()  -->send json response.

// 6. res.status()  --> for set the HTTP status for the response..
// 7. res.sendStatus() --> send the response HTTP status code

// 8. res.render()  -->> render to the view
// 9. res.format()  ---> performs content negotiations on the accept HTTP header on the request object.
// 10. res.location()   ---> sets the response location http header.

const express = require('express');

const app = express();
// 1. res.app() --- same as req.app()

/*

// 2. res.locals-- it must be a templete engine. Create a directory named views

app.set('view engine', 'ejs');
app.get('/about', (req, res) => {
    res.render('pages/about', {
        name: 'Bangladesh',
    }); // here local is the second parameter of res.render() and that is an object.
});

*/

/*

// 2. res.headerSent()

app.set('view engine', 'ejs');
app.get('/about', (req, res) => {
    console.log(res.headersSent); // return false because header is not sent.

    res.render('pages/about', {
        name: 'Bangladesh',
    });
    console.log(res.headersSent); // returns true because header is sent that means response is send.
});

*/

// Methods.

// 1. res.end() --> close the response but in this case we don't give any data.
app.get('/about', (req, res) => {
    // res.send('This is about.');// close the response but give some data with it.
    // res.end(); //close the response but in this case we don't give any data.
    // res.json({
    //     name: 'Bangladesh.',
    // }); //
    // res.status() don't end the process and for this reason we need to end the response by res.end
    // res.status(200);
    // res.end();
    // if perform set the status and end the process then we use res.sendStatus()
    // res.sendStatus(400);
    // res.format  --perform content negotiations with the request
    /*
    res.format({
        'text/plain': () => {
            res.send('Hi form Plain Text.');
        },
        'text/html': () => {
            res.render('pages/about.ejs', {
                name: 'bangladesh',
            });
        },
        'application/json': () => {
            res.json({
                name: 'Bangladesh.',
            });
        },
        default: () => {
            res.status(406).send('Not Acceptable.');
        },

        // and finally it deals with the Header 'Accept' and the value that are added in above is only woek when the 'Accept' satisfy the condition.
    });

    */
    /*
    // res.cookie:
    res.cookie('name', 'Mehedi', {}); // then it sets Mehedi on the name cookie.we set options in function that is shown in documentation
    res.end();

    */
    // res.location
    // res.location('/test');
    // res.get and res.set
    res.set('Name', 'Mehedi');
    console.log(res.get('Name'));

    res.end();
});
app.listen(3000, () => {
    console.log('The server has started on port 3000.');
});
