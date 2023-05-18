const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const CustomEnv = require('custom-env');
CustomEnv.env(`${process.env.NODE_ENV}`);

// set project paths
const ProjectPath = process.cwd();
const RoutesPath = path.join(ProjectPath, 'src', 'routes');

// body parser and express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// index file for default endpoint
app.get('/', function(req, res){
  res.send('This is a backend middleware for xkcd');
});

// listening port
app.listen(process.env.BACKEND_PORT, function(){
  console.log(`Backend: Working in ${process.env.NODE_ENV}server: http://localhost:${process.env.BACKEND_PORT}/`);
});

// routes
app.use('/comics', require(path.join(RoutesPath, 'comics.js')));