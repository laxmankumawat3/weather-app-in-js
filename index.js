const API_KEY= "b0f62142511166a41e1574055ecd5238"
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getWeather = async  (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch (url)
    const data = await response.json();
    console.log(data);
   return showWeather(data)

}
const showWeather =async (data)=>{
    if(data.cod == "404"){
       weather.innerHTML = `<h2>city not found</h2>`
    }
    weather.innerHTML= 
 `   <div>
 <div>
 <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
 <h4> ${data.weather[0].main} </h4>
</div>
<h2> city ${data.name} </h2>

<div>
    <h2>${data.main.temp} ℃</h2>
    <h2>feels like ${data.main.feels_like} ℃</h2>
    <h2>min-Tamp ${data.main.temp_min} ℃</h2>
    <h2>max-Tamp ${data.main.temp_max} ℃</h2>
    
</div>
<div>
   
    <h2> wind speed ${data.wind.speed} km/h </h2>
</div>
`
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)