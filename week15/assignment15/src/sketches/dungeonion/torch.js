export default function createIllustrationTorch(p) {
  // Torch illustration that changes color with each room.
  return function illustrationTorch() {
    p.push();
    p.noStroke();
    let torchX = 75;
    let torchY = 210;

    p.fill(230, 161, 37);
    p.beginShape();
    p.curveVertex(torchX - 15 + p.sin(p.frameCount * 5), torchY - 40);
    p.curveVertex(torchX - 5, torchY - 20);
    p.curveVertex(torchX + 20 + p.sin(p.frameCount * 3), torchY - 50);
    p.curveVertex(
      torchX - 5 + p.sin(p.frameCount * 4),
      torchY - 100 + p.sin(p.frameCount * 4),
    );
    p.curveVertex(torchX - 10, torchY - 70);
    p.endShape(p.CLOSE);

    p.fill(230, 66, 37, 150);
    p.circle(torchX, torchY - 40, 40 + p.sin(p.frameCount * 20) * 2);

    p.stroke(255);
    p.fill(0);
    p.rect(torchX, torchY - 10, 50, 10);
    p.beginShape();
    p.vertex(torchX - 20, torchY);
    p.vertex(torchX + 20, torchY);
    p.vertex(torchX, torchY + 100);
    p.endShape(p.CLOSE);
    p.pop();
  };
}
