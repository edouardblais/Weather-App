const currentWeather = (() => {
  const errorbox = document.getElementById('errorbox');

  function getSpecificData(databylatlon) {
    const temperature = databylatlon.main.temp;
    const feelslike = databylatlon.main.feels_like;
    const airhumidity = databylatlon.main.humidity;
    const wind = databylatlon.wind.speed;
    const weatherdescription = databylatlon.weather[0].description;
    const countryname = databylatlon.sys.country;
    const cityname = databylatlon.name;

    return {
      temperature, feelslike, airhumidity, wind, weatherdescription, countryname, cityname,
    };
  }

  function inputError(cityname) {
    if (cityname === '') {
      errorbox.innerText = 'Please enter a location';
    } else {
      errorbox.innerText = 'Oops! Location could not be found';
    }
  }

  function clearError() {
    errorbox.innerText = '';
  }

  async function getAPIData(cityname) {
    try {
      clearError();
      const firstresponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=8c958c34c399d529ae6bb1e94b934485`, { mode: 'cors' });
      const databycityname = await firstresponse.json();
      const latlon = [databycityname[0].lat, databycityname[0].lon];
      const secondresponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlon[0]}&lon=${latlon[1]}&appid=8c958c34c399d529ae6bb1e94b934485`);
      const databylatlon = await secondresponse.json();
      const APIdata = getSpecificData(databylatlon);
      return APIdata;
    } catch (error) {
      inputError(cityname);
      console.log(error);
      return null;
    }
  }

  return { getAPIData };
})();

export default currentWeather;
