const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const Handlebars = require('handlebars');
const CustomEnv = require("custom-env");
CustomEnv.env(`${process.env.NODE_ENV}`);

// set project paths
const ProjectPath = process.cwd();
const RoutesPath = path.join(ProjectPath, 'src', 'routes');
const StaticPath = path.join(ProjectPath, 'src', 'public');
const ViewsPath = path.join(ProjectPath, 'src', 'views');

// body parser and express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// handle bars
app.set('views', ViewsPath);
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// set handlebar limit helper
Handlebars.registerHelper('limit', function(arr, limit) {
  if (!Array.isArray(arr)) { return []; }
  return arr.slice(0, limit);
});
Handlebars.registerHelper('getBackendUrl', function() {
  return process.env.BACKEND_URL;
});

// default static folder - used in html rendering
app.use(express.static(StaticPath));

// listening port
app.listen(process.env.FRONTEND_PORT, function(){
  console.log(`Frontend: Working in ${process.env.NODE_ENV}server: http://localhost:${process.env.FRONTEND_PORT}/`);
});

// endpoints - index file for default
app.get('/', function(req, res){
  res.render('index');
});
// another routes
app.use('/comics', require(path.join(RoutesPath, 'comics.js')));