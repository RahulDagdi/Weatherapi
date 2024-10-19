 
 
const api_key = "1e2399c7e198b62a6d9663f888e15749";
const api_Url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox  = document.querySelector(".search input") ;
const searchButton  = document.querySelector(".search button") ;
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {

    const response = await fetch (api_Url + city + `&appid=${api_key}`);
   

     if(response.status==404)
     {
        // alert("City not found");
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
     }
    else  {
       
        var data =  await response.json() ;
      
        if(data.cod==200){
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C" ;
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".country").innerHTML = ", " + data.sys.country 
        
        
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%" ;
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h" ;
 document.querySelector(".longitude").innerHTML = data.coord.lon ;
 document.querySelector(".latitude").innerHTML = data.coord.lat ;



        if(data.weather[0].main=="Clouds")
        {
         weatherIcon.src = " Assets/clouds.png" ;
         
        }
        else if (data.weather[0].main=="Clear")
        {
            weatherIcon.src = " Assets/sun.png" ;
        }
        else if (data.weather[0].main=="Rain")
        {
            weatherIcon.src = " Assets/heavy-rain.png" ;
        }
        else if (data.weather[0].main=="Drizzle")
        {
            weatherIcon.src = " Assets/Drizzel.png" ;
        }
        else if (data.weather[0].main=="Mist")
        {
            weatherIcon.src = " Assets/Mist.png" ;
        
        }
        else if (data.weather[0].main=="Snow")
        {
            weatherIcon.src = " Assets/snow.png" ;
        }
        else if (data.weather[0].main=="Storm")
        {
            weatherIcon.src = " Assets/storm.png" ;
        }
        else if (data.weather[0].main=="Cloudy")
        {
            weatherIcon.src = " Assets/cloudy.png" ;
        }
        
        
        
        
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}



 }

searchButton.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})

checkWeather();


