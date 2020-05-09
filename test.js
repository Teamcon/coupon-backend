const express = require('express'); // Loading the express module on our server
const app = express(); // Creates a new instance of express on our server
const port = 3000

app.get("/", function(req, res){
  // display 'Hello World!'
  res.send('Hello World!');
});

app.listen(3000, function() {
  // tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port ' + port);
}); // actualizing the line above
//sfhsifhishfsbfhjsbfsishgfis