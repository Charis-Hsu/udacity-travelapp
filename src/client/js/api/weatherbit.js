
async function getWeather(cityLat, cityLon){
  const weatherbiURL = "https://api.weatherbit.io/v2.0/forecast/daily";
  const weatherbitkey = process.env.WEATHERBITKEY;
  let weatherbitUrlWithKey = `${weatherbiURL}?key=${weatherbitkey}`;
  let completeURL = `${weatherbitUrlWithKey}&lat=${cityLat}&lon=${cityLon}`;

  const res = await fetch(completeURL);

  try {
    const weatherData = await res.json();
    return weatherData;
  } catch (error) {
    console.log("getWeather error", error);
  }

}

export{getWeather}
