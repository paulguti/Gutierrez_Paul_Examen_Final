let puntos = []
let mult = 0.005;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30,80,79)

  let densidad = 50;
  let espacio = width / densidad 

  for (let x = 0; x < width; x += espacio){
    for (let y = 0; y < height; y += espacio) {
      let p = createVector(x, y);
      puntos.push(p);
    }
  }
}

function draw() {
  noStroke();
  fill(225);

  for (var i = 0; i < puntos.length; i++) {
    var angle = map(noise(puntos[i].x * mult, puntos[i].y * mult), 5, 1, 5, 720)

    puntos [i].add(createVector(cos(angle), sin(angle)))

    ellipse(puntos[i].x, puntos[i].y, 1)
  }

}
