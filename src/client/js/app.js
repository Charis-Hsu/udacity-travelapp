import { getCityInfo} from "./api/geonames.js"
import { getWeather} from "./api/weatherbit.js"
import { getImage} from "./api/pixabay.js"
import { getCountryInfo} from "./api/country.js"

import { updateUI} from "./updateUI.js"
import { postData} from "./postData.js"

document.querySelector('input[name="date"]').valueAsDate = new Date();

const travelButton = document.querySelector(".map__link");

const addTripEvList = travelButton.addEventListener('click', function (e) {
  const planner = document.querySelector("#planner");
  e.preventDefault();
  planner.scrollIntoView({ behavior: 'smooth' });
})


const printButton = document.querySelector("#save");
printButton.addEventListener('click', function (e) {
  window.print();
  location.reload();
});


export function addTrip(e) {
  e.preventDefault();
  const fromCityName = document.querySelector('input[name="from"]').value;
  const toCityName = document.querySelector('input[name="to"]').value;
  const depDate = document.querySelector('input[name="date"]').value;

  getCityInfo(toCityName)
    .then(async (cityData) => {
      const cityLat = cityData.geonames[0].lat;
      const cityLong = cityData.geonames[0].lng;
      const countryName = cityData.geonames[0].countryName;
      const currency = await getCountryInfo(countryName);
      const weatherData = await getWeather(cityLat, cityLong);
      const image = await getImage(toCityName);
      return {weatherData: weatherData, image: image, currency: currency};
    })
    .then((msg) => {
      const postDataURL = `${process.env.BACKEND_URL}/add`;
      const userData = postData(postDataURL,
      { fromCityName, toCityName, depDate,
        weather: `1st Day: ${msg.weatherData[0]}&#176 C, 2nd Day:${msg.weatherData[1]}&#176 C, 3rd Day: ${msg.weatherData[2]}&#176 C `,
        image: msg.image, currency: msg.currency});
      return userData;
    })

    .then((userData) => {
      updateUI(userData);
    })
}



export { addTripEvList }
