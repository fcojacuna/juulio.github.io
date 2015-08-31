/***
* Draws a dot, centered on x,y coordinates
*/
function drawDot(x,y,r,color,lineWidth) {
    context.beginPath();
    context.arc(x, y, r, 0, 2*Math.PI, false);
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.stroke();
}

/***
* Draws a line
*/
function drawLine(x1,y1,x2,y2) {
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}

/***
* Returns a random integer
*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }