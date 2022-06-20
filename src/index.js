import currentWeather from './currentWeather';
import dailyWeather from './dailyWeather';

const input = document.getElementById('choosecity');
const button = document.getElementById('getweather');
button.addEventListener('click', async () => {
  const currentWeatherResult = await currentWeather.getAPIData(input.value);
  console.log(currentWeatherResult);
  const hourlyWeatherResult = await dailyWeather.getAPIData(input.value);
  console.log(hourlyWeatherResult);
});
