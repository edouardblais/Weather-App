import { format } from 'date-fns';

const displayWeather = (currentWeatherResult) => {
  const currenttime = document.getElementById('currenttime');
  const city = document.getElementById('city');
  const description = document.getElementById('description');
  const temp = document.getElementById('temp');
  const feelsliketemp = document.getElementById('feelslike');
  const humidity = document.getElementById('humidity');
  const windspeed = document.getElementById('wind');
  const input = document.getElementById('choosecity').value;

  const today = format(new Date(), 'Pp');
  currenttime.innerText = today;

  city.innerText = input;
  description.innerText = currentWeatherResult.weatherdescription;
  temp.innerText = `${(currentWeatherResult.temperature - 273.15).toFixed(0)} °C`;
  feelsliketemp.innerText = `${(currentWeatherResult.feelslike - 273.15).toFixed(0)} °C`;
  humidity.innerText = `${currentWeatherResult.airhumidity} %`;
  windspeed.innerText = `${currentWeatherResult.wind} m/s`;
};

export default displayWeather;
