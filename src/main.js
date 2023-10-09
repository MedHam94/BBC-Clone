function getCurrentDate(){
  const currentDate = new Date()

  const format = {weekday: 'long', day:'numeric', month:'long'}
  
  document.querySelector('.date').innerHTML += currentDate.toLocaleDateString(undefined, format)
}

getCurrentDate()


async function getWeatherData() {
  try {
      const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const latitude = position.coords.latitude.toFixed(2);
      const longitude = position.coords.longitude.toFixed(2);

      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
      const data = await response.json();

      document.querySelector('.currentWeather').innerHTML +=  data.current_weather.temperature;

      console.log(data);
  } catch (error) {
      console.log(error);
  }
}
getWeatherData()