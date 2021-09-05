const express=require("express");
const app=express();
const https=require("https");

app.get("/",function(req,res){
const url="https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=2170fd39e3e56fa66ff67432a3eca586"

  https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
      const weatherData=JSON.parse(data)
      const temp=weatherData.main.temp
      const des=weatherData.weather[0].description
      const icon=weatherData.weather[0].icon
      const name=weatherData.name
      const imageURL="http://openweathermap.org/img/wn/" +icon+"@2x.png"

        //result our server will send to client screen

      res.write("<p>Weather is currently "+des+".</p>");
      res.write("<h1>The temperature in "+name+" is "+temp+" degree Celcius .</h1>");
      res.write("<img src=" + imageURL +">");
      res.send()

    })
  })
})





app.listen(3000,function(){
  console.log("Server is running at port 3000");
});
