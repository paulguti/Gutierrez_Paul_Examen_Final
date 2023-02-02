let puntos = []
let mult = 0.005;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30)
  noiseDetail(5)

  let densidad = 80;
  let espacio = width / densidad 

  for (let x = 0; x < width; x += espacio){
    for (let y = 0; y < height; y += espacio) {
      let p = createVector(x + random (-10, 10), y + random (-10, 10));
      puntos.push(p);
    }
  }

  r1 = random (255);
  r2 = random (255);
  g1 = random (255);
  g2 = random (255);
  b1 = random (255);
  b2 = random (255);

}

function draw() {

  noStroke();
  fill(225);

  for (var i = 0; i < puntos.length; i++) {

    var r = map (puntos [i].x, 0, width, r1, r2);
    var g = map (puntos [i].y, 0, height, g1, g2);
    var b = map (puntos [i].x, 0, width, b1, b2);

    fill (r, g, b);

    var angle = map(noise(puntos[i].x * mult, puntos[i].y * mult), 0, 1, 0, 300)

    puntos [i].add(createVector(cos(angle), sin(angle)))

    ellipse(puntos[i].x, puntos[i].y, 1)
    
  }

  

}
