import currentWeather from './currentWeather';
import dailyWeather from './dailyWeather';
import displayCurrentWeather from './displayCurrentWeather';
import displayDailyWeather from './displayDailyWeather';

const input = document.getElementById('choosecity');
const button = document.getElementById('getweather');
button.addEventListener('click', async () => {
  const currentWeatherResult = await currentWeather.getAPIData(input.value);
  displayCurrentWeather(currentWeatherResult);
  const dailyWeatherResults = await dailyWeather.getAPIData(input.value);
  displayDailyWeather(dailyWeatherResults);
});

const defaultWeatherDisplay = (async () => {
  const defaultcurrentweather = await currentWeather.getAPIData('montreal');
  const defaultdailyweather = await dailyWeather.getAPIData('montreal');
  displayCurrentWeather(defaultcurrentweather);
  displayDailyWeather(defaultdailyweather);
});

defaultWeatherDisplay();