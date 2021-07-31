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

const showDate = (dateStr,res)=>{
  const d = new Date(dateStr)
  return res.json({
    "unix":Date.parse(d),
    "utc":d.toUTCString()
  })
}
router.get('/timestamp/:date',(req,res)=>{
  if(req.params.date){
    const date = req.params.date;
    if(moment(date).isValid()){
      showDate(date,res)
    }
    res.json({error:'Invalid Date'})
}
  showDate('',res)
});
module.exports= router;