const searchCity = document.querySelector(".search-bar")
const button = document.querySelector("button");

let weather = {
    "apiKey": "886705b4c1182eb1c69f28eb8c520e20",
    fetchWeather: function (city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`)
        .then(res => res.json())
        .then(data => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const{name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind

        document.querySelector(".city").innerText = `Weather in ${name}`;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = `${Math.round(temp-273.15)}°C`;
        document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
        document.querySelector('.wind').innerText = `Wind speed: ${speed}km/h`;
    },

    search: function() {
        this.fetchWeather(searchCity.value)
    }
}

searchCity.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      weather.search()
    }
});
button.addEventListener("click", function() {
    weather.search()
})
