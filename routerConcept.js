const expres = require('express');
const adminRouter = require('./adminRoute');
const publicRouter = require('./publicRouter');

const app = expres();

app.use('/admin', adminRouter);
app.use('/', publicRouter);
// create a file called adminRouter.js and in that file create a admin router and rend that

app.listen(3000, () => {
    console.log('The server has started on 3000.');
});
