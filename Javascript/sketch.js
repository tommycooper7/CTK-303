let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0); 

  for (let i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
    
    if (particles[i].isOffscreen()) {
      particles.splice(i, 1); 
    }
  }
  
  particles.push(new Particle(mouseX, mouseY));
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(5, 10);
    this.speed = random(1, 5);
    this.color = color(random(255), random(50), 0); 
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  move() {
    this.y -= this.speed;
    this.x += random(-2, 2);
  }

  isOffscreen() {
    return this.y < -this.radius;
  }
}
