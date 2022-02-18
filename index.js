//Web app with Node.js and express for assignment portfolio

// use express and create app object
const express = require('express')
const app = express()

// define directory for files to server
app.use(express.static(__dirname + '/public/assignment-portfolio'))

// define the port
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.render('assignment-portfolio'))

// listen on the port
app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))