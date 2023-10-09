function draw(){
    var canvas = document.getElementById("canvasElement");
    // This returns the HTML Object and store it in the variable canvasConxtext
    var canvasConxtext = canvas.getContext("2d"); 

    // Call the Instance and use it - pass the type argument or value
    drawLine(canvasConxtext, 50, 50, 200, 80);
    drawCircle(canvasConxtext, 125, 125, 50);
    drawBorder(canvasConxtext, 400, 400);
    drawRectangle(canvasConxtext,20, 20, 150, 150);
}

// Create and Structure the object and it transactional series of actions with the other program
// Set of instruction pass down to the computer system

function drawBorder(canvasConxtext, height, weight){
    canvasConxtext.save();
    canvasConxtext.rect(0, 0, height, weight);
    canvasConxtext.LineWidth = 10;
    canvasConxtext.strokeStyle = "black";
    canvasConxtext.stroke();    
    canvasConxtext.restore();
}

function drawRectangle(canvasConxtext, x, y, width, height){
    canvasConxtext.fillStyle = "blue";
    canvasConxtext.fillRect(x, y, width, height);
}

function drawLine(canvasConxtext, lineStartX, lineStartY, lineEndX, lineEndY)
{
    canvasConxtext.beginPath();
    canvasConxtext.MoveTo(lineStartX, lineStartY);
    canvasConxtext.LineTo(lineEndX, lineEndY);
    canvasConxtext.stroke();
    canvasConxtext.fill();
    canvasConxtext.closePath();
}

function drawCircle(canvasConxtext, centerX, centerY, radius){
    var startAngleInRadians = 0;
    var endAngleInRadians = 2 * Math.PI;
    canvasConxtext.beginPath();
    canvasConxtext.arc(centerX, centerY, radius, startAngleInRadians, endAngleInRadians);
    canvasConxtext.stroke();
    
}

function drawTriangle(canvasConxtext, startX, startY, length){
    canvasConxtext.fillStyle = "yellow";
    canvasConxtext.beginPath();
    canvasConxtext.moveTo(startX, startY);
    canvasConxtext.lineTo(startX + length, startY);
    canvasConxtext.LineTo(startX + (length / 2), startY + (length / 2));
    canvasConxtext.LineTo(startX, startY);
    canvasConxtext.stroke();
    canvasConxtext.fill();
    canvasConxtext.closePath();
}

function drawSemiCircle(canvasConxtext, x, y, r){
    canvasConxtext.fillStyle = "green";
    var start = 0;
    var stop =  Math.PI;
    canvasConxtext.beginPath();
    canvasConxtext.arc(x, y, r, start, stop);
    canvasConxtext.stroke();
    canvasConxtext.fill();
    canvasConxtext.closePath();
}

function drawText(canvasConxtext, text, x, y){
    canvasConxtext.fillStyle = "black";
    canvasConxtext.font = "45px sans-serif";
    canvasConxtext.fillText(text, x, y);
}