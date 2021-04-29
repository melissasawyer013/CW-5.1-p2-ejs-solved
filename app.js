const express = require('express');
const app = express();
const PORT = 3000;
// require the built-in Node module 'path'
const path = require('path');
const morgan = require('morgan');

// set the view engine to 'ejs'
app.set('view engine', 'ejs');

// set up the path to static assets with express.static() method, which takes path.join() as it's argument - note that path.join() expects 2 arguments
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

// Variables to be used in EJS files.
let userName = 'CodeSquader';
let date = new Date();
let year = date.getFullYear();

//Routes 
app.get('/', (request, response) => {
    response.render('pages/index', {
        name: userName,
        copyrightYear: year,
    });
});

app.get('/about', (request, response) => {
    response.render('pages/about', {
        name: userName,
        copyrightYear: year,
    });
});

app.get('/contact', (request, response) => {
    response.render('pages/contact', {
        name: userName,
        copyrightYear: year,
    });
});


//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});

