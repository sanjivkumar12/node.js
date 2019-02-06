var express = require('express');
var todocontroller = require('./controller/todocontroller.js');

var app = express();
//setting the templates engine
app.set('view engine','ejs');

//setting the static fileCreatedDate
app.use(express.static('./public'));

//use controller method
todocontroller(app);

//setting port
app.listen(5000);
console.log('setting at 3000 and testing');