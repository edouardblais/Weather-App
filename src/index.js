import currentWeather from './currentWeather';
import dailyWeather from './dailyWeather';
import displayCurrentWeather from './displayCurrentWeather';
import displayDailyWeather from './displayDailyWeather';

const search = document.getElementById('getweather');
const loader = document.getElementById('loading');

search.addEventListener('click', async () => {
  loader.classList.add('display');
  setTimeout(() => {
    loader.classList.remove('display');
  }, 3000);
  const input = document.getElementById('choosecity');
  const currentWeatherResult = await currentWeather.getAPIData(input.value);
  displayCurrentWeather(currentWeatherResult);
  const dailyWeatherResults = await dailyWeather.getAPIData(input.value);
  displayDailyWeather(dailyWeatherResults);
  loader.classList.remove('display');
});

const defaultWeatherDisplay = (async () => {
  loader.classList.add('display');
  setTimeout(() => {
    loader.classList.remove('display');
  }, 3000);
  const defaultcurrentweather = await currentWeather.getAPIData('montreal');
  const defaultdailyweather = await dailyWeather.getAPIData('montreal');
  displayCurrentWeather(defaultcurrentweather);
  displayDailyWeather(defaultdailyweather);
  loader.classList.remove('display');
});

defaultWeatherDisplay();
