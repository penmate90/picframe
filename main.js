function preload() {
    
}
tint_color="";
function  setup() {
    canvas= createCanvas(700,700);
    canvas.position(100,250)
    video=createCapture(VIDEO);
    video.hide();
    video.center();
    
}
function draw() {
    
    image(video,30,30,300,300);
    rect(35,40, 300,30)
    rect(35,40, 29,290)
    rect(50,310, 280,30)
    rect(310,50, 29,290)
    circle(35,50, 60);
        circle(50,310, 60);
    circle(320,310, 60);
    circle(320,50, 60);
    fill(0,125,125);
    
                          ;
}

function take_snapshot() {
    save("frame.png");

}

