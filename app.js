const api = {
  key: "058f448a0c7499b9cce3e874514c1fff",
  baseurl: "https://api.openweathermap.org/data/2.5/",
};
const seacrhBox = document.querySelector(".seacrh-box");
seacrhBox.addEventListener("keypress", setQuery);
function setQuery(e) {
  if (e.keyCode === 13) {
    getResults(seacrhBox.value);
    console.log(seacrhBox.value);
  }
}
function getResults(quary) {
  fetch(`${api.baseurl}weather?q=${quary}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}
function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector(".location, .city");
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".location, .date");
  date.innerHTML = dateBuilder(now);

  let temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weatherEl = document.querySelector(".weather");
  weatherEl.innerHTML = weather.weather[0].main;

  let hilow = document.querySelector(".hi-low");
  hilow.innerHTML = `${Math.round(weather.main.temp_main)}°c /
 ${Math.round(weather.main.temp_max)}°c`;
}
function dateBuilder(s) {
  let months = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentyabr",
    "oktyabr",
    "noyabr",
    "dekabr",
  ];
  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesdayday",
    "thursday",
    "friday",
    "saturday",
  ];
  let day = days[s.getDay()];
  let date = s.getDate();
  let month = months[s.getMonth()];
  let year = s.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}