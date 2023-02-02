var puntos = []


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30,80,79)

  var densidad = 50;
  var espacio = width / densidad 

  for (var x = 0; x < width; x += espacio){
    for (var y = 0; y < height; y += espacio) {
      var p = createVector(x, y);
      puntos.push(p);
    }
  }
}

function draw() {
  noStroke();
  fill(225);

  for (var i = 0; i < puntos.length; i++) {
    var angle = map(noise(puntos[i].x, puntos[i].y), 0, 1, 0, 720)

    ellipse(puntos[i].x, puntos[i].y, 1)
  }

}
