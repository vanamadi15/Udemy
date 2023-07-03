const express = require("express");
const app = express()

app.get("/", function(req, res){
      res.send("Hello Vanamadi");
      
})

app.get("/about", function(req, res){
      res.send("Vanamadi@gmail.com");
      
})

app.listen(3000, function(){
      console.log("Listening to 3000 port");
})