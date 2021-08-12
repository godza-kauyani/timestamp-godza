
const {Router} = require('express');
const router = Router();
const moment = require('moment');
/*
An empty date parameter should return the current time in a JSON object with a unix key
An empty date parameter should return the current time in a JSON object with a utc key
*/

router.get('/',(req,res)=>{
  const result = {
    unix:new Date().getTime(),
    utc:new Date().toUTCString()
  }
  res.json(result)
})

/*
A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds

A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
*/

router.get('/:date/',(req,res)=>{
  date_string = req.params.date
  const timestamp = date_string.includes('-')?date_string:+date_string
  if(moment(timestamp).isValid()){
    res.json({
      unix:new Date(timestamp).getTime(),
      utc:new Date(timestamp).toUTCString()
    })
  }
//If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }

  res.json({error:'Invalid Date'})
    
});


module.exports= router;