const displayDailyWeather = (dailyWeatherResults) => {
  const timebox = document.getElementById('timebox');
  const descriptionbox = document.getElementById('descriptionbox');
  const tempbox = document.getElementById('tempbox');
  const feelslikebox = document.getElementById('feelslikebox');
  const humiditybox = document.getElementById('humiditybox');
  const windbox = document.getElementById('windbox');
  let time = 3;

  for (let i = 0; i < 40; i += 1) {
    const singletime = document.createElement('div');
    singletime.innerText = `in ${time} h`;
    time += 3;
    timebox.appendChild(singletime);
  }

  dailyWeatherResults.weatherdescription.forEach((descrip) => {
    const singledescrip = document.createElement('div');
    singledescrip.innerText = descrip;
    descriptionbox.appendChild(singledescrip);
  });
  dailyWeatherResults.temperature.forEach((temps) => {
    const singletemp = document.createElement('div');
    singletemp.innerText = `${(temps - 273, 15).toFixed(0)} °C`;
    tempbox.appendChild(singletemp);
  });
  dailyWeatherResults.feelslike.forEach((feels) => {
    const singlefeels = document.createElement('div');
    singlefeels.innerText = `${(feels - 273, 15).toFixed(0)} °C`;
    feelslikebox.appendChild(singlefeels);
  });
  dailyWeatherResults.airhumidity.forEach((hum) => {
    const singlehum = document.createElement('div');
    singlehum.innerText = `${hum} %`;
    humiditybox.appendChild(singlehum);
  });
  dailyWeatherResults.wind.forEach((windy) => {
    const singlewind = document.createElement('div');
    singlewind.innerText = `${windy} m/s`;
    windbox.appendChild(singlewind);
  });
};

export default displayDailyWeather;
