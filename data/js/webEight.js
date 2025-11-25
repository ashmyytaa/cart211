

"use strict";


var canvas;
let particles = [];
let centerX, centerY;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.style('z-index', '-1');
    background(175);

    centerX = width / 2;
    centerY = height / 2;
    noStroke();

}


function draw() {
    background(26, 19, 59);


    if (frameCount % 2 === 0) {
        let angle = random(TWO_PI);
        let radius = random(300, 500);
        particles.push({
            angle: angle,
            radius: radius,
            angularSpeed: random(0.05, 0.1),
            radialSpeed: random(0.5, 1),
            size: random(5, 12),
            alpha: 255
        });
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];

        // Spin
        p.angle += p.angularSpeed;
        // Move toward center
        p.radius -= p.radialSpeed;

        // Convert polar to Cartesian
        let x = centerX + cos(p.angle) * p.radius;
        let y = centerY + sin(p.angle) * p.radius;

        // Draw particle
        fill(217, 1, 102, p.alpha);
        ellipse(x, y, p.size);

        // Fade out
        p.alpha -= 2;

        // Remove if invisible or reached center
        if (p.alpha <= 0 || p.radius <= 0) {
            particles.splice(i, 1);
        }
    }

}
