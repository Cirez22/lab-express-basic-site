// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

//middlewares

app.use(express.static(__dirname));

// our first Route:
app.get('/', (request, response) => {   
     response.sendFile(__dirname + '/views/index.html')
})

// about
app.get('/about', (request, response) => {   
    response.sendFile(__dirname + '/views/about.html')
})

//works
app.get('/works', (request, response) => {   
    response.sendFile(__dirname + '/views/works.html')
})

// Server Started
app.listen(5000, () => console.log('My first app listening on port 3000! '));
