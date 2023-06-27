const handler = (req, res) => {
    console.log(req.app.locals.title); // see the result in console.

    res.send('This is Home Page.');
};

module.exports = handler;
