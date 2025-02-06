// loads vars from env file, and makes process.env global avail in my app
// can also import this in TS and then do the config method below it
require('dotenv').config()

// can import module also from express, otherwise use this const declaration
const express = require('express')
// this is the mongoose module from mongoose (object). Mongoose is an ODM
const mongoose = require('mongoose')
// grabbed from my blogs.js file
const blogRoutes = require('./routes/blogs')

// express app
const app = express()

// middleware runs between when a request is received and when a response is sent.
// next allows this piece of middleware to move down to new middleware code
app.use(express.json()) //This will be used later for parsing req.body
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes: Now it has been updated to reflect a request to that path plus the get request path in the blogs.js file  
app.use('/api/blogs', blogRoutes)

// connect to the database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listen for requests on a port - see env variables for port var reference
// process means a nodejs process, dotenv is the node package that connects the env folder vars
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000!')
})
})
.catch((error) => {
    console.log(error)
})
