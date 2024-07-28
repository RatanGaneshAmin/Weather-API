function getWeather() {
    var city = document.getElementById('cityInput').value;
    var apiKey = 'f158942c5542e68f0aac26f8b3214cf4'; 
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var weatherInfo = document.getElementById('weatherInfo');
            if (data.cod === 200) {
                var description = data.weather[0].description;
                var temperature = (data.main.temp-273).toFixed(2);
                var humidity = data.main.humidity;
                var windSpeed = data.wind.speed;

                weatherInfo.innerHTML = `
                    <p>Description: ${description}</p>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Wind Speed: ${windSpeed} m/s</p>
                `;
            } else {
                weatherInfo.innerHTML = '<p>City not found</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
