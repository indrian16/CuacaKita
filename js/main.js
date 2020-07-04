// Bind View
const inputName = document.getElementById("name_city")
const cityName = document.getElementById("city")
const wMain = document.getElementById("weather-main")
const wDesc = document.getElementById("weather-desc")
const mainTemp = document.getElementById("weather-temp")
const dateView = document.getElementById("date")
const timeView = document.getElementById("time")

// Start Background View
const startBG = document.getElementById("start")
// Default Background
updateBackground("01d")

// Get Current Time
getCurrentTime()

// Update DateTime every 1 sec
setInterval(() => {
    getCurrentTime()
}, 1000); // 1000ms

// Get Default Weather
getWeather("samarinda")

// Search Button Listener
function btnSearch() {
    getWeather(inputName.value)
}