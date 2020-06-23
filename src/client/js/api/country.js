async function getCountryInfo(countryName){
 const countryUrl = "https://restcountries.eu/rest/v2/name/";

 const requestUrl = `${countryUrl}${countryName}`;

 const res = await fetch(requestUrl);
 try {
   const data = await res.json();
   return data[0].currencies[0].name;
 } catch (error) {
   console.log("getCountryInfo error", error);
 }
}

export{getCountryInfo}
