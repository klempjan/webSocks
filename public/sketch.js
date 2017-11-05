var socket;

function setup() {
    createCanvas(700,250);
    background(51);

    socket = io.connect('https://stark-oasis-28897.herokuapp.com');
    socket.on('mouse', newDrawing);

}

function newDrawing(data) {
    noStroke();
    fill(255,0,100);
    ellipse(data.x,data.y,36,36);
}

function mouseDragged() {
    console.log('sending: ' + mouseX + ',' + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    };

    socket.emit('mouse', data);

    noStroke();
    fill(255);
    ellipse(mouseX,mouseY,36,36);


}

function draw() {

}
