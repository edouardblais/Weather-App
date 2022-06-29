const dailyWeather = (() => {
  function getSpecificData(databylatlon) {
    const temperature = [];
    const feelslike = [];
    const airhumidity = [];
    const wind = [];
    const weatherdescription = [];
    const rainperc = [];
    databylatlon.list.forEach((timeslot) => {
      temperature.push(timeslot.main.temp);
      feelslike.push(timeslot.main.feels_like);
      airhumidity.push(timeslot.main.humidity);
      wind.push(timeslot.wind.speed);
      weatherdescription.push(timeslot.weather[0].description);
      rainperc.push(timeslot.pop);
    });

    return {
      temperature, feelslike, airhumidity, wind, weatherdescription, rainperc,
    };
  }

  async function getAPIData(cityname) {
    try {
      const firstresponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=8c958c34c399d529ae6bb1e94b934485`, { mode: 'cors' });
      const databycityname = await firstresponse.json();
      const latlon = [databycityname[0].lat, databycityname[0].lon];
      const secondresponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latlon[0]}&lon=${latlon[1]}&appid=8c958c34c399d529ae6bb1e94b934485`);
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
