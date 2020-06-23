// import {countDownTimer} from "./countDownTimer.js";

async function updateUI (userData){
  const result = document.querySelector("#result");
  try {
    document.querySelector("#city").innerHTML = `Destination: ${userData.arrCity}`;
    document.querySelector("#date").innerHTML = `Departure Date: ${userData.depDate}`;
    document.querySelector("#temp").innerHTML = `Temperature: ${userData.weather}`;
    document.querySelector("#fromPixabay").setAttribute('src', userData.image);
    countDownTimer(userData.depDate);
  }
  catch (error) {
    console.log("updateUI error", error);
  }
}


function countDownTimer(endDate) {
  var countDownDate = new Date(endDate).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for countDownTimer, hours, minutes and seconds
    var countDownTimer = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.querySelector("#countDownTimer").innerHTML = ` Count Down Timer: ${countDownTimer}d ${hours}h ${minutes}m ${seconds}s `;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.querySelector("#countDownTimer").innerHTML = "EXPIRED";
    }
  }, 1000);
}

export {updateUI}
