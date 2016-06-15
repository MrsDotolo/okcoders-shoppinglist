//main js file of our shoplist app
var express = require ('express');   //import the express module

var app = express ();   //create our app object that holds our routes

app.listen (3000, function () {  //start listening on port 3000

  console.log ('shoppinglist listening on http://localhost:3000');
});

app.use ('/' , express.static ('../app_frontend'));  //serve our static html files

app.get('/list', function (req, res){
  res.json ([
    'cat food',
    'dog food',
    ]);
});
