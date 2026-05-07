/*
Kevin Pitman, Programming for Web, 04/05/2026
Assignment 10, option 3
Birds on a wire! Click anywhere to move the flock and discover the secret.
Check out the satire site for Birds Aren't Real: https://birdsarentreal.com/pages/evidence
*/

export default function notBird(p) {
  let img;
  let birdcloud = [];
  const numDots = 1000;

  p.preload = () => {
    // Images assigned to an array.
    img = [
      p.loadImage("notbird/telephone_poles_2.png"),
      p.loadImage("notbird/telephone_poles_1.png"),
      p.loadImage("notbird/birds_1.png"),
      p.loadImage("notbird/birds_2.png"),
      p.loadImage("notbird/birds_3.png"),
      p.loadImage("notbird/birds_4.png"),
    ];
  };

  p.setup = () => {
    p.createCanvas(500, 800);
    // TODO: create 100 Dot objects at the center and store in dots array
    for (let i = 0; i < numDots; i++) {
      birdcloud.push(new BirdCloud());
    }
    p.illustration = new Illustration();
    p.birdperch = new BirdPerch();
  };

  p.draw = () => {
    p.background(210, 143, 45);
    // TODO: draw a small "." in the top-left corner

    // TODO: loop through dots and call show() and move()

    for (let birds of birdcloud) {
      birds.show();
      birds.move();
    }

    p.illustration.move();
    p.illustration.show();

    p.birdperch.move();
    p.birdperch.show();

    if (p.mouseIsPressed) {
      p.fill(0);
      p.textSize(45);
      p.textStyle(p.BOLD);
      p.textFont("Verdana");
      p.text("BIRDS AREN'T REAL", 100, 620, 200, 800);
    }
  };
  class BirdCloud {
    constructor() {
      // TODO: store position, random color (r,g,b), and random size (5–30)

      this.x = p.width * 0.6;
      this.y = p.height * 0.3;

      this.r = p.random(1, 5);
      this.color = p.color(p.random(200), 0, 0);
    }

    show() {
      // TODO:
      // - noStroke()
      // - fill with stored color
      // - draw ellipse at (x, y) with size

      p.noStroke();
      p.fill(this.color);

      p.ellipse(this.x, this.y, this.r, this.r);
    }

    move() {
      // TODO:
      // - add random jitter (-2 to 2) to x and y
      // - if mouseX > x, increase x randomly (0–7), else decrease
      // - if mouseY > y, increase y randomly (0–7), else decrease
      if (p.mouseX > this.x) {
        this.x += p.random(-7, 7) * p.sin(p.frameCount * 0.08);
      } else {
        this.x -= p.random(-3, 3) * p.sin(p.frameCount * 0.08);
      }

      if (p.mouseY > this.y) {
        this.y += p.random(-7, 7) * p.sin(p.frameCount * 0.08);
      } else {
        this.y -= p.random(-3, 3) * p.sin(p.frameCount * 0.08);
      }

      if (p.mouseIsPressed) {
        this.x = p.lerp(this.x, p.mouseX, 0.03);
        this.y = p.lerp(this.y, p.mouseY, 0.03);
      }
    }
  }

  class Illustration {
    constructor() {}

    show() {
      p.noFill();
      p.stroke(0);
      p.strokeWeight(3);

      // Powerline right foreground
      p.beginShape();
      p.curveVertex(150, 100 + this.linesControlY); // control
      p.curveVertex(450, 570); // anchor
      p.curveVertex(550, 570); // anchor
      p.curveVertex(450, 200 + this.linesControlY); // control
      p.endShape();
      // Control points
      // stroke("red");
      // point(150,100);
      // point(450,200);

      // Powerline right midground
      p.beginShape();
      p.curveVertex(150, 100 + this.linesControlY); // control
      p.curveVertex(440, 570); // anchor
      p.curveVertex(550, 600); // anchor
      p.curveVertex(450, 200 + this.linesControlY); // control
      p.endShape();
      // Control points
      // stroke("red");
      // point(150,100);
      // point(450,200);

      // Powerline right background
      p.beginShape();
      p.curveVertex(150, 100 + this.linesControlY); // control
      p.curveVertex(370, 585); // anchor
      p.curveVertex(600, 650); // anchor
      p.curveVertex(450, 200 + this.linesControlY); // control
      p.endShape();
      // Control points
      // stroke("red");
      // point(150,100);
      // point(450,200);

      p.image(img[0], 0, 0, 500, 800); // Pole background

      // Powerline middle foreground
      p.beginShape();
      p.curveVertex(150, 100 + this.linesControlY); // control
      p.curveVertex(140, 380); // anchor
      p.curveVertex(450, 570); // anchor
      p.curveVertex(450, 200 + this.linesControlY); // control
      p.endShape();
      // Control points
      // stroke("red");
      // point(150,100);
      // point(450,200);

      // Powerline middle midground
      p.beginShape();
      p.curveVertex(150, 100 + this.linesControlY); // control
      p.curveVertex(110, 380); // anchor
      p.curveVertex(440, 575); // anchor
      p.curveVertex(450, 200 + this.linesControlY); // control
      p.endShape();
      // Control points
      // stroke("red");
      // point(150,100);
      // point(450,200);

      // Powerline middle background
      p.beginShape();
      p.curveVertex(150, 100 + this.linesControlY); // control
      p.curveVertex(25, 430); // anchor
      p.curveVertex(370, 585); // anchor
      p.curveVertex(450, 300 + this.linesControlY); // control
      p.endShape();
      // Control points
      // stroke("red");
      // point(150,100);
      // point(450,300);

      p.image(img[1], 0, 0, 500, 800); // Pole foreground

      // Powerline left foreground
      p.beginShape();
      p.curveVertex(150, 100 + this.linesControlY); // control
      p.curveVertex(-140, 0); // anchor
      p.curveVertex(140, 380); // anchor
      p.curveVertex(450, 200 + this.linesControlY); // control
      p.endShape();
      // Control points
      // stroke("red");
      // point(150,100);
      // point(450,200);

      // Powerline left midground
      p.beginShape();
      p.curveVertex(150, 100 + this.linesControlY); // control
      p.curveVertex(-200, 50); // anchor
      p.curveVertex(110, 380); // anchor
      p.curveVertex(450, 200 + this.linesControlY); // control
      p.endShape();
      // Control points
      // stroke("red");
      // point(150,100);
      // point(450,200);

      // Powerline left background
      p.beginShape();
      p.curveVertex(150, 100 + this.linesControlY); // control
      p.curveVertex(-200, 50); // anchor
      p.curveVertex(25, 430); // anchor
      p.curveVertex(450, 200 + this.linesControlY); // control
      p.endShape();
      // Control points
      // stroke("red");
      // point(150,100);
      // point(450,200);

      p.image(img[2], 0, 0 - this.birdsControlY, 500, 800); // Bird 1

      p.image(img[3], 0, 40 - this.birdsControlY, 500, 800); // Bird 2

      p.image(img[4], 0, 30 - this.birdsControlY, 500, 800); // Bird 3

      p.image(img[5], 0, 36 - this.birdsControlY, 500, 800); // Bird 4
    }
    move() {
      this.linesControlY = 50 * p.sin(p.frameCount * 0.03);
      this.birdsControlY = 5 * p.sin(p.frameCount * 0.03);
    }
  }

  class BirdPerch {
    // bird on the wire
    constructor() {
      this.x = 480;
      this.y = 660;
    }

    show() {
      p.fill(0);
      p.circle(this.x, this.y - this.birdsControlY, 6);
    }

    move() {
      this.birdsControlY = 5 * p.sin(p.frameCount * 0.03);

      if (p.mouseIsPressed) {
        this.x = p.lerp(this.x, p.mouseX, 0.1);
        this.y = p.lerp(this.y, p.mouseY, 0.1);
      }
    }
  }

  /* Sources and Resources
1. p5.js Reference site: https://p5js.org/reference/
2. Chemotaxis project: https://gist.github.com/treinartz22/ac67406a00051a9b4d61fc1feda1d12d
4. Birds Aren't Real: https://birdsarentreal.com/pages/evidence
3. Chat GPT to troubleshoot: https://chatgpt.com/
*/

  // Save gif for animated programs when a key is pressed
  p.keyPressed = () => {
    if (p.key === "%") {
      p.saveGif("pitman_kevin_assignment10", 5); // "myAnimation.gif", 5-second duration
    }
  };
}
