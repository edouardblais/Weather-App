import currentWeather from './currentWeather';
import dailyWeather from './dailyWeather';
import displayCurrentWeather from './displayCurrentWeather';
import displayDailyWeather from './displayDailyWeather';

const button = document.getElementById('getweather');
button.addEventListener('click', async () => {
  const input = document.getElementById('choosecity');
  const currentWeatherResult = await currentWeather.getAPIData(input.value);
  console.log(currentWeatherResult);
  displayCurrentWeather(currentWeatherResult);
  const dailyWeatherResults = await dailyWeather.getAPIData(input.value);
  displayDailyWeather(dailyWeatherResults);
  console.log(dailyWeatherResults);
});

const defaultWeatherDisplay = (async () => {
  const defaultcurrentweather = await currentWeather.getAPIData('montreal');
  console.log(defaultcurrentweather);
  const defaultdailyweather = await dailyWeather.getAPIData('montreal');
  console.log(defaultdailyweather);
  displayCurrentWeather(defaultcurrentweather);
  displayDailyWeather(defaultdailyweather);
});

defaultWeatherDisplay();
