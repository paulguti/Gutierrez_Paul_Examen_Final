let puntos = []
let mult = 0.005;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30)
  noiseDetail(6)

  let densidad = 80;
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

    var r = map (puntos [i].x, 0, width, 40, 255);
    var g = map (puntos [i].y, 0, height, 40, 255);
    var b = map (puntos [i].x, 0, width, 250, 40);

    fill (r, g, b);

    var angle = map(noise(puntos[i].x * mult, puntos[i].y * mult), 0, 1, 0, 520)

    puntos [i].add(createVector(cos(angle), sin(angle)))

    ellipse(puntos[i].x, puntos[i].y, 1)
  }

}
