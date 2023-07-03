const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
      res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req, res){
      var num1 = req.body.num1;
      var num2 = req.body.nun2;
      var result = num1 + num2;

      // console.log("Result : " + result);
      res.send("Result : " + result)
})

app.listen(3000, function(){
      console.log("Listening to 3000 port");
})