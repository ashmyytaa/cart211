"use strict";

var canvas;
let columns; //number of columns
let rows; //number of rows
let grid = [];
let size = undefined; //size of my text that will be defined later
let space = 2; //space between my texts

function windowResized() { // this is too resize the canvas whenever the browser window gets resized/gets minimized
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight); //canvas size equals to the browser window's size
    canvas.position(0, 0); //delimits where the canvas starts (which is position 0,0)
    canvas.style("z-index", "-1"); //this is to put the javascript canvas in the background, behind all the html and css

    gridd(); //calls the function grid that creates the grid where the numbers will be placed. its in setup because it gets called only once unlike the draw() which gets called each frame
}


function draw() {
    background(0, 4, 53);

    binary(); //calls the function binary() which displays my numbers + the animation that comes with it
}


function gridd() { //function gridd() that sets up the rows and columns all throughout my canvas

    textSize(40); //defines my text size
    textAlign(CENTER, CENTER);

    size = textSize() + space; //which means each text will have a spacing of 2

    columns = ceil(width / size); //function ceil rounds number to its nearest whole number to find coloumn numbers
    rows = ceil(height / size); //fucntion ceil that rounds number to its nearest whole nummber to fund row numbers



    for (let y = 0; y < rows; y++) { //for the amount of rows on canvas
        grid[y] = []; //creates row & creates empty array for it

        for (let x = 0; x < columns; x++) { //for amount of coloums on canvas
            grid[y][x] = floor(random(2)); //gives random number between 0 and 2 and floor rounds that number to nearest whole value 
        }
    }


}

function binary() { //function binary() that displays my numbers in random ways 

    fill(255, 16, 240);


    for (let y = 0; y < rows; y++) { //to displau my numbers per row
        for (let x = 0; x < columns; x++) { //to display my numbers per colums

            if (random(1) < 0.05) { //checks if number is either 0 or 1
                grid[y][x] = 1 - grid[y][x]; //gives it 0 or 1
            }


            text(grid[y][x], (x * size) + size / 2, (y * size) + size / 2 //draws the number
            );
        }
    }


}
