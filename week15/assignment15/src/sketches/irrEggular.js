/*
Kevin Pitman, Programming for Web, 02/19/2026
Exercise 5.7, option 4
Mind chicken levitates eggs above his head.
*/

export default function irrEggular(p) {
  let angle = 0.0;
  let eyeX = 191;
  let eyeY = 402;

  p.setup = () => {
    p.createCanvas(400, 500);
    p.stroke(186, 159, 138);
    p.strokeWeight(2);
  };

  p.draw = () => {
    p.background(250, 214, 186);

    p.push();
    p.translate(200, 200);
    for (let x = 0; x <= 100; x += 20) {
      p.rotate(angle);

      p.fill(255);
      p.ellipse(x, 0, 30, 40);
      angle += 0.001;
    }
    p.pop();

    // Chicken
    p.fill(255);
    p.beginShape();
    p.vertex(220, 500);
    p.vertex(255, 455);
    p.curveVertex(275, 440);
    p.vertex(290, 450);
    p.vertex(285, 510);
    p.endShape(p.CLOSE);

    p.beginShape();
    p.vertex(175, 400);
    p.vertex(178, 450);
    p.vertex(178, 470);
    p.vertex(168, 510);
    p.curveVertex(250, 500);
    p.vertex(220, 395);
    p.endShape(p.CLOSE);

    p.fill(250, 46, 20);
    p.beginShape();
    p.vertex(165, 410);
    p.curveVertex(175, 380);
    p.vertex(200, 375);
    p.vertex(175, 410);
    p.endShape(p.CLOSE);

    p.fill(250, 219, 23);
    p.beginShape();
    p.vertex(153, 420);
    p.vertex(168, 405);
    p.vertex(190, 420);
    p.curveVertex(170, 415);
    p.endShape(p.CLOSE);

    p.fill(250, 46, 20);
    p.ellipse(175, 428, 18, 25);
    p.ellipse(185, 425, 20, 30);

    p.push();
    p.noStroke();

    if (p.frameCount % 50 === 0) {
      // Kaley Inman's 5.7 Exercise Offset Circles reminded me this was possible!
      eyeX = p.random(191, 194);
      eyeY = p.random(400, 403);
    }

    p.fill(0);
    p.ellipse(eyeX, eyeY, 10, 10);
    p.pop();
  };

  /* Sources and Resources
1.  p5.js Reference site: https://p5js.org/reference/
2.  Make: Getting Started with p5.js code examples: https://github.com/lmccart/gswp5.js-code/tree/master
3.  ChatGPT to troubleshoot
*/

  // Save gif for animated programs when a key is pressed
  p.keyPressed = () => {
    if (p.key === "%") {
      p.saveGif("myAnimation", 5); // "myAnimation.gif", 5-second duration
    }
  };
}
