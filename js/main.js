// Bind View

const inputName = document.getElementById("name_city")

const cityName = document.getElementById("city")
const wMain = document.getElementById("weather-main")
const wDesc = document.getElementById("weather-desc")
const mainTemp = document.getElementById("weather-temp")

// Update Weather
function btnSearch() {
    getWeather(inputName.value)
}