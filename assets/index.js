var btnEl = document.getElementById("btn")
let key = 'e3734cbb56b89b904559b3338d8b8282';
let city = 'London'
let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key+"";

    fetch(url)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)});
