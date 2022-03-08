var APIKey = "46161b42a7f28e8be0a54d1ce4a7253e";
var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city");
var cityContainerEl = document.querySelector("#city-container");
var citySearchTerm = document.querySelector("#city-search-term");


var displayWeather = function(city, searchTerm) {
   cityContainerEl.textContent = "";
   citySearchTerm.textContent = searchTerm; 
}


$(document).ready(function () {
    $("#search").on("click", function () {
        var city = $("#city").val().trim()
        getCityCoords(city);
    })
    var getCityCoords = function (cityTerm) {
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityTerm + "&appid=" + APIKey).then(function (response) {
            response.json().then(function (data) {
                displayWeather(data, city)
                var lat = data[0].lat
                var lon = data[0].lon
                getCityWeather(lat, lon);
            })
        });
    };

    var getCityWeather = function (lat, lon) {
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&units=imperial").then(function (response) {
            response.json().then(function (data) {
                console.log(data)

    // console.log(data.current.temp)
    // console.log(data.current.wind_speed)
    // console.log(data.current.humidity)
    // console.log(data.current.uvi)

            })

        })
    }
}
)

var formSubmitHandler = function (event) {
    event.preventDefault();
};


userFormEl.addEventListener("submit", formSubmitHandler);

var city = cityInputEl.value.trim();

// if (city) {
//     cityInputEl.value = "";
// } else[
//     alert("Please enter a valid city name")
// ]

