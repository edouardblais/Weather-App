import currentWeather from './currentWeather';
import dailyWeather from './dailyWeather';
import displayWeather from './DOM';

const input = document.getElementById('choosecity');
const button = document.getElementById('getweather');
button.addEventListener('click', async () => {
  const currentWeatherResult = await currentWeather.getAPIData(input.value);
  console.log(currentWeatherResult);
  displayWeather(currentWeatherResult);
  const hourlyWeatherResult = await dailyWeather.getAPIData(input.value);
  console.log(hourlyWeatherResult);
});
