export default function createBirdCloud(p) {
  return class BirdCloud {
    // Return classes and functions for use in sketch!!!
    constructor() {
      this.x = p.width * 0.6;
      this.y = p.height * 0.3;

      this.r = p.random(1, 5);
      this.color = p.color(p.random(200), 0, 0);
    }

    show() {
      p.noStroke();
      p.fill(this.color);

      p.ellipse(this.x, this.y, this.r, this.r);
    }

    move() {
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
  };
}
