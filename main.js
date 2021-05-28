song1 = "";
song2 = "";
left_wrist_x = 0;
right_wrist_x = 0;
left_wrist_y = 0;
right_wrist_y = 0;
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotposes)
}
function modelLoaded(){
    console.log("pose net is working fine ")
}
function draw(){
    image(video,0,0,600,500)
}
function preload(){
    song1 = "AC_17_23_53.mp3"
    song2 = "music.mp3";
}
function gotposes(results){
if(results.length > 0 ){
    console.log(results);
    left_wrist_x = results[0].pose.leftWrist.x;
    right_wrist_x  = results[0].pose.rightWrist.x
    left_wrist_y = results[0].pose.leftWrist.y
    right_wrist_y  = results[0].pose.rightWrist.y
    console.log("right wrist y =  "  + right_wrist_y + " right wrist x =  "+ right_wrist_x + " leftwrist y  = "+ left_wrist_y + " left wrist x  = "+ left_wrist_x );
}
}
