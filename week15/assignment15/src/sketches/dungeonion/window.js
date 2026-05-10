export default function createIllustrationWindow(p) {
  // Window highlight illustration that changes color with each room.
  return function illustrationWindow(r, g, b) {
    p.push();
    // if (p.currentLocation === i) {
    // fill(53, 230, 100, 45 + sin(frameCount * 20) * 2);
    p.fill(r, g, b, 45 + p.sin(p.frameCount * 20) * 2);
    // }

    p.noStroke();
    p.ellipse(75, 160, 80, 90);
    p.beginShape();
    p.vertex(110, 138);
    p.vertex(278, 132);
    p.vertex(267, 148);
    p.vertex(150, 148);
    p.endShape(p.CLOSE);
    p.beginShape();
    p.vertex(278, 132);
    p.vertex(265, 148);
    p.vertex(267, 325);
    p.vertex(280, 340);
    p.endShape(p.CLOSE);
    p.beginShape();
    p.vertex(267, 325);
    p.vertex(280, 340);
    p.vertex(100, 343);
    p.vertex(125, 327);
    p.endShape(p.CLOSE);
    p.beginShape();
    p.vertex(330, 90);
    p.vertex(340, 90);
    p.vertex(340, 180);
    p.vertex(330, 180);
    p.endShape(p.CLOSE);
    p.beginShape();
    p.vertex(340, 175);
    p.vertex(350, 175);
    p.vertex(360, 485);
    p.vertex(350, 480);
    p.endShape(p.CLOSE);
    p.beginShape();
    p.vertex(365, 490);
    p.vertex(380, 500);
    p.vertex(373, 600);
    p.vertex(362, 600);
    p.endShape(p.CLOSE);
    p.pop();
  };
}
