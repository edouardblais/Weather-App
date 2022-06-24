const displayDailyWeather = (dailyWeatherResults) => {
  const timebox = document.getElementById('dailytimebox');
  const descriptionbox = document.getElementById('dailydescriptionbox');
  const tempbox = document.getElementById('dailytempbox');
  const feelslikebox = document.getElementById('dailyfeelslikebox');
  const humiditybox = document.getElementById('dailyhumiditybox');
  const windbox = document.getElementById('dailywindbox');
  let time = 3;

  for (let i = 0; i < 40; i += 1) {
    const singletime = document.createElement('div');
    singletime.innerText = `in ${time} h`;
    singletime.classList.add('singleweatherbox');
    time += 3;
    timebox.appendChild(singletime);
  }

  dailyWeatherResults.weatherdescription.forEach((descrip) => {
    const singledescrip = document.createElement('div');
    singledescrip.innerText = descrip;
    singledescrip.classList.add('singleweatherbox');
    descriptionbox.appendChild(singledescrip);
  });
  dailyWeatherResults.temperature.forEach((temps) => {
    const singletemp = document.createElement('div');
    singletemp.innerText = `${(temps - 273, 15).toFixed(0)} °C`;
    singletemp.classList.add('singleweatherbox');
    tempbox.appendChild(singletemp);
  });
  dailyWeatherResults.feelslike.forEach((feels) => {
    const singlefeels = document.createElement('div');
    singlefeels.innerText = `${(feels - 273, 15).toFixed(0)} °C`;
    singlefeels.classList.add('singleweatherbox');
    feelslikebox.appendChild(singlefeels);
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
