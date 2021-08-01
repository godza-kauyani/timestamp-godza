/*a request to /api/timestamp/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }*/
/*
Your project can handle dates that can be successfully parsed by new Date(date_string)
*/
/*
\If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }
*/
/*
An empty date parameter should return the current time in a JSON object with a unix key

An empty date parameter should return the current time in a JSON object with a utc key
*/
const {Router} = require('express');
const router = Router();
const moment = require('moment');

router.get('/timestamp/',(req,res)=>{
  const result = {
    unix:new Date().getTime(),
    utc:new Date().toUTCString()
  }
  res.json(result)
})
router.get('/timestamp/:date',(req,res)=>{
  date_string = req.params.date
  const timestamp = date_string.includes('-')?date_string:+date_string
  if(moment(timestamp).isValid()){
    res.json({
      unix:new Date(timestamp).getTime(),
      utc:new Date(timestamp).toUTCString()
    })
  }
  res.json({error:'Invalid Date'})
    
});
module.exports= router;