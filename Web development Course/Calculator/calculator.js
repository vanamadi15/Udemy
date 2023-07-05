const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
      res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req, res){
      var num1 = Number(req.body.num1);
      var num2 = Number(req.body.nun2);
      var result = num1 + num2;

      // console.log("Result : " + result);
      res.send("Result : " + result)
})

// Caculate BMI
app.get("/bmicalculator", function (req, res) {
      res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
      var weight = parseFloat(req.body.Weight);
      var height = parseFloat(req.body.height);
      // height = Math.pow(height, 2);

      var result = weight / height;

      // console.log("Result : " + result);
      res.send("Your BMI is : " + result)
})



app.listen(3000, function(){
      console.log("Listening to 3000 port");
})