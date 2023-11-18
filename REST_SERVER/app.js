const express = require("express");
const app = express();
const db = require("./util/database");
const booksRoutes = require("./routes/books");
// The * opens up for all domains ... BUT could CSV specify allowed domains
//               e.g., localhostL3000, localhost:3001
app.use( (req, res, next ) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Can set specific methods allowed (Can say '*")
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    // Again can use wild card (*)
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use( booksRoutes.routes);

const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");

// app.use( bodyParser.urlencoded({extended: false})); // middleware for body

app.use( bodyParser.json()); // for JSON input data



let port = 8000;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);
