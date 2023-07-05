const { log } = require("console");
const express = require("express");
const https = require("https");
const { url } = require("inspector");

const app = express();

app.get("/", function(req, res){

      const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=899553f5db7d1c1cde59f95d17b09be7&units=metric";

      https.get(url, function (response) {
            console.log(response.statusCode);

            response.on("data", function (data) {
                  const weatherData = JSON.parse(data);
                  const temp = weatherData.main.temp ;
                  const weatherDescription = weatherData.weather[0].description ;
                  const imageUrl = "http://openweathermap.org/img/wn/"+weatherData.weather[0].icon +"@2x.png"
                  // const weatherIcon = ("<img src=" + imageUrl+">")
                  res.write("Weather condition is : "+ weatherDescription)
                  res.write("the temperature in london is "+ temp)
                  res.write("<img src="+imageUrl+">")

                  res.send()
            })
      })

      

      // res.send("Hello weather application");

})


app.listen(3000, function(){
      console.log("Server is running on 3000 port");
})
