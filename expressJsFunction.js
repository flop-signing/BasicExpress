const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is homepage');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('This is the page with post request.');
});

app.listen(3000, () => {
    console.log('Server has started on port 3000');
});
