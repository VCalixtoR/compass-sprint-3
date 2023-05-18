const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const Handlebars = require('handlebars');
const Constants = require('./constants')

// body parser and express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// index file for default endpoint
app.get('/', function(req, res){
  res.render('index');
});

// handle bars
app.set('views', Constants.VIEWS_PATH);
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// set handlebar limit helper
Handlebars.registerHelper('limit', function(arr, limit) {
  if (!Array.isArray(arr)) { return []; }
  return arr.slice(0, limit);
});

// default static folder - used in html rendering
app.use(express.static(Constants.STATIC_PATH));

// listening port, for production uses environment, for dev uses Constants.PORT
let port = process.env.PORT ? process.env.PORT: Constants.PORT;
app.listen(port, function(){
  console.log(`Working in: http://localhost:${port}/`);
});

// routes
app.use('/card', require(path.join(Constants.ROUTES_PATH, 'cards.js')));