const API_KEY = "your API KEY"
function onGeoOk(position){

  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}7&lon=${lng}&appid=${API_KEY}`
  console.log(url);
  fetch(url)
  .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp - 273.15)}`;
    });
}

function onGeoError(){
    alert("Can't find your location!");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);