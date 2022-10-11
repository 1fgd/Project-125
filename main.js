leftwristX=0;
rightwristX=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function draw() {
    background('#969A97');
    textSize(difference);
    fill('#F90093');
    text('Varad',50,400);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);

        console.log("leftwristX  =" + leftwristX + "rightWristX = "+ rightwristX + " difference = " + difference);
    }
}