// waeather - await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`);
// google - const googleMapUrl = `https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=${data.coord.lat},${data.coord.lon}`;
// forecast - await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=metric`)

async function fetchWeather() {
  try {
    let APIkey = "aa2338a405271c2dbb7943eb7c748def";
    let city = document.getElementById("cityInput").value;

    let res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
    );
    let data = await res.json();

    console.log(data);

    // Weather data
    let iconId = data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${iconId}.png`;
    document.getElementById("weatherIcon").src = iconUrl;
    document.getElementById("minTemp").innerText = data.main.temp_min;
    document.getElementById("maxTemp").innerText = data.main.temp_max;
    document.getElementById("wind").innerText = data.wind.speed;
    document.getElementById("clouds").innerText = data.clouds.all;
    document.getElementById("sunrise").innerText = new Date(
      data.sys.sunrise * 1000
    ).toLocaleTimeString();
    document.getElementById("sunset").innerText = new Date(
      data.sys.sunset * 1000
    ).toLocaleTimeString();

    // Update the Google map iframe src
    const googleMapUrl = `https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=${data.coord.lat},${data.coord.lon}`;
    document.getElementById("googleMap").src = googleMapUrl;

    getForecastData(city);
  } catch (error) {
    console.log(error);
  }
}

async function getForecastData(city) {
  try {
    let APIkey = "aa2338a405271c2dbb7943eb7c748def";
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}&units=metric`
    );
    let data = await res.json();
    console.log(data);
    const forecastEls = document.getElementById("forecastDays");
    forecastEls.innerHTML = ""; // Clear existing forecasts

    // Filter the data to get one forecast per day
    const dailyData = data.list.filter((item, index) => index % 8 === 0);

    dailyData.forEach((day, idx) => {
      if (idx < 5) {
        // Only take 5 days
        const temp = day.main.temp;
        const icon = day.weather[0].icon;
        const date = new Date(day.dt_txt).toLocaleDateString();

        forecastEls.innerHTML += `
                    <div class="forecast-day">
                        <div class="forecast-date">${date}</div>
                        <div class="forecast-icon">
                            <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
                        </div>
                        <div class="forecast-temp">${temp}°C</div>
                    </div>
                `;
      }
    });
  } catch (error) {
    console.log(error);
  }
}
