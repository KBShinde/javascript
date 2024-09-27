const apiKey = `3bee07e2c472cf271961b395fd0e5ec6`; 

document.getElementById('getWeather').addEventListener('click', () => {
    city = document.getElementById('cityInput').value

    if(city) {
        fetchWeatherData(city)
    }
    else {
        alert('PLease enter a city')
    }
})

async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

        if(!response.ok) {
            throw new Error(' city not found')
        }

        const data = await response.json()
        displayWeatherData(data)

    } catch (error) {
        alert('Error :' + error.message)
    }
}

function displayWeatherData(data) {
    document.getElementById('cityName').textContent = data.name
    document.getElementById('temperature').textContent = `Temperature : ${data.main.temp} °C`
    document.getElementById('description').textContent = `Weather : ${data.weather[0].description}`
    document.getElementById('humidity').textContent = `Humidity : ${data.main.humidity} %`
}