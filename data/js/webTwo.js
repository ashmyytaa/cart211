"use strict";

var canvas;
let cols, rows;
let grid = [];
let cellSize = 40; // text size = 40
let padding = 2;   // small space so text fits

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    setupGrid();
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");

    setupGrid();
}

function setupGrid() {
    textSize(40);
    textAlign(CENTER, CENTER);

    // cell size must be larger than text size to avoid overlap
    cellSize = textSize() + padding;

    // NOW rows/cols fill 100% of the canvas — no empty space
    cols = ceil(width / cellSize);
    rows = ceil(height / cellSize);

    grid = [];
    for (let y = 0; y < rows; y++) {
        grid[y] = [];
        for (let x = 0; x < cols; x++) {
            grid[y][x] = floor(random(2));
        }
    }
}

function draw() {
    background(0, 4, 53);
    updateGrid();
}

function updateGrid() {
    fill(217, 1, 102);

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {

            if (random(1) < 0.05) {
                grid[y][x] = 1 - grid[y][x];
            }

            // draws text EVERYWHERE with no margins
            text(
                grid[y][x],
                x * cellSize + cellSize / 2,
                y * cellSize + cellSize / 2
            );
        }
    }
}
