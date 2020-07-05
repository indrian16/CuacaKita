function getWeather(inputName) {

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${inputName}&appid=42eaafc44f472fcd3c171f5a784c0e3d&units=metric`

    console.log("GET: " + api);
    

    $.ajax({
        url: api,
        type: 'GET',
        dataType: 'json',
        success: (data) => updateView(data),
        beforeSend: () => {
            cityName.innerText = "Loading..."
        },
        error: (xhr, ajaxOptions, thrownError) => errorView(xhr, ajaxOptions, thrownError)
    })
}