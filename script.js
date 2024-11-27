


let error_info =document.querySelector(".error_info");

async function coco(){
    let apikey = "08fd7efcf571c78efa706851faa71dc3";

    let text = document.querySelector("#text").value.toUpperCase().charAt(0)+document.querySelector("#text").value.slice(1);
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${text}`;//





    try{
        let result = await fetch(url + `&appid=${apikey}`);

        let data = await result.json();
        console.log(data);
    if(data.cod ==="404" || data.cod==="400"){
 
        error_info.textContent = data.cod === "404" 
                ? "No City Found! Check Your City Name Again"
                : "Please Enter City Name First"
                document.querySelector(".cityHere").innerHTML = "--";
                document.querySelector(".temp").textContent =`-°C` ;
                document.querySelector("#humidityDis").textContent = "- -";
                document.querySelector(".descDis").textContent = "--";
                document.querySelector(".weatherEmoji").textContent = "-";
            
    }
    else{
        // let error_info =document.querySelector(".error_info");
        error_info.textContent="Gotcha!!!"
        let cityDisplay = document.querySelector(".cityHere")
        cityDisplay.innerHTML =`${text}`
    
        let temp = document.querySelector(".temp");
        temp.textContent= `${data.main.temp}°C`
    
        let humidityDis = document.querySelector("#humidityDis");
        humidityDis.textContent = `${data.main.
        humidity}%`
    
    let descDis= document.querySelector(".descDis");
    descDis.textContent = `${data.weather[0].description}`
    
    let weatherCode = data.weather[0].id;
    let weatherEmoji = document.querySelector(".weatherEmoji");
    weatherEmoji.textContent = emojis(weatherCode); 
    }
}
catch (error){
    console.log(error);
}


function emojis(weather) {
    switch (true) {
        case weather >= 200 && weather < 300:
            return "⛈️"; // Thunderstorm
        case weather >= 300 && weather < 400:
            return "🌧️"; // Drizzle
        case weather >= 500 && weather < 600:
            return "🌧️"; // Rain
        case weather >= 600 && weather < 700:
            return "❄️"; // Snow
        case weather >= 700 && weather < 800:
            return "🌫️"; // Atmosphere (mist, smoke, etc.)
        case weather === 800:
            return "☀️"; // Clear sky
        case weather >= 801 && weather < 810:
            return "⛅"; // Cloudy
        default:
            return "👽"; // Unknown condition
    }
}

    }


let btn = document.querySelector("#btn");
btn.addEventListener("click",()=>{
    coco()
    
})


