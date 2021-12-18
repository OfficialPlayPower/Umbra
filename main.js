var x = new Audio("ahahaha.mp3");

var count=0;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
background_image = "TotalityTowerIcon.png";
rover_image = "The_Umbra.png";
rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadUmbra;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadUmbra() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
      up()
      console.log ("up")
    }
    if (keyPressed == '40') {
        down()
         console.log("down")
    }
    if (keyPressed == '37') {
        Left()
        console.log ("Left")
    }
    if (keyPressed == '39') {
        Right()
            console.log ("Right")
        
    }
}
function up()
{
    if (rover_y >=0)
{
    count=count+1;
    rover_y -= 10;
    console.log("when up arrow is confirmed pressed yes =" + rover_x +"-"+rover_y);
    uploadBackground();

    uploadUmbra();
    if (count==5)
    {
        count=0;
        playAudio();
    } 
  }
}
function down()
{
if(rover_y <=500)
{
    count=count+1;
rover_y +=10;
console.log("when down arow are has done is pressed, x =" + rover_x +" | y = " + rover_y);
uploadBackground();

uploadUmbra();
if (count==5)
{
    count=0;
    playAudio();
} 
}
}
function Left()
{
    if (rover_x >=0)
{
    count=count+1;
    rover_x -= 10;
    console.log("when left arrow is confirmed pressed yes =" + rover_x +"-"+rover_y);
    uploadBackground();
    
    uploadUmbra();
    if (count==5)
    {
        count=0;
        playAudio();
    } 
  }
}
function Right()
{
if(rover_x <=700)
{
    count=count+1;
rover_x +=10;
console.log("when rite arow are has done is pressed, x =" + rover_x +" | y = " + rover_y);
uploadBackground();

uploadUmbra();
if (count==5)
{
    count=0;
    playAudio();
} 
}
}
function playAudio() {
    x.play();
  }
  
  function pauseAudio() {
    x.pause();
  }