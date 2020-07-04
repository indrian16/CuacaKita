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

    // Maps
    const coord = data.coord
    console.log(`Coord: ${coord.lat}, ${coord.lon}`)
    updateMap(coord.lat, coord.lon)

    // Condition
    const condition = weather.icon
    updateBackground(condition)
}

function getCurrentTime() {

    // List of Month Name
    const monthNames = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June",
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    ];

    // Init Date
    const date = new Date()
    
    // Create Date String
    const dateStr = date.getDate()
    const monthStr = monthNames[date.getMonth()]
    const yearStr = date.getFullYear()

    // Create Time String
    const hourStr = date.getUTCHours()
    const minuteStr = date.getMinutes()
    const secStr = date.getSeconds()


    // Update Date Text
    dateView.innerText = dateStr + " " + monthStr + " " + yearStr

    // Update Time Text
    timeView.innerText = hourStr + ":" + minuteStr + ":" + secStr
}

function updateBackground(condition) {

    const conditionMap = {
        "01d" : 'url(images/condition/clear_sky_d.jpg)',
        "01n" : 'url(images/condition/clear_sky_n.jpg)',
        "02d" : 'url(images/condition/few_cloud_d.jpg)',
        "02n" : 'url(images/condition/few_cloud_n.jpg)',
        "03d" : 'url(images/condition/scattered_d.jpg)',
        "03n" : 'url(images/condition/scattered_n.jpg)',
        "04d" : 'url(images/condition/scattered_d.jpg)',
        "04n" : 'url(images/condition/scattered_n.jpg)',
        "09d" : 'url(images/condition/rain_d.jpg)',
        "09n" : 'url(images/condition/rain_n.jpg)',
        "10d" : 'url(images/condition/rain_d.jpg)',
        "10n" : 'url(images/condition/rain_n.jpg)',
        "11d" : 'url(images/condition/thunderstorm_d.jpg)',
        "11n" : 'url(images/condition/thunderstorm_n.jpg)',
        "13d" : 'url(images/condition/snow_d.jpg)',
        "13n" : 'url(images/condition/snow_n.jpg)',
        "50d" : 'url(images/condition/fog_d.jpg)',
        "50n" : 'url(images/condition/fog_n.jpg)'
    }
    
    // Change BG
    startBG.style.background = conditionMap[condition]
}