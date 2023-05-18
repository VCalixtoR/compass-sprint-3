const express = require('express');
const router = express.Router();

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

// get comic from xkcd given its id
router.get('/', async (req, res) => {
  
  if(!req || !req.query || !req.query.comicId){
    res.status(422).send('Missing comicId param in query');
  }
  let comicId = req.query.comicId;
  
  let comic = await baseRequestHandling({
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    }}, process.env.BASE_XKCD_URL,`${comicId}/info.0.json`);
  
  res.status(200).send(comic);
});

// get latest comic
router.get('/atual', async (req, res) => {
  
  let comic = await baseRequestHandling({
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    }},process.env.BASE_XKCD_URL,'info.0.json');
  
  res.send(comic);
});

module.exports = router;