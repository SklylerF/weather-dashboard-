let key = 'e3734cbb56b89b904559b3338d8b8282';
let austinEl = document.getElementById("AustinBtn");
let chicagoEl = document.getElementById("ChicagoBtn");
let newYorkEl = document.getElementById("NewYorkBtn");
let orlandoEl = document.getElementById("OrlandoBtn");
let sanFranciscoEl = document.getElementById("SanFranciscoBtn");
let seatleEl = document.getElementById("SeattleBtn");
let denverEl = document.getElementById("DenverBtn");
let atlantaEl = document.getElementById("AtlantaBtn");
let inputEl = document.getElementById("input");
let searchEl = document.getElementById("search");
const today = moment().format('MM-DD-YY');




// austin function
function austinInput() {
    document.getElementById("input").innerHTML = `<p value="Austin" id="city">Austin</p>`;
}

// chicago function 
function chicagoInput() {
    document.getElementById("input").innerHTML = `<p id="city">Chicago</p>`;
}

// newYork function
function newYorkInput() {
    document.getElementById("input").innerHTML = `<p id="city">New York</p>`;
}

// orlando 
function orlandoInput() {
    document.getElementById("input").innerHTML = `<p id="city">Orlando</p>`;
}

// san francisco
function sanFranciscoInput() {
    document.getElementById("input").innerHTML = `<p id="city">San Francisco</p>`;
}

// seattle
function seattleInput() {
    document.getElementById("input").innerHTML = `<p id="city">Seattle</p>`;
}

// denver
function denverInput() {
    document.getElementById("input").innerHTML = `<p id="city">Denver</p>`;
}

// atlanta
function atlantaInput() {
    document.getElementById("input").innerHTML = `<p id="city">Atlanta</p>`;
}

function getApi() {
    let city = document.getElementById("input").textContent
    let todayUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "";
    let tomorrowUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + key + "";
    fetch(todayUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById("time").innerHTML = today

            // pulling data 
            // city
            document.getElementById('name').innerHTML = data.name
            // temp
            document.getElementById('temp').innerHTML = data.main.temp
            // wind
            document.getElementById('wind').innerHTML = data.wind.speed
            // humidity
            document.getElementById('humidity').innerHTML = data.main.humidity
            // uvindex
            // document.getElementById('uvindex').innerHTML = data
        });
    fetch(tomorrowUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // tomorrow
           
            document.getElementById("tomorrowTemp").innerHTML = data.list[1].main.temp
            document.getElementById("tomorrowHumidity").innerHTML = data.list[1].main.humidity
            document.getElementById("tomrrowWind").innerHTML = data.list[1].wind.speed
            // the next day 
           
            document.getElementById("tomorrowTemp2").innerHTML = data.list[2].main.temp
            document.getElementById("tomorrowHumidity2").innerHTML = data.list[2].main.humidity
            document.getElementById("tomrrowWind2").innerHTML = data.list[2].wind.speed
            // the day after
         
            document.getElementById("tomorrowTemp3").innerHTML = data.list[3].main.temp
            document.getElementById("tomorrowHumidity3").innerHTML = data.list[3].main.humidity
            document.getElementById("tomrrowWind3").innerHTML = data.list[3].wind.speed
            // the day after that 

            document.getElementById("tomorrowTemp4").innerHTML = data.list[4].main.temp
            document.getElementById("tomorrowHumidity4").innerHTML = data.list[4].main.humidity
            document.getElementById("tomrrowWind4").innerHTML = data.list[4].wind.speed
            // the day after that 

            document.getElementById("tomorrowTemp5").innerHTML = data.list[5].main.temp
            document.getElementById("tomorrowHumidity5").innerHTML = data.list[5].main.humidity
            document.getElementById("tomrrowWind5").innerHTML = data.list[5].wind.speed
            // the day after that 
        });
    // local storage
    localStorage.setItem('city', city)
    let searchHistory = localStorage.getItem('city')
    let searchSpot = document.getElementById('searchHistory')
    searchSpot.textContent = searchHistory
    console.log(searchHistory);


};

// event listeners
searchEl.addEventListener('click', getApi)
austinEl.addEventListener('click', austinInput)
chicagoEl.addEventListener('click', chicagoInput)
newYorkEl.addEventListener('click', newYorkInput)
orlandoEl.addEventListener('click', orlandoInput)
sanFranciscoEl.addEventListener('click', sanFranciscoInput)
seatleEl.addEventListener('click', seattleInput)
denverEl.addEventListener('click', denverInput)
atlantaEl.addEventListener('click', atlantaInput)




