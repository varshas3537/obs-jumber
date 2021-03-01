var canvas;

var player,playerimg, ob1, ob2, ob3;
var form, game;

function preload(){
    playerimg = loadImage("Player.PNG");
}

function setup(){
    canvas = createCanvas(1000,1000);

    player = new Player(10,10,10,10);

    ob1 = new Obs(5,5,50,50); 
    ob1.velocityX = 10;
    ob1.velocityY = 10;
   
    ob2 = new Obs(18,100,50,50);
    ob2.velocityX = 20;
    ob2.velocityY = 20;
    //ob2.setColor = "blue";

    ob3 = new Obs(20,20,50,50);
    ob3.velocityX = 15;
    ob3.velocityY = 15;
   

    ob4 = new Obs(300,30,50,50);
    ob4.velocityX = 5;
    ob4.velocityY = 30;
   

    ob5 = new Obs(400,40,50,50);
    ob5.velocityX = 15;
    ob5.velocityY = 10;
   
}

function draw(){
    background("black");
    
    if(keyDown(UP_ARROW)){
        player.y = 10;
    }

    if(keyDown(DOWN_ARROW)){
        player.y = -10;
    }

    if(keyDown(LEFT_ARROW)){
        player.x = -10;
    }

    if(keyDown(RIGHT_ARROW)){
        player.x = 10;
    }

    
    
    
    if(player.x > 95 && player.y > 5){
        text(50,50, "You Won!!!");
       // textsize(12);
    }

    if(player.y < 5 && player.x < 95){
        text(50,50, "You lost, try again. Press R");
        //textsize(12);
        player.x = 10;
        player.y = 10;
    }

    if(keyDown("R")){
        player.x = 10;
        player.y = 10;
    }
    player.display();
    ob1.display();
    ob2.display();
    ob3.display();
    ob4.display();
    ob5.display();
}



