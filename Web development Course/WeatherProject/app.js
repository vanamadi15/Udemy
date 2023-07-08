const { log } = require("console");
const express = require("express");
const https = require("https");
const Bodyparser = require("body-parser");
const { url } = require("inspector");

const app = express();
app.use(Bodyparser.urlencoded({extended:true}));
app.get("/", function(req, res){
      // res.send("Hello weather application");
      res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res) {

      
      const query = req.body.cityName;
      //console.log(query);
      const apiKey = "899553f5db7d1c1cde59f95d17b09be7";
      const metric = "metric";
      const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units="+metric+".";

      https.get(url, function (response) {
            console.log(response.statusCode);

            response.on("data", function (data) {
                  const weatherData = JSON.parse(data);
                  const temperature = weatherData.main.temp;
                  const weatherDescription = weatherData.weather[0].description ;
                  const icon = weatherData.weather[0].icon;
                  const imageUrl = "http://openweathermap.org/img/wn/"+icon +"@2x.png"
                  // const weatherIcon = ("<img src=" + imageUrl+">")
                  res.write("<p>Weather condition is : "+ weatherDescription+ "</p><br>");
                  res.write("<h1>The temperature in "+query+" is "+ temperature+"</h1>");
                  res.write("<img src= "+ imageUrl +" >");

                  res.send()
            })
      })
})


app.listen(3000, function(){
      console.log("Server is running on 3000 port");
})
