/***
 * Julio Del Valle - Computer Graphics - Costa Rica - 2015
 * juulio.github.io
 */
var homePage = homePage || {};

(function (context) {

    /***
     * Global Variables
     */
    vars = {


    };

    /***
     * Init all required functions
     */
    function init () {
        var isHome = document.getElementsByClassName('home');
        if(isHome.length>0) {
            /********************************************************
             Initial code to create and set up the Canvas Element. */
            canvasElements.createCanvasElement('home');
            var canvas = canvasElements.canvas;


            /***************************************************
             Recursive function that draws The Clinging Plant */
            function recursiveDrawClingingPlant(x, y, plantColumns, plantRows, spaceBetweenRows, spaceBetweenColumns){
                var dotHorizontalPos = 0,
                    dotVerticalPos = spaceBetweenRows,
                    leftMostPoint = x-(((plantColumns-1)*spaceBetweenColumns)/2);

                dotHorizontalPos = leftMostPoint;
                y+=spaceBetweenRows;

                for(var j=0; j<plantColumns; j++){
                    canvasElements.drawLeaf(dotHorizontalPos, y, canvasElements.getRandomInt(50, 130), 3, 0.6);
                    dotHorizontalPos += spaceBetweenColumns;
                }

                spaceBetweenColumns+=0.8;
                plantRows--;

                if(plantRows>0) {
                    recursiveDrawClingingPlant(x, y, plantColumns, plantRows, spaceBetweenRows, spaceBetweenColumns, false);
                }
            }

            recursiveDrawClingingPlant(canvas.width/2, 20, 9, 18, 22, 6);
        }
    }

    init();

}(homePage));
