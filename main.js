x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recogition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recogition.start;
}

recogition.onresult = function(event) {
    console.log(event);

    var content = event.result[0][0].transricpt;
      
    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    if(content =="circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing cricle ";
        draw_circle = "set";
    }
    if(content =="Rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing Rectangle ";
        draw_rect = "set";
    }
}
function setup () {
    canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_circle =="set")
    {
        radius = Math.floor(Math.random() * 100);
        cricle(x,y,70,50);
        document.getElementById("status").innerHTML = "Circle is drawn.";
        draw_circle = "";
    }
    if(draw_rect =="set")
    {
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle is drawn.";
        draw_rect = "";
    }
}