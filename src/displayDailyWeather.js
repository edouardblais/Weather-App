const displayDailyWeather = (dailyWeatherResults) => {
  const timebox = document.getElementById('dailytimebox');
  const descriptionbox = document.getElementById('dailydescriptionbox');
  const tempbox = document.getElementById('dailytempbox');
  const feelslikebox = document.getElementById('dailyfeelslikebox');
  const rainpercbox = document.getElementById('dailyrainpercbox');
  const humiditybox = document.getElementById('dailyhumiditybox');
  const windbox = document.getElementById('dailywindbox');
  let time = 3;
  let day = 0;

  timebox.innerHTML = '';
  descriptionbox.innerHTML = '';
  tempbox.innerHTML = '';
  feelslikebox.innerHTML = '';
  rainpercbox.innerHTML = '';
  humiditybox.innerHTML = '';
  windbox.innerHTML = '';

  for (let i = 0; i < 40; i += 1) {
    const singletime = document.createElement('div');
    if (time % 24 === 0) {
      day = (time / 24);
    }
    if (day === 0) {
      singletime.innerText = `In ${time} hours`;
    } else if (time === 48 || time === 72 || time === 96 || time === 120) {
      singletime.innerText = `In ${day} days`;
    } else if (time === 24) {
      singletime.innerText = 'In a day';
    } else if (day === 1) {
      singletime.innerText = `In ${day} day\n and ${time - 24} hours`;
    } else {
      singletime.innerText = `In ${day} days\n and ${time - (day * 24)} hours`;
    }
    singletime.classList.add('singleweatherbox');
    time += 3;
    timebox.appendChild(singletime);
  }

  dailyWeatherResults.weatherdescription.forEach((descrip) => {
    const singledescrip = document.createElement('div');
    singledescrip.innerText = (descrip.charAt(0).toUpperCase() + descrip.slice(1));
    singledescrip.classList.add('singleweatherbox');
    descriptionbox.appendChild(singledescrip);
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
