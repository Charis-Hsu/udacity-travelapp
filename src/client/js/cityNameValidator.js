
function isValidCityName(cityName) {
  let urlRGEX = /^[a-zA-Z\s]{0,255}$/;
  if (urlRGEX.test(cityName)) {
    return true;
  } else {
    return false;
  }
}

function invalidCityName(textbox) {
    let urlRGEX = /^[a-zA-Z\s]{0,255}$/;

    if (textbox.value == '') {
        textbox.setCustomValidity('Required city name');
    }
    else if (!isValidCityName(textbox.value)){
        textbox.setCustomValidity('please enter a valid city name');
    }
    else {
        textbox.setCustomValidity('');
    }
    return true;
}

export{invalidCityName};
