const dailyWeather = (() => {
  function getSpecificData(databylatlon) {
    const temperature = [];
    const feelslike = [];
    const airhumidity = [];
    const wind = [];
    const weatherdescription = [];
    databylatlon.list.forEach((timeslot) => {
      temperature.push(timeslot.main.temp);
      feelslike.push(timeslot.main.feels_like);
      airhumidity.push(timeslot.main.humidity);
      wind.push(timeslot.wind.speed);
      weatherdescription.push(timeslot.weather[0].description);
    });
    const firstday = {
      firstdaytemp: [0, 1, 2, 3, 4, 5, 6, 7].map((x) => temperature[x]),
      firstdayfeelslike: [0, 1, 2, 3, 4, 5, 6, 7].map((x) => feelslike[x]),
      firstdayhumidity: [0, 1, 2, 3, 4, 5, 6, 7].map((x) => airhumidity[x]),
      firstdaywind: [0, 1, 2, 3, 4, 5, 6, 7].map((x) => wind[x]),
      firstdayweather: [0, 1, 2, 3, 4, 5, 6, 7].map((x) => weatherdescription[x]),
    };
    const secondday = {
      seconddaytemp: [8, 9, 10, 11, 12, 13, 14, 15].map((x) => temperature[x]),
      seconddayfeelslike: [8, 9, 10, 11, 12, 13, 14, 15].map((x) => feelslike[x]),
      seconddayhumidity: [8, 9, 10, 11, 12, 13, 14, 15].map((x) => airhumidity[x]),
      seconddaywind: [8, 9, 10, 11, 12, 13, 14, 15].map((x) => wind[x]),
      seconddayweather: [8, 9, 10, 11, 12, 13, 14, 15].map((x) => weatherdescription[x]),
    };
    const thirdday = {
      thirddaytemp: [16, 17, 18, 19, 20, 21, 22, 23].map((x) => temperature[x]),
      thirddayfeelslike: [16, 17, 18, 19, 20, 21, 22, 23].map((x) => feelslike[x]),
      thirddayhumidity: [16, 17, 18, 19, 20, 21, 22, 23].map((x) => airhumidity[x]),
      thirddaywind: [16, 17, 18, 19, 20, 21, 22, 23].map((x) => wind[x]),
      thirddayweather: [16, 17, 18, 19, 20, 21, 22, 23].map((x) => weatherdescription[x]),
    };
    const fourthday = {
      fourthdaytemp: [24, 25, 26, 27, 28, 29, 30, 31].map((x) => temperature[x]),
      fourthdayfeelslike: [24, 25, 26, 27, 28, 29, 30, 31].map((x) => feelslike[x]),
      fourthdayhumidity: [24, 25, 26, 27, 28, 29, 30, 31].map((x) => airhumidity[x]),
      fourthdaywind: [24, 25, 26, 27, 28, 29, 30, 31].map((x) => wind[x]),
      fourthdayweather: [24, 25, 26, 27, 28, 29, 30, 31].map((x) => weatherdescription[x]),
    };
    const fifthday = {
      fifthdaytemp: [32, 33, 34, 35, 36, 37, 38, 39].map((x) => temperature[x]),
      fifthdayfeelslike: [32, 33, 34, 35, 36, 37, 38, 39].map((x) => feelslike[x]),
      fifthdayhumidity: [32, 33, 34, 35, 36, 37, 38, 39].map((x) => airhumidity[x]),
      fifthdaywind: [32, 33, 34, 35, 36, 37, 38, 39].map((x) => wind[x]),
      fifthdayweather: [32, 33, 34, 35, 36, 37, 38, 39].map((x) => weatherdescription[x]),
    };

    return {
      firstday, secondday, thirdday, fourthday, fifthday,
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
