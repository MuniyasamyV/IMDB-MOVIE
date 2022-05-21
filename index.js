const express = require('express');
var reload = require('reload')

const app = express();
const port = process.env.PORT || 8080;

//make main.js public
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile("index.html", { root: __dirname })
  });
  

app.listen(port);
console.log('Server started at http://localhost:' + port);
reload(app);
