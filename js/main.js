//Global Variabes
//variable for loading the first image
let firstbackimg;
//adding gameState
let gameState;
//variable for loading create room image
let createimg;
//variable for loading the background image of create and join room
let main;
//variable for loading join room image
let joinimg;
function setup() {
    createCanvas(windowWidth, windowHeight);
    gameState = "select";
}

function preload() {
    //loading the first welcome image
    firstbackimg = loadImage("images/first.png");
    //loading the create room image
    createimg=loadImage("images/create.png");
    //background where create and join room is there
    main=loadImage("images/backdrop.png");
    //laoding the join room image
    joinimg=loadImage("images/join.png");
}

function draw() {
    background(255);
   //ig gameState is select then
    if (gameState === "select") {
        push();
        imageMode(CENTER);
         //IMAGE FOR THE FIRST WELOCOME SCREEN
        image(firstbackimg, width / 2, height / 2, width - width / 2, height - height / 2);
        pop();
        push();
        textFont(BOLD);
        textAlign(CENTER);
        textSize(40);
        //first screen text tap for mobile ond press ok for tv
        text("Tap to Begin for Mobile", width / 2, height - height / 5);
        text("Press Center Button for TV", width / 2, height / 5);
        pop();
    }
    if(gameState==="android"){
        push();
        imageMode(CENTER);
        image(main,width/2,height/2,width,height);
        image(createimg,width/4,height/2,width/3,height/2);
        image(joinimg,width-width/4,height/2,width/3,height/2);
        pop();
    }
}

function keyPressed() {
    //RELOADING THE PAGE ON ENTER FOR MY EASE
    if (keyCode === 13) {
        location.reload();
    }
    //making gameState tv after keypress
    //remember to play sound when player chooses his device as a tv
    //change keyCode as per the tv
    if (keyCode === 32 && gameState === "select") {
        gameState = "tv";
    }
}

function mousePressed() {
    if(gameState==="select"){
        gameState="android";
    }
}