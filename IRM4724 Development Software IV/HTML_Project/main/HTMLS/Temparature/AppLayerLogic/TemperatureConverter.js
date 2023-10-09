function setup() {
    document.getElementById("farenheit").onclick = function () { setUnit("F") };
    document.getElementById("celcius").onclick = function () { setUnit("C") };

}

function setUnit(units) {
    var label = document.getElementById("label");
    label.innerHTML = "&deg;" + units;
}

function convert() {
    var celciusBtn = document.getElementById("celcius");
    var temperature = document.getElementById("temperature");

    if (celciusBtn.checked) {
        converToCelcius(temperature.value);
    } else {
        converToFahrenheit(temperature.value);
    }

}

function converToCelcius(getTemperatueInFarrenheit) {
    var celciusTemp = (getTemperatueInFarrenheit - 32) * 5 / 9;
    document.getElementById("answer").innerHTML = getTemperatueInFarrenheit +
        "&deg; Fehrenheit converted to " + celciusTemp.toFixed(1) + "&deg; Celcius";
}

function converToFahrenheit(getTemperatueInCelcius) {
    var fahrenheitTemp = (5 / 9) * getTemperatueInCelcius * 9 / 5 + 32;
    document.getElementById('answer').innerHTML = getTemperatueInCelcius +
        "&deg; Celcius converted to " + fahrenheitTemp.toFixed(1) + "&deg; Fahrenheit";
}