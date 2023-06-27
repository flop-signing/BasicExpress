const appHandler = (req, res) => {
    console.log(req.app.secure);

    res.send('Hello World');
};

module.exports = appHandler;
