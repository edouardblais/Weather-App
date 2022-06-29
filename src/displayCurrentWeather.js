import { format } from 'date-fns';

const displayCurrentWeather = (currentWeatherResult) => {
  const currenttime = document.getElementById('currenttime');
  const city = document.getElementById('city');
  const description = document.getElementById('description');
  const temp = document.getElementById('temp');
  const feelsliketemp = document.getElementById('feelslike');
  const humidity = document.getElementById('humidity');
  const windspeed = document.getElementById('wind');
  const img = document.getElementById('descriptionimg');

  const today = format(new Date(), 'PPPPp');
  currenttime.innerText = today;
  city.innerText = (`${currentWeatherResult.cityname}, ${currentWeatherResult.countryname}`) || 'Montreal';
  description.innerText = (currentWeatherResult.weatherdescription.charAt(0).toUpperCase() + currentWeatherResult.weatherdescription.slice(1));
  temp.innerText = `${(currentWeatherResult.temperature - 273.15).toFixed(0)} °C`;
  feelsliketemp.innerText = `${(currentWeatherResult.feelslike - 273.15).toFixed(0)} °C`;
  humidity.innerText = `${currentWeatherResult.airhumidity} %`;
  windspeed.innerText = `${currentWeatherResult.wind} m/s`;

  if (currentWeatherResult.weatherdescription === 'scattered clouds' || currentWeatherResult.weatherdescription === 'few clouds') {
    img.src = 'icons/partlycloudy.svg';
  } else if (currentWeatherResult.weatherdescription === 'broken clouds' || currentWeatherResult.weatherdescription === 'overcast clouds') {
    img.src = 'icons/cloudy.svg';
  } else if (currentWeatherResult.weatherdescription === 'clear sky') {
    img.src = 'icons/sunny.svg';
  } else if (currentWeatherResult.weatherdescription === 'light rain') {
    img.src = 'icons/rainy.svg';
  } else if (currentWeatherResult.weatherdescription === 'moderate rain' || currentWeatherResult.weatherdescription === 'heavy intensity rain') {
    img.src = 'icons/pouring.svg';
  }
};

export default displayCurrentWeather;
