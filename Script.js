var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send()
request.onload=function(){
    try{
    var data=JSON.parse(this.response)  
    GetWeatherByCity(); 

    }    
    catch(err)
    {
      alert(err.name);
      alert(err.message);
    }
    
}
function GetWeatherByCity()
{
    
    var cityRequest=new XMLHttpRequest();
    cityRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?q=India&appid=87537b8fd879289d8397daabde83d6a3',true)
    cityRequest.send()    
    cityRequest.onload=function(){
    try{
    var cityData=JSON.parse(this.response) 
    console.log("get Weather based on city name (for India)") 
   console.log(cityData.weather)
   console.log("\n")
   GetWeatherByLonAndLat(cityData.coord.lat,cityData.coord.lon)
    }    
    catch(err)
    {
      alert(err.name);
      alert(err.message);
    }
    
}
}

function GetWeatherByLonAndLat(Lat,Lon)
{
    var LatLonRequest=new XMLHttpRequest();
    LatLonRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?lat='+Lat+'&lon='+Lon+'&appid=87537b8fd879289d8397daabde83d6a3',true)
    LatLonRequest.send()
    
    LatLonRequest.onload=function(){
    try{
    var LatLonData=JSON.parse(this.response)  
    console.log("Get weather data based on Latitude and Longitude ( get lat and lon from previous city api)")
   console.log(LatLonData.weather)   
   console.log("\n")
    }    
    catch(err)
    {
      alert(err.name);
      alert(err.message);
    }
    
}
}

