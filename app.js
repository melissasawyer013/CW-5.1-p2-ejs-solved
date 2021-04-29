// STEP 1: Before you start: take a look at the code below to get a feel for what it does. 

// STEP 2: In your terminal install the dependencies simply by typing in npm install. This will install the needed dependencies (express and ejs) and dev dependencies (morgan and nodemon) for this project. 
    // Note that you do NOT have to do npm init because cloning this project brings in the package.json file that's usually created through the npm init.  

// STEP 3: In the views/pages folder, change the file type of the html files to ejs files by replacing .html with .ejs for all three files.

// STEP 4: Follow the directions below in the commented code to complete the rest of this assignment. 


const express = require('express');
const app = express();
const PORT = 3000;
// STEP 5: Require the built-in Node module 'path'
const path = require('path');
const morgan = require('morgan');

// STEP 6: Set the view engine to 'ejs'
app.set('view engine', 'ejs');

// STEP 7: Set up the path to static assets with express.static() method, which takes path.join() as it's argument - note that path.join() expects 2 arguments
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

// Variables to be used in EJS files.
let userName = 'CodeSquader';
let date = new Date();
let year = date.getFullYear();

//Routes 
// STEP 8: Convert these get routes so that they use the response.render method to render the correct ejs files from the views/pages folder. Pass in the userName variable and the year variable so that their values can be imported into the ejs pages being rendered. 

// STEP 9: For each route, go to the ejs page in the views/pages folder and use userName and the year values being passed in through the route. The userName should diplay in the first paragraph, and the year should display in the footer. 
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

