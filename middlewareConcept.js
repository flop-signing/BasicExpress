const expres = require('express');

const app = expres();

/*
// write the first middleware fucntion and a sample second middleware function.

const myMiddleWare = (req, res, next) => {
    console.log('I am logging.');
    next();
};
const myMiddleWare2 = (req, res, next) => {
    console.log('I am logging from second middleware.');
    next();
};
app.use(myMiddleWare);
app.use(myMiddleWare2);

*/

/*
// Application Level
const logger = (req, res, next) => {
    console.log(
        `${new Date(Date.now()).toLocaleDateString()} ---${req.method}  -- ${req.originalUrl}  --${
            req.protocol
        }-- ${req.ip} `,
    );
    next();
};

app.use(logger);

app.get('/about', (req, res) => {
    res.send('Hello form about page.');
});

*/

// router level
/*

const adminRouter = expres.Router();
const logger = (req, res, next) => {
    console.log(
        `${new Date(Date.now()).toLocaleDateString()} ---${req.method}  -- ${req.originalUrl}  --${
            req.protocol
        }-- ${req.ip} `,
    );
    next();
};
adminRouter.use(logger);
adminRouter.get('/dashboard', (req, res) => {
    res.send('Dashboard');
});
app.use('/admin', adminRouter);
app.get('/about', (req, res) => {
    res.send('Hello form about page.');
});

*/
// Third-Party Level:
// const cookieParser = require('cookie-parser');

// app.use(cookieParser()); // when invoke cookie parser it returns  a middleware.
// app.use(expres.json()); // it's a built-in middleware.

/*

// Error Handling Middleware.

const logger = (req, res, next) => {
    console.log(
        `${new Date(Date.now()).toLocaleDateString()} ---${req.method}  -- ${req.originalUrl}  --${
            req.protocol
        }-- ${req.ip} `
    );

    throw new Error('This is an Error.');
};
const adminRouter = expres.Router();

adminRouter.use(logger);

adminRouter.get('/dashboard', (req, res) => {
    res.send('Dashboard');
});

app.use('/admin', adminRouter);

app.get('/about', (req, res) => {
    res.send('Hello form about page.');
});

const errorHandlingMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500).send('There was a server side error.');
};

adminRouter.use(errorHandlingMiddleware);

*/

// made a configurable middleware->

const loggerWrapper = (options) =>
    function (req, res, next) {
        if (options.log) {
            console.log(
                `${new Date(Date.now()).toLocaleDateString()} ---${req.method}  -- ${
                    req.originalUrl
                }  --${req.protocol}-- ${req.ip} `,
            );
        } else {
            throw new Error('Failed to log.');
        }
    };

app.use(
    loggerWrapper({
        log: true,
    }),
);

app.get('/user', (req, res) => {
    req.send('This is Get');
});
app.listen(3000, () => {
    console.log('The server has started on port 3000.');
});
