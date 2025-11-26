
"use strict";


var canvas;
let progress = 0;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // this is too resize the canvas whenever the browser window gets resized/gets minimized
}




function setup() {
    canvas = createCanvas(windowWidth, windowHeight); //canvas size equals to the browser window's size
    canvas.position(0, 0) //delimits where the canvas starts (which is position 0,0)
    canvas.style('z-index', '-1'); //this is to put the javascript canvas in the background, behind all the html and css
    background(175);



}


function draw() {
    background(26, 19, 59);

    travel(); //calls the travel function where the functionalitie of our animation is in
}


function travel() {
    let beginx = 0;  // starts at left end        
    let beginy = height / 2; //y-position is at the middle of the canvas when it starts
    let closex = width; // ends at the right end
    let closey = height / 2; // y-position is at the middle of canvas when it ends

    let dash = 30; //size/width of our dash wish is 30
    let gap = 20; // gap between each dash lines
    let speed = 5; //speed at which frequency our dashes move 
    let distance = 0; //initialize our distance


    let dashLine = dist(beginx, beginy, closex, closey); //calculates the distance from left to right of our points



    while (distance < progress) { //while loop that checks whether the distance is less than the progress, to then execute its tasks

        let t1 = distance / dashLine;
        let t2 = min((distance + dash) / dashLine, 1);

        let x1 = lerp(beginx, closex, t1);  //using lerp() to create my movements
        let y1 = lerp(beginy, closey, t1);
        let x2 = lerp(beginx, closex, t2);
        let y2 = lerp(beginy, closey, t2);


        //draws our line
        push();
        noFill();
        stroke(255, 16, 240);
        strokeWeight(3);
        line(x1, y1, x2, y2);
        pop();

        distance += dash + gap; //adds the dash + its gap to the distance variable to keep track of the overal length
    }


    progress += speed; //adds the speed to the progress varaible to see how much speed it has gone through


    if (progress > dashLine) { //this resets the progress to zero if it has gone over the horizontal diatance of the line (from left to right of the canvas)
        progress = 0;
    }
}