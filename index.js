
var express = require('express');

var app = module.exports = express()


app.get('/',function(req,res)
{
 res.status(206).sendFile(`${__dirname}/hls.html`)
})
app.get('/video', function(req, res){
  const id=req.body
  console.log(id)
  console.log(id)
    res.status(206).sendFile(`${__dirname}/video/index.m3u8`)
});
app.get('/:id', function(req, res){
  const id=req.params.id
  console.log(id)
  console.log(id)
    res.status(206).sendFile(`${__dirname}/video/`+id)
});


app.listen(3000);
console.log('Express started on port 3000');

