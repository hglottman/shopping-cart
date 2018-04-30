var express = require('express');
var app = express();
app.listen(8080);

app.use(express.static('node_modules'));
app.use(express.static('public'));


// app.get('/', function(request, response){
//     console.log('jhd');
//   });
  app.get('/me', function(request, response){
    response.send({name: 'Hadar', favoriteFood: 'Bamba' , IwantForMyBirthday : 'dog'});
  });