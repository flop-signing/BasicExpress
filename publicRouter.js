const express = require('express');

const publicRouter = express.Router();
// Router.all()
/*
const log = (req, res, next) => {
    console.log('I am logging Something.');
    next();
};

publicRouter.all('*', log);//'*' means it accepts all of request.

publicRouter.get('/', (req, res) => {
    res.send('This is homepage.');
});

*/

/*

Router.param
this function is called only once if multiple time occurence is matches.
publicRouter.param('user', (req, res, next, id) => {
    req.user = id === '1' ? 'Admin' : 'Annonymus';
    console.log('I am called once.');

    next();
});

publicRouter.get('/:user', (req, res, next) => {
    console.log('This also mathches.');
    next();
});

// in here we get the parameter from url and stored in val and the value that is publicRouter.param('user',12) here 12 is in option

publicRouter.param((param, option) => (req, res, next, val) => {
    if (val === option) {
        next();
    } else {
        res.sendStatus(403);
    }
});
publicRouter.param('user', '12');
publicRouter.get('/:user', (req, res) => {
    res.send('Hello Admin');
});

*/
// Router.Route()

/*
publicRouter
    .route('/user')
    .all((req, res, next) => {
        console.log('I am logging something!!!');
        next();
    })
    .get((req, res) => {
        res.send('GET');
    })
    .post((req, res) => {
        res.send('POST');
    })

    .delete((req, res) => {
        res.send('DELETE');
    });

    */

// Router.use()  ---> the property in here is only used in that specific route.Not overall in the app.and the propery of router.user() and app.use() is same.and there is a difference between these two.And i mention that above.

/// Here some of the regular expression is mentioned in here.And from the documentation of express we see that.In documentation,we find this in guide section of documentatoiin
module.exports = publicRouter;
