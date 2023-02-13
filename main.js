nose_x = 0;
nose_y = 0;

function preLoad(){
    clown = loadImage("https://i.postimg.cc/05D2xNyV/clown-nose.jpg");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}
function modelLoaded(){
    console.log("poseNet has been initialized");

}
function gotPose(results){
    if(results.length>0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x position is " + nose_x);
        console.log("nose y position is " + nose_y);
    }
}
function draw(){
    image(video,0,0,300,300);
    //fill("red");
    //stroke("red");
    //circle(nose_x,nose_y,20);
    image(clown,nose_x,nose_y,30,30)
}
function take_snapshot(){
    save('clown_nose_img.png');
}