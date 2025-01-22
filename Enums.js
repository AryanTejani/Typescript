"use strict";
var Weatherconditions;
(function (Weatherconditions) {
    Weatherconditions["Sunny"] = "sunny";
    Weatherconditions["Cloudy"] = "cloudy";
    Weatherconditions["Rainy"] = "rainy";
})(Weatherconditions || (Weatherconditions = {}));
console.log(`Todays weather is ${Weatherconditions.Sunny}`);
