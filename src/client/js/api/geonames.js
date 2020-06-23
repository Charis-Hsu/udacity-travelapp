
async function getCityInfo(city){
    const geoNamesURL = 'http://api.geonames.org/searchJSON?q=';
    const geoNamesUsername = process.env.USERNAME;

    var completeURL = `${geoNamesURL}${city}&username=${geoNamesUsername}`;
    const res = await fetch(completeURL);
  try {
    const cityData = await res.json();
    return cityData;
  } catch (error) {
    console.log("getCityInfo error", error);
  }
};

export{getCityInfo}
