
async function postData(url = '', data = {}){
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    body: JSON.stringify({
      depCity: data.fromCityName,
      arrCity: data.toCityName,
      depDate: data.depDate,
      weather: data.weather,
      weather: data.weather,
      hightemp: data.hightemp,
      mintemp: data.mintemp,
      weatherDescription: data.weatherDescription,
      image: data.image
    })
  })
  try {
    const userData = await res.json();
    return userData;
  } catch (error) {
    console.log("postData error", error);
  }
}

export{postData}
