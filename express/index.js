const express = require('express');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');

var todos = [{id:1, title:'buy the milk'}, {id:2, title:'rent a car'}, {id:3, title:'feed the cat'}];

app.use(bodyParser.json())


app.get('/', (request, response) =>{
  console.log(request.params.companyName);
  response.send('Response send to client::'+request.params.companyName);
   response.status(200).json(todos);
});





app.listen(port);
