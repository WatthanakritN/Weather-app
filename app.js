const apiKey = "4ce2e4c8a56999e3934532e15d5cb35f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`)
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {

    }

    var data = await response.json();

    console.log(data);
    //ดึงข้อมูล//
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "assets/cloudy.png";
    }else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "assets/cloudy.png";
    }else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "assets/rainy-day.png";
    }else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "assets/sun.png";
    }else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "assets/snow.png";
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none";
}


searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})

// checkweather();
// checkweather();