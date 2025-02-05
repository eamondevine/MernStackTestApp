// loads vars from env file, and makes process.env global avail in my app
// can also import this in TS and then do the config method below it
require('dotenv').config();

// can import module also from express, otherwise use this const declaration
const express = require('express');

// express app
const app = express();

// middleware runs between when a request is received and when a response is sent.
// next allows this piece of middleware to move down to new middleware code
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// ROUTES: here is my get request in action, notice app has been declared first above
app.get('/', (req, res) => {
    // response object with json string
    res.json({mssg: 'Welcome to the app'});
});

// listen for requests on a port - see env variables for port var reference
// process means a nodejs process, dotenv is the node package that connects the env folder vars
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000!');
});