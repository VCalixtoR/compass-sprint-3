const express = require('express');
const router = express.Router();

// needed because older versions of node does not have fetch as a default method
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// fetches a request with exception handling
async function baseRequestHandling(options, base_url, endpoint){

  let rawResponse = {};
  let response = {};

  try{
    rawResponse = await fetch(`${base_url}${endpoint}`, options).then((response) => {
      return response;
    }).catch( _ => {
      throw new Error('Não foi possível conectar com o servidor');
    });

    // if response is ok, awaits for text conversion and after converts to json
    // needed to avoid json parsing empty object exception
    if(rawResponse.ok){
      response = await rawResponse.text();
      if(response){
        response = JSON.parse(response);
      }
      return response;
    }
  }
  catch(error){
    console.log(error.message);
    return error;
  }
}

// get comic from backend given its id
router.get('/', async (req, res) => {
    
  let comicId = req.query.comicId;
  
  let comic = await baseRequestHandling({
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    }},process.env.BACKEND_URL,`comics?comicId=${comicId}`);
  
  if(comic){
    res.render('comics', { comic, comicId });
  } else {
    res.render('comics', {});
  }
});

// get latest comic
router.get('/atual', async (req, res) => {
    
  let atual = true;  
  let comic = await baseRequestHandling({
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    }},process.env.BACKEND_URL,'comics/atual');
  
  if(comic){
    res.render('comics', { comic, atual });
  } else {
    res.render('comics', {});
  }
});

module.exports = router;