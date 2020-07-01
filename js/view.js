function updateView(data) {
    
    console.log(data)

    // Weather
    const weather = data.weather[0]

    // Main
    const main = data.main

    cityName.innerText = data.name
    wMain.innerText = weather.main
    wDesc.innerText = weather.description
    mainTemp.innerHTML = `<h2>${main.temp} &deg;</h2>`
}