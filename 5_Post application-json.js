var express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.json());


app.post('/',function (req, res) {
    let JSONData=req.body;
    let JSONString= JSON.stringify(JSONData);
    res.send(JSONString);
})


app.listen(8000,function () {
    console.log("server Running Successfully")
})