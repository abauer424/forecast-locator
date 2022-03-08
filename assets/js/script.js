var APIKey = "46161b42a7f28e8be0a54d1ce4a7253e";
$(document).ready(function () {
    $("#search").on("click", function () {
        var city = $("#city").val().trim()
        console.log(city);
        getCityCoords(city);
    })
    var getCityCoords = function (cityTerm) {
        console.log(cityTerm)
        fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityTerm + "&appid=" + APIKey).then(function (response) {
            response.json().then(function (data) {
                console.log(data);
                var lat = data[0].lat
                var lon = data[0].lon
                getCityWeather(lat, lon);
            })
        });
        console.log("outside");
    };

    var getCityWeather = function (lat, lon) {
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&units=imperial").then(function (response) {
            response.json().then(function (data) {
                console.log(data);
            })

        })
    }
}
)






