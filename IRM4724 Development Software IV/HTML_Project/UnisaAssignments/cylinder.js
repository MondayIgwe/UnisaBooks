//Define the function "drawCylinder()"

function drawCylinder() {

    /*The method getElementById() draw a cylinder using the element canvas*/

    var canvas = document.getElementById('canvasid');

    /*Call the method getContext() using canvas element and store it into the variable "ctx"*/

    var ctx = canvas.getContext('2d');

    //Initialize the "X" and "Y" axis

    var centX = 0;

    var centY = -100;

    //Initialize the radious

    var r = 30;

    //Save the oval on the top of the cylider

    ctx.save();

    /*The method translate() maps the oval on the top of the cylinder using the canvas element*/

    ctx.translate(canvas.width / 2, canvas.height / 2);

    //The method scale() give size to the oval

    ctx.scale(6, 1);

    //The method beginPath() starts to draw the oval

    ctx.beginPath();

    /*The method arc() draw a arc to draw an oval on the top of the cylinder by passing the parameters*/

    ctx.arc(centX, centY, r, 0, 2 * Math.PI, false);

    /*The method restore() return all the previously saved path of the oval*/

    ctx.restore();

    /*The fillStyle property apply yellowgreen color to the oval on the top of the cylinder using the method fill()*/

    ctx.fillStyle = 'YellowGreen';

    ctx.fill();

    // The lineWidth property give width to the oval

    ctx.lineWidth = 7;

    //The strokeStyle property give color to the oval line

    ctx.strokeStyle = 'GainsBoro';

    /*The method stroke() draw the actual path of the oval on the top of the cylinder*/

    ctx.stroke();

    // Save the oval in the bottom of the cylinder

    ctx.save();

    /*The method translate() maps the oval in the bottom of the cylinder using the canvas element*/

    ctx.translate(canvas.width / 2, canvas.height / 2);

    //The method scale() give size to the oval

    ctx.scale(6, 1);

    //The method beginPath() starts to draw the oval

    ctx.beginPath();

    /*The method arc() draw an arc to draw an oval in the bottom of the cylinder by passing the parameters*/

    ctx.arc(centX, 100, r, 0, 2 * Math.PI, false);

    /*The method restore() return all the previously saved path of the oval*/

    ctx.restore();

    /*The fillStyle property apply mediumslateblue color to the oval in the bottom of the cylinder using the method fill()*/
    ctx.fillStyle = 'MediumSlateBlue';

    ctx.fill();

    // The lineWidth property give width to the oval

    ctx.lineWidth = 7;

    //The strokeStyle property give color to the oval line

    ctx.strokeStyle = 'GainsBoro';

    /*The method stroke() draw the actual path of the oval in the bottom of the cylinder*/

    ctx.stroke();

    //save the lines of the cylinder

    ctx.save();

    /*The method beginPath() starts to draw the lines of the cylinder*/

    ctx.beginPath();

    /*The lineWidth property give width to the lines of the cylinder*/

    ctx.lineWidth = 3;

    /*The strokeStyle property give color to the lines of the cylinder*/

    ctx.strokeStyle = 'Black';

    /*The method moveTo() move the point into the left side of the cylinder*/

    ctx.moveTo(105, 150);

    /*After moving, the method lineTo() draw the line in that mentioned position*/

    ctx.lineTo(105, 352);

    /*The method moveTo() move the point into the right side of the cylinder*/

    ctx.moveTo(474, 150);

    /*After moving, the method lineTo() draw the line in that mentioned position*/

    ctx.lineTo(474, 352);

    /*The method stroke() draw the actual line in that mentioned position*/

    ctx.stroke();

    /*The method translate() maps the arc on the top of the cylinder using the canvas element*/

    ctx.translate(canvas.width / 2, canvas.height / 2);

    //The method scale() give size to the arc

    ctx.scale(6, 1);

    //The method beginPath() starts to draw the arc

    ctx.beginPath();

    /*The method arc() draw a arc on the top of the cylinder by passing the parameters*/

    ctx.arc(centX, centY + 2, r + 0.8, 0, Math.PI, false);

    /*The method restore() return all the previously saved path of the arc on the top of the cylinder*/

    ctx.restore();

    /*The lineWidth property give width to the arc on the top of the cylinder*/

    ctx.lineWidth = 4;

    /*The strokeStyle property give color to the arc on the top of the cylinder*/

    ctx.strokeStyle = 'Black';

    /*The method stroke() draw the actual arc on the top of the cylinder*/

    ctx.stroke();

    //save the arcs of the cylinder

    ctx.save();

    /*The method translate() maps the arc in the bottom of the cylinder using the canvas element*/

    ctx.translate(canvas.width / 2, canvas.height / 2);

    //The method scale() give size to the arc

    ctx.scale(6, 1);

    //The method beginPath() starts to draw the arc

    ctx.beginPath();

    /*The method arc() draw an arc in the bottom of the cylinder by passing the parameters*/

    ctx.arc(centX, 100 + 2, r + 0.8, 0, Math.PI, false);

    /*The method restore() return all the previously saved path of the arc in the bottom of the cylinder*/
ctx.restore();

/*The lineWidth property give width to the arc in the bottom of the cylinder*/

ctx.lineWidth = 4;

/*The strokeStyle property give color to the arc in the bottom of the cylinder*/

ctx.strokeStyle = 'Black';

/*The method stroke() draw the actual arc in the bottom of the cylinder*/

ctx.stroke();

}