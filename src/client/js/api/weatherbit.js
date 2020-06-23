
async function getWeather(cityLat, cityLon){
  const weatherbiURL = "https://api.weatherbit.io/v2.0/forecast/daily";
  const weatherbitkey = process.env.WEATHERBITKEY;
  let weatherbitUrlWithKey = `${weatherbiURL}?key=${weatherbitkey}`;
  let completeURL = `${weatherbitUrlWithKey}&lat=${cityLat}&lon=${cityLon}`;

  const res = await fetch(completeURL);

  try {
    let result = [];

    const weatherData = await res.json();
    result[0]= weatherData.data[0].temp;
    result[1]= weatherData.data[1].temp;
    result[2]= weatherData.data[2].temp;
    return result;
  } catch (error) {
    console.log("getWeather error", error);
  }

}

export{getWeather}
