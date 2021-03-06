// var express = require('express');
// var path = require('path');
// var app = express();

// app.use(express.static(__dirname+'/dist/angular-tour-of-heroes'));
// app.get('/*', function (req, res) {
//  res.sendFile(path.join (__dirname+ 
//   '/dist/angular-tour-of-heroes/src/app/app.component.html'));});
// app.listen(process.env.PORT || 8080);


//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/angular-tour-of-heroes'));
 
app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/angular-tour-of-heroes/src/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);