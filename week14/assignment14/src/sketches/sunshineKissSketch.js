export default function orbitSketch(p) {
  // --- Orbit state ---
  let color = "red";
  let x = 0;

  p.setup = () => {
    p.createCanvas(500, 500);
  };

  p.draw = () => {
    p.background(color);

    p.circle(x, 100, 50);

    x = x + 1;
  };
}
