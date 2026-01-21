let list = [];

function preload()
{
    list = loadJSON("data.json");
}


function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(230);
//   fill(300,100,150);
//   circle(mouseX, mouseY, 100);
//   fill(100,100,150);
//   rect(0,0,50,50);

textAlign(CENTER);
textSize(32);
text("Canada's Exports", 200, 40);


Object.values(list).map((item, index) => {
rect(50, index * 30 + 60, item.amount, 10);
textSize(10);
textAlign(LEFT);
text(item.name, 50, index * 30);

});

}
