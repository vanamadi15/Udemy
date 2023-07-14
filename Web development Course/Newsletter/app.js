const express = require("express");
const request = require("request");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname+"/signupPage.html");    
})


app.post("/", function(req, res){
      const firstname = req.body.fname;
      const lastname = req.body.lname;
      const email = req.body.email;

      // res.write("<p> welcome to Newsletter, please find the below mentioned details</p>")
      res.send("<h1> first name:"+firstname+"<br> last name: "+lastname+"<br>email address:"+email+"</h1>");
      // res.send()     ;
})

app.listen(3000, function () {
      console.log("server listening to 3000 port");
})