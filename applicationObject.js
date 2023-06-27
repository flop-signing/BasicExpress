const express = require('express');

const app = express();

// app.locals   --- save the local variable in the application
// example:

// set a local variable
/*
// const handler = require('./handler');

app.locals.title = 'My App'; // this is act as a local variable of this application

// we also access this app.locals.title from an external file.Suppose create a file named handle.js in the root directory of the project and then put the callback function of get into that file and then we also see that we get the access of the local variable form this app.

app.get('/', handler);
*/

// app.mountpath
// Sub app-we want to put multiple path on express.Here is the example

/*
const admin = express();
app.use('/admin', admin);

admin.get('/dashboard', (req, res) => {
    console.log(admin.mountpath); // the output in here is /admin
    res.send('Welcome to admin dashboard');
});

app.get('/', (req, res) => {
    res.send('Welcome to Application Home');
});

*/
// Events

// Mount event----The mount event is fired on a sub-app, when it is mounted on a parent app. The parent app is passed to the callback function.
/*
const admin = express();

admin.on('mount', (parent) => {
    console.log('Admin Mounted');
    console.log(parent); // refers to the parent app
});

admin.get('/', (req, res) => {
    res.send('Admin Homepage');
});

app.use('/admin', admin);

*/

// Methods:
/*
// 1.app.all()

// it performs on all methods,no restrictions in here.(e.g GET,PUT,POST,DELETE all of methods works here)
app.all('/', (req, res) => {
    res.send('Welcome to Application Home');
});

*/

/*

// 2. app.delete() -- if anyone requested on delete method.

app.delete('/', (req, res) => {
    res.send('DELETE request to homepage');
});

*/

/*

// 3. app.disable()  -- disable of a setting on app
// by default in express route casesensitive is not a major concern but if we want then we can enable,disable route on a specific property mention on table in app.disable() section.Here is an example of this in normal case app.get('/about',()) and app.get('/About') are same.but if we enable case sensitive property then they are not same.

app.enable('case sensitive routing');  // for enabling
app.disable('case sensitive routing');   // for disabling

app.get('/About', (req, res) => {
    res.send('Welcome to Application Home');
});

app.get('/about', (req, res) => {
    res.send('Welcome to Application Home');
});

// here after enabling 'case sensitive routing' the two route mentioned in above are different.

app.enabled() returns true when a setting is enabled otherwise returns false
app.disabled() returns true when a setting is disabled otherwise it returs false

*/

/*

// 4. app.get() and app.set()

// it's works like local variables.app.set() is used to set a value and app.get() use to acces on that particular value.
app.set('title', 'My Site');
app.get('title'); // "My Site"

*/

// 5. app.listen() -- receives a port number and we started server on that port.

// 6. app.METHOD() all in one.

/*

// 7. app.param() -- in route there is parameter with path,in that case when we use app.param() then it works a particular task base on a parameter.
// if id param is match then for all id param it returns a callback
// when there is a param in route which name is id then callback of app.param is triggered.And this callback is a middleware,here middleware means the callback is triggere before the callback of app.get
app.param('id', (req, res, next, id) => {
    // performs the works and then call next() when calls next() that means all of works in here has finished.Then the callback of app.get() is triggered

    const user = {
        userId: id,
        name: 'Bangladesh',
    };
    req.userDetails = user;

    // that means we intersect on userDetails in req object and then call the app.get callback() and afeter that req.userDetails is available on app.get()

    next();
});

app.get('/user/:id', (req, res) => {
    console.log(req.userDetails); // it is available after performing the param operation.{ userId: '5', name: 'Bangladesh' }

    res.send('Welcome to Application Home');
});

*/

// 8. app.path()
/*
Returns the canonical path of the app, a string.

var app = express()
var blog = express()
var blogAdmin = express()

app.use('/blog', blog)
blog.use('/admin', blogAdmin)

console.dir(app.path()) // ''
console.dir(blog.path()) // '/blog'
console.dir(blogAdmin.path()) // '/blog/admin'

*/
// 9. app.route()
/*

app.get('/about/mission', (req, res) => {
    res.send('Welcome to Application Home');
});

app.post('/about/mission', (req, res) => {
    res.send('Welcome to Application Home Post');
});
app.put('/about/mission', (req, res) => {
    res.send('Welcome to Application Home Put');
});

// for simplfying the above code app.route() is used.

app.route('/about/mission')
    .all((req, res, next) => {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
    })
    .get((req, res, next) => {
        res.send('Welcome to Application Home')
    })
    .post((req, res, next) => {
      res.send('Welcome to Application Home Post');
    });

    */

// 10. app.engine()   // see from documentation. EJS is used here and i implement it in past so it is familiar to me. app.set('view engine','ejs') is used to enable ejs environment and pass res.render('index',{}) and here create a folder name views and named all file here index.ejs as it.

app.get('/', (req, res) => {
    res.send('Welcome to Application Home');
});

app.listen(3000, () => {
    console.log('The Server has started on port 3000');
});
