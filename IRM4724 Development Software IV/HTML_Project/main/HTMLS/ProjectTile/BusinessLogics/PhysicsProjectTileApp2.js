// The HOW, implementation - Business logic application layer
function initialize() {
    var angleInput = document.getElementById("angle");
    var velocityInput = document.getElementById("velocity");

    angleInput.addEventListener("blur", validateAngle());
    velocityInput.addEventListener("blur", validateVelocity());

}

function validateAngle() {
    var angleInput = document.getElementById("angle");

    if (angleInput.value < 1 || angleInput.value > 90) {
        alert("Angle value must be between 1 and 90");
        angleInput.value = "";
    }
}

function validateVelocity() {
    var velocityInput = document.getElementById("velocity");
    if (velocityInput.value < 1) {
        alert("Velocity value must be greater a than 0");
        velocityInput.value = "";
    } else if (velocityInput.value > 999) {
        alert("Too fast! the velocity cannot exceed [...]");
        velocityInput.value = "";
    }
}

function update() {
    var angle = document.getElementById("angle").value;
    var velocity = document.getElementById("velocity").value;
    calculate(angle, velocity);
}

function calculate(angle, velocity) {
    // What stetement actions do we need?
    // How do we implement it ?
    var horizontalVelocity = velocity * Math.cos((angle * Math.PI) / 180);
    var verticalVelocity = velocity * Math.sin((angle * Math.PI) / 180);
    var tMaxHeight = verticalVelocity / 9.81;
    var tLanding = 2 * tMaxWeight;

     document.getElementById("height").innerHTML = calcHeight(horizontalVelocity, tMaxHeight);
     document.getElementById("distance").innerHTML = calcHeight(verticalVelocity, tLanding);

    // Array to store memory address data
    var heightArray = [];
    var distanceArray = [];
    var timeArray = [];

    var interval = 0.1;

    if (tLanding < 2) {
        interval = 0.1;
    } else if (tLanding < 20) {
        interval = 1;
    } else {
        interval = 10;
    }

    for (var time = 0; time <= (tLanding + interval); time += interval) {
        timeArray.push(time);

        var height = calcHeight(verticalVelocity, time);
        if (height < 0) {
            height = 0;
        }
        heightArray.push(height);
        var distance = calcDistance(horizontalVelocity, time);

        if (distance < 0)
            distance = 0;

        distanceArray.push(distance);

        updateTable(timeArray, distanceArray, heightArray);
    }
}

function calcHeight(verticalVelocity, time) {
    return (verticalVelocity * time) - (0.5 * 9.81 * time * time);
}

function calcDistance(horizontalVelocity, time) {
    return distance = horizontalVelocity * time;
}

function updateTable(timeArray, distanceArray, heightArray) {
    var dataTable = document.getElementById("data");
    dataTable.innerHTML = '';

    var headers = ["Time", "Distance", "Height"];

    var colheader = dataTable.insertRow(0);
    var timeCell = colheader.insertCell(0);
    var distanceCell = colheader.insertCell(1);
    var heightCell = colheader.insertCell(2);

    timeCell.innerHTML = headers[0];
    distanceCell.innerHTML = headers[1];
    heightCell.innerHTML = headers[2];

    for (var i = 0; i < timeArray.length; i++) {
        var row = dataTable.insertRow(-1);
        var timeCell = row.insertCell(0);
        var distanceCell = row.insertCell(1);
        var heightCell = row.insertCell(2);

        timeCell.innerHTML = timeArray[i];
        distanceCell.innerHTML = distanceArray[i];
        heightCell.innerHTML = heightArray[i];
    }

}
