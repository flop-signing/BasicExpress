const express = require('express');
const multer = require('multer');
const path = require('path'); // core module of NodeJS
// prepare the final multer upload object

const UPLOADS_FOLDER = './uploads/';
// define the storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        // i.e file name: Important File.pdf=> important-file-646756347463.pdf
        const fileExt = path.extname(file.originalname); // split the extension name from the file.
        // const fileName = file.originalname.replace(fileExt, '').toLowerCase().split(' ').join('-')+"-"+Date.now();
        let fileName = file.originalname.replace(fileExt, '').toLowerCase().split(' ').join('-');
        fileName += `-${Date.now()}`;
        cb(null, fileName + fileExt);
    },
});
// upload return a middleware.

const upload = multer({
    storage,
    limits: {
        // here give the limits of the file size.
        fileSize: 1000000, // fileSize with bytes in here-1MB
    },
    fileFilter: (req, file, cb) => {
        // which types of file are allowed when upload an user.
        // console.log(file);  return the properties of the file.

        if (file.fieldname === 'avatar') {
            if (
                file.mimetype === 'image/png' ||
                file.mimetype === 'image/jpg' ||
                file.mimetype === 'image/jpeg'
            ) {
                cb(null, true); // this callback follow the error back pattern and thats the reason the first parameter given there is error or not and the second parameter given that it is true or false.
            } else {
                cb(new Error('Only .jpg,.jpeg and .png are allowed.'));
            }
        } else if (file.fieldname === 'doc') {
            if (file.mimetype === 'application/pdf') {
                cb(null, true);
            } else {
                cb(new Error('Only .pdf format is allowed.'));
            }
        } else {
            cb(new Error('There was an unknown error'));
        }
    },
});
const app = express();
// for single field
// app.post('/', upload.array('avatar', 3), (req, res) => {
//     // upload.single for single file and upload.array for multiple file
//     res.send('Hello World.');
// });
// If there are multiple fields in client side then the process should be
/*
app.post(
    '/',
    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'gallery', maxCount: 2 },
    ]),
    (req, res) => {
        // upload.single for single file and upload.array for multiple file
        res.send('Hello World.');
    }
);

*/
// Handle form data with multer.

app.post(
    '/',
    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'doc', maxCount: 1 },
    ]),
    (req, res) => {
        console.log(req.files);

        res.send('Hello World.');
    }
);
/*
// default error handler
app.use((err, req, res, next) => {
    if (err) {
        req.status(500).send(err.message);
    } else {
        res.send('Success!!!');
    }
});

*/

// If I catch the error that is occur due the problem of multer then

app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send('There was an upload error.');
        } else {
            res.status(500).send(err.message);
        }
    } else {
        res.send('Success!!!');
    }
});
app.listen(3000, () => {
    console.log('The Server has started on port 3000.');
});
