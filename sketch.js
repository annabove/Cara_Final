let mic;

function setup() {
    
    //createCanvas(400, 400);
    createCanvas(windowWidth, windowHeight);
    noStroke();

    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
        background(255);
    
    micLevel = mic.getLevel();
    
    //console.log(micLevel);
    
    mov = map(micLevel, 0, 1, 10, 500);
    
    let boca_w = width / 2.5;
    
    noStroke();
    
    
    


   
//    //fons boca
//    fill("#CC3300");
//    rect(0, 100, boca_w, 200+mov);
//    fill("#FFFFFF");
//    rect(0, 200, boca_w, 200+mov);
//    fill("#CC3300");
//    rect(0, 300, boca_w, 200+mov);
//    
    
    
//    //PIGA
//    fill("#CC33CC");
//    //ellipse(width * 0.30, -100, 50, 50, height / 3.5-mov*0.5, 20);
//     ellipse(width/3, 90, 50, 50, 3.5-mov/5, 20);


    
    
    if (width < 1200){
    //PELO
    fill("#000000");
    ellipse(width/2, height/2, width, height);
    
    //CARA BLANCA
    fill("#ffffff");
    ellipse(width/2, height/1.7, width/1.6, height/1.2);
    
   //FLEQUILLO
    fill("#000000");
    ellipse(width/2, height/3.9, width/ 1.5, height/ 4);
   }
    
    
    
    if(width >= 1200){
        //PELO
    fill("#660000");
    ellipse(width/2, height/2, width, height);
    
   //CARA BLANCA
    fill("#ffffff");
    ellipse(width/2, height/1.7, width/1.6, height/1.2);
    
    //FLEQUILLO
    fill("#660000");
    ellipse(width/2, height/3.9, width/ 1.5, height/ 4);
    }
    
    
    
    
    
    
    
    if (width < 1200){
    //ULL DRET 7B6A58
    fill("#CCFFCC");
    ellipse(width/1.49-mov*0.5, height/2, width/ 10, width/ 10);
    fill("#000000");
    ellipse(width/1.49-mov*0.5, height/2, width/ 20, width/ 20);
    fill("#000000");
    arc(width/1.5, height/1.99-mov*0.5, width/7, width/8, PI, 0);
        
    //ULL ESQUERRE
    fill("#CCFFCC");
    ellipse(width/2.96-mov*0.5, height/2, width/ 10, width/ 10);
    fill("#000000");
    ellipse(width/2.96-mov*0.5, height/2, width/ 20, width/ 20);
    fill("#000000");
    arc(width/3, height/1.99-mov*0.5, width/7, width/8, PI, 0);
    
    //CELLES
    fill("#000000");
    rect(width/4, height/2.4, width/6, height/90);
     fill("#000000");
    rect(width/1.7, height/2.4, width/6, height/90);
    }
    
    
    
    if(width >= 1200){
    
    //ULL DRET 7B6A58
    fill("#99CCCC");
    ellipse(width/1.49-mov*0.5, height/1.9, width/ 15, width/ 15);
    
    fill("#000000");
    ellipse(width/1.49-mov*0.5, height/1.9, width/ 25, width/ 25);
    fill("#000000");
    arc(width/1.5, height/1.9-mov*0.5, width/7, width/9, PI, 0);
        
    //ULL ESQUERRE
    fill("#99CCCC");
    ellipse(width/2.96-mov*0.5, height/1.9, width/ 15, width/ 15);
    
    fill("#000000");
    ellipse(width/2.96-mov*0.5, height/1.9, width/ 25, width/ 25);
    fill("#000000");
    arc(width/3, height/1.9-mov*0.5, width/7, width/9, PI, 0);
    
    //CELLES
    fill("#000000");
    rect(width/4, height/1.87-mov*2.2, width/6, height/90);
     fill("#000000");
    rect(width/1.7, height/1.87-mov*2.2, width/6, height/90);
    }
    
    
    
    
        
        
        
    if (width < 1200){
        //ORELLAESQUERRE
    fill("#66CC99");
    rect(width/6.4, height/1.9, width/55, height/5);
    fill("#ffffff");
    ellipse(width/5.8, height/1.75, width/ 10, width/ 5);
    fill("#CCFFCC");
    ellipse(width/6.8, height/1.4-mov*0.5, width/ 5.5, width/ 5.5);
    
    
    //ORELLADRETA
    fill("#66CC99");
    rect(width/1.21, height/1.82, width/55, height/5);
    
    fill("#ffffff");
    ellipse(width/1.21, height/1.75, width/ 10, width/ 5);
    
    fill("#CCFFCC");
    ellipse(width/1.17, height/1.4-mov*0.5, width/ 5.5, width/5.5);
     }
    
    
 
    if(width >= 1200){    
   //ORELLAESQUERRE
    fill("#66CC99");
    rect(width/6.4, height/1.9, width/55, height/5);
    fill("#ffffff");
    ellipse(width/5.8, height/1.75, width/ 10, width/ 5);
    fill("#669999");
    ellipse(width/6, height/1.3-mov*0.5, width/ 29, width/ 5.5);
    
    
    //ORELLADRETA
    fill("#66CC99");
    rect(width/1.21, height/1.82, width/55, height/5);
    
    fill("#ffffff");
    ellipse(width/1.21, height/1.75, width/ 10, width/ 5);
    
    fill("#669999");
    ellipse(width/1.20, height/1.3-mov*0.5, width/ 29, width/5.5);
     }
    
    
    
    
     
    
    
    
    
    
    
    
    
    
    
   /* //LLAVIS
    noFill()
    stroke("#CD5C5C");
    strokeWeight(15);
    lineTo(width/30, height/50, width/5, width/90);
    
    noFill();
    stroke("#F08080");
   strokeWeight(15);
   arc(width * 0.5, height / 1.85, 60, 60+mov, radians(15), radians(155));*/
   
    
    

    //BOCA
    if (width < 1200){
        
    fill("#CD5C5C");
    arc(width/1.71, height/1.32-mov*0.5, width/6, width/7, PI, 0);
    fill("#CD5C5C");
    arc(width/2.39, height/1.32-mov*0.5, width/6, width/7, PI, 0);
    fill("#CD5C5C");
    arc(width/2, height/1.32+mov, width/3, width/6, 0,  PI);
      
    }
    
    if(width >= 1200){
    //dret    
    fill("#990000");
    arc(width/1.80, height/1.30-mov*0.5, width/9, width/10, PI, 0);
    //esquerre
    fill("#990000");
    arc(width/2.25, height/1.30-mov*0.5, width/9, width/10, PI, 0);
    
    fill("#990000");
    arc(width/2, height/1.32+mov, width/5, width/7, 0,  PI);
        
        
        
    }
    
    
    
    
    
    
    
     
   
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //    //llengua
//    fill("#FFA07A");
//    rect(0, 500, boca_w, 500, 10);
//
//    //dents
//    fill("#CD5C5C");
//    rect(0, 20, boca_w, 40, 10);
//
//    //barbeta
//    fill("#fdddca");
//    rect(0, 180, boca_w, 100)
//    pop();
//
//    //front
//    fill(204, 255, 204);
//    rect(0, 0, width, height / 1.8);
//
//    //cella
//    fill("#FA8072");
//    ellipse(width * 0.25, height / 3.5-mov*0.5, 20);
//     fill("#FA8072");
//    ellipse(width * 0.27, height / 3.5-mov*0.5, 20);
//    fill("#FA8072");
//    ellipse(width * 0.29, height / 3.5-mov*0.5, 20);
//    fill("#FA8072");
//    ellipse(width * 0.31, height / 3.5-mov*0.5, 20);
//    fill("#FA8072");
//    ellipse(width * 0.23, height / 3.5-mov*0.5, 20);
//    fill("#FA8072");
//    ellipse(width * 0.21, height / 3.5-mov*0.5, 20);
//    fill("#FA8072");
//    ellipse(width * 0.19, height / 3.5-mov*0.5, 19);
//    fill("#FA8072");
//    ellipse(width * 0.17, height / 3.4-mov*0.5, 17);
//    fill("#FA8072");
//    ellipse(width * 0.15, height / 3.2-mov*0.5, 13);
//    
//    
//    //ull esquerre
//    fill("#CD5C5C");
//    ellipse(width * 0.25, height / 2.5, 30+mov);
//    fill("#CD5C5C");
//    ellipse(width * 0.25, height / 2.3, 10);
//    
//    //pecas
//    fill("#F08080");
//    ellipse(width * 0.50, height / 10.5+mov, 50);
//    
//
//   
//
//    
//   
//    
////ulldret
//    fill("CD5C5C");
//    ellipse(width * 0.75, height / 3.5, 50);
//    fill("#FA8072");
//    ellipse(width * 0.75, height / 2.5, 30+mov);
//    fill("#FA8072");
//    ellipse(width * 0.75, height / 2.3+mov, 10);
//    fill("#FA8072");
//    ellipse(width * 0.75, height / 2.2+mov, 10);
//
//   
//    //nas
//    noFill();
//    stroke("#CD5C5C");
//    strokeWeight(100);
//    arc(width * 0.5, height / 1.85, 60, 60, radians(200), radians(555));
//    
//     noFill();
//    stroke("#F08080");
//    strokeWeight(15);
//    arc(width * 0.5, height / 1.85, 60, 60+mov, radians(15), radians(155));
//    
    
}




//rectMode(CENTER);
 
rect(0+mov*5.5,0+mov*5.5,1000,400);

function touchStarted(){
    getAudioContext().resume();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
