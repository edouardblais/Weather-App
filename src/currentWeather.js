const currentWeather = (() => {
  function getSpecificData(databylatlon) {
    const city = databylatlon.name;
    const temperature = databylatlon.main.temp;
    const feelslike = databylatlon.main.feels_like;
    const airhumidity = databylatlon.main.humidity;
    const wind = databylatlon.wind.speed;
    const weatherdescription = databylatlon.weather[0].description;

    return {
      city, temperature, feelslike, airhumidity, wind, weatherdescription,
    };
  }

  async function getAPIData(cityname) {
    try {
      const firstresponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=8c958c34c399d529ae6bb1e94b934485`, { mode: 'cors' });
      const databycityname = await firstresponse.json();
      const latlon = [databycityname[0].lat, databycityname[0].lon];
      const secondresponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlon[0]}&lon=${latlon[1]}&appid=8c958c34c399d529ae6bb1e94b934485`);
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

export default currentWeather;
