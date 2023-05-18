// constants module
const path = require('path');

const BASE_XKCD_URL = 'http://xkcd.com/';
const PORT = 8000;
const PROJECT_PATH = process.cwd();
const ROUTES_PATH = path.join(PROJECT_PATH, 'src', 'routes');
const STATIC_PATH = path.join(PROJECT_PATH, 'src', 'public');
const VIEWS_PATH = path.join(PROJECT_PATH, 'src', 'views');

module.exports = {
  BASE_XKCD_URL,
  PORT,
  PROJECT_PATH,
  ROUTES_PATH,
  STATIC_PATH,
  VIEWS_PATH
}