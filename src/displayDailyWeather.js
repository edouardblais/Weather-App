import addHours from 'date-fns/addHours';
import { format } from 'date-fns';
import roundToNearestMinutes from 'date-fns/roundToNearestMinutes';

const displayDailyWeather = (dailyWeatherResults) => {
  const timebox = document.getElementById('dailytimebox');
  const descriptionbox = document.getElementById('dailydescriptionbox');
  const imgbox = document.getElementById('dailyimgbox');
  const tempbox = document.getElementById('dailytempbox');
  const feelslikebox = document.getElementById('dailyfeelslikebox');
  const rainpercbox = document.getElementById('dailyrainpercbox');
  const humiditybox = document.getElementById('dailyhumiditybox');
  const windbox = document.getElementById('dailywindbox');
  let time = new Date();

  timebox.innerHTML = '';
  descriptionbox.innerHTML = '';
  tempbox.innerHTML = '';
  feelslikebox.innerHTML = '';
  rainpercbox.innerHTML = '';
  humiditybox.innerHTML = '';
  windbox.innerHTML = '';

  for (let i = 0; i < 40; i += 1) {
    const singletime = document.createElement('div');
    time = addHours(time, 3);
    const roundtime = roundToNearestMinutes(time, { nearestTo: 30 });
    const formattedtime = format(roundtime, 'eeee p');
    singletime.innerText = formattedtime;
    singletime.classList.add('singleweatherbox');
    timebox.appendChild(singletime);
  }

  dailyWeatherResults.weatherdescription.forEach((descrip) => {
    const singledescrip = document.createElement('div');
    singledescrip.innerText = (descrip.charAt(0).toUpperCase() + descrip.slice(1));
    singledescrip.classList.add('singleweatherbox');
    singledescrip.style.fontWeight = '700';
    const img = document.createElement('img');
    if (descrip === 'scattered clouds' || descrip === 'few clouds') {
      img.src = 'icons/partlycloudy.svg';
    } else if (descrip === 'broken clouds' || descrip === 'overcast clouds') {
      img.src = 'icons/cloudy.svg';
    } else if (descrip === 'clear sky') {
      img.src = 'icons/sunny.svg';
    } else if (descrip === 'light rain') {
      img.src = 'icons/rainy.svg';
    } else if (descrip === 'moderate rain' || descrip === 'heavy intensity rain') {
      img.src = 'icons/pouring.svg';
    }
    img.classList.add('dailyimg');
    img.classList.add('singleweatherbox');
    descriptionbox.appendChild(singledescrip);
    imgbox.appendChild(img);
  });
  dailyWeatherResults.temperature.forEach((temps) => {
    const singletemp = document.createElement('div');
    singletemp.innerText = `${(temps - 273.15).toFixed(0)} °C`;
    singletemp.classList.add('singleweatherbox');
    tempbox.appendChild(singletemp);
  });
  dailyWeatherResults.feelslike.forEach((feels) => {
    const singlefeels = document.createElement('div');
    singlefeels.innerText = `${(feels - 273.15).toFixed(0)} °C`;
    singlefeels.classList.add('singleweatherbox');
    feelslikebox.appendChild(singlefeels);
  });
  dailyWeatherResults.rainperc.forEach((perc) => {
    const singleperc = document.createElement('div');
    singleperc.innerText = `${(perc)} %`;
    singleperc.classList.add('singleweatherbox');
    rainpercbox.appendChild(singleperc);
  });
  dailyWeatherResults.airhumidity.forEach((hum) => {
    const singlehum = document.createElement('div');
    singlehum.innerText = `${hum} %`;
    singlehum.classList.add('singleweatherbox');
    humiditybox.appendChild(singlehum);
  });
  dailyWeatherResults.wind.forEach((windy) => {
    const singlewind = document.createElement('div');
    singlewind.innerText = `${windy} m/s`;
    singlewind.classList.add('singleweatherbox');
    windbox.appendChild(singlewind);
  });
};

export default displayDailyWeather;
