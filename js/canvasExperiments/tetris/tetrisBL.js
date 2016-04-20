/*************************************
 * Julio Del Valle - Costa Rica - 2015
 * HTML 5 Canvas TETRIS - Business Logic
 */

// Main Canvas App Wrapper Function
function tetrisBL(){

    // Create the Canvas Element
    var theCanvas = document.createElement("canvas");
    theCanvas.width = 600;
    theCanvas.height = 400;
    document.body.appendChild(theCanvas);
    document.body.style.margin = 0;

    // Apply basic styles to the Canvas Element
    theCanvas.style.border = 'solid 1px red';
    theCanvas.style.display = 'block';
    theCanvas.style.margin = '0 auto';

    var context = theCanvas.getContext("2d");

    function drawScreen() {
        // Here, create all graphics and animation code.
    }


    window.requestAnimFrame = (function(){
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    // Code originally developed by Paul Irish)
    (function animloop(){
        requestAnimFrame(animloop);
        drawScreen();
    })();
}

window.onload = tetrisBL;
