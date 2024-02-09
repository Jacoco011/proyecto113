function preload()
{

}

function setup()
{
    canvas=createCanvas(640, 480);
    canvas.position(110, 350);
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 230, 150, 240, 200);
    fill(255,0,0);
    stroke(255,0,0);
    circle(200,140,80);
    fill(0,0,0);
    stroke(0,0,0);
    circle(200,360,80);
    fill(0,23,255);
    stroke(0,23,255);
    circle(500,360,80);
    fill(240,255,0);
    stroke(240,255,0);
    circle(500,140,80);
    
}


function take_snapshot()
{
    save("foto_marco.png");
}
