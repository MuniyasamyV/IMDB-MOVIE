const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile("imdb.html", { root: __dirname })
  });
  

app.listen(port);
console.log('Server started at http://localhost:' + port);