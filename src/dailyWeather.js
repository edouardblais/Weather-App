const dailyWeather = (() => {
  function getSpecificData(databylatlon) {
    const temperature = [];
    const feelslike = [];
    const airhumidity = [];
    const wind = [];
    const weatherdescription = [];
    databylatlon.list.forEach((hour) => {
      temperature.push(hour.main.temp);
      feelslike.push(hour.main.feels_like);
      airhumidity.push(hour.main.humidity);
      wind.push(hour.wind.speed);
      weatherdescription.push(hour.weather[0].description);
    });
    return {
      temperature, feelslike, airhumidity, wind, weatherdescription,
    };
  }

  async function getAPIData(cityname) {
    try {
      const firstresponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=8c958c34c399d529ae6bb1e94b934485`, { mode: 'cors' });
      const databycityname = await firstresponse.json();
      const latlon = [databycityname[0].lat, databycityname[0].lon];
      const secondresponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latlon[0]}&lon=${latlon[1]}&appid=8c958c34c399d529ae6bb1e94b934485`);
      const databylatlon = await secondresponse.json();
      const APIdata = getSpecificData(databylatlon);
      return APIdata;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return { getAPIData };
})();

export default dailyWeather;
