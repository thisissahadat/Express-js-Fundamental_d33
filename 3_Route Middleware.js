var express=require('express');
var app=express();

app.get('/',function (req, res) {
    res.send("This is Home Page")
})

app.get('/contact',function (req, res) {
    res.send("This is Contact Page")
})


app.use('/about',function (req, res, next) {   //Middleware for about Route.
    console.log("I am about Middleware")
    next();
})
app.get('/about',function (req, res) {
    res.send("This is About Page")
})

app.listen(5000)