
// Weather API code
const appKey = "feb8d47958975c60d133fa01a7812a31";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const city = document.getElementById('city');
const searchbox = document.getElementById('searchbox');
const searchBtn = document.getElementById('searchBtn');

// // Weather function
async function getWeatherData(city){
        const response = await fetch(apiUrl + city + `&appid=${appKey}`);

        if (response.status != 404)
        {
            let data = await response.json();

            document.getElementById('location').innerHTML = data.name;
            temperature.innerHTML = Math.round(data.main.temp) + "°C";
            description.innerHTML = data.weather[0].description;
            humidity.innerHTML = data.main.humidity + "°C";
        }
     }  
           
    searchBtn.addEventListener("click", () => {
        getWeatherData(searchbox.value);
    })




