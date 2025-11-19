
"use strict";


var canvas;

let terms = `This Agreement governs your use of Apple’s services (“Services”) through which you can buy, get, license, rent or subscribe to content, Apps (as defined below), and other in-app services (collectively, “Content”). Content may be offered
             through the Services by Apple or a third party. Examples of Services include, where available, App Store, Subscriptions (as defined below), Apple Arcade,Apple Books, Apple Fitness+, Apple Games, Game Center,Apple Music,
             Apple News, Apple One, Apple Podcasts, Apple Sports, Apple TV, iTunes, and Shazam. Our Services are available for your use in your country or territory of residence (“Home Country”). By creating an account for use of the
            Services in a particular country or territory you are specifying it as you Home Country. To use our Services, you need compatible hardware, software (latest version recommended and sometimes required) and Internet access
            (fees may apply). Our Services’ performance may be affected by these factors.You can acquire Content on our Services for free or for a charge, either of which is referred to as a “Transaction.” Each Transaction is an
            electronic contract between you and Apple, and/or you and the entity providing the Content on our Services. However, if you are a customer of Apple Distribution International Ltd. or Apple Services Pte. Ltd., then that
            entity is the merchant of record for some Content you acquire from Apple Books, Apple Podcasts, or App Store as displayed on the product page and/or during the acquisition process for the relevant Service. In such case,
            you acquire the Content from Apple Distribution International Ltd. or Apple Services Pte. Ltd., as applicable, which is licensed by the Content provider (e.g., App Provider (as defined below), book publisher, etc.).
            When you make your first Transaction, we will ask you to choose how frequently we should ask for your password for future Transactions. On applicable Apple hardware, if you enable Touch ID for Transactions, we will
            ask you to authenticate all Transactions with your fingerprint, and if you enable Face ID for Transactions, we will ask you to authenticate all Transactions using facial recognition. Manage your password settings at
            any time by following these instructions`;


let lines;
let y;


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.style('z-index', '-1');
    background(175);


    lines = terms.split('\n');
    y = height; // Start from bottom

}


function draw() {
    background(26, 19, 59);
    for (let i = 0; i < lines.length; i++) {
        text(lines[i], 10, y + i * 20); // 20px per line
    }

    y -= 2; // Speed of scroll (increase for faster)

    // Reset once text scrolls out of view
    if (y < -lines.length * 20) {
        y = height;
    }


}
