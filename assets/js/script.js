var getCityWeather = function (data) {
var response = fetch("api.openweathermap.org/data/2.5/onecall?lat=30.489772&lon=-99.771335").then(function(response){
    response.json().then(function(data){
        console.log(data);
    })
    console.log(response);
});
console.log("outside");
};

getCityWeather();

// IP address: 146.185.182.33


