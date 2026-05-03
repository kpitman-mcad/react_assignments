import React, { useRef, useEffect, useState } from "react";
import p5 from "p5";

function P5Sketch({ color }) {
  const sketchRef = useRef();
  const p5Instance = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let x = 50;

      p.setup = () => {
        p.createCanvas(600, 400);
      };

      p.draw = () => {
        p.background("yellow");
        p.fill(p.currentColor);
        p.circle(x, 100, 50);

        x = (x + 2) % p.width;
      };
    };

    p5Instance.current = new p5(sketch, sketchRef.current);

    return () => p5Instance.current.remove();
  }, []); // re-run if React state changes

  useEffect(() => {
    if (p5Instance.current) {
      p5Instance.current.currentColor = color;
    }
  }, [color]);

  return <div ref={sketchRef}></div>;
}

function SunshineKissProj() {
  const [color, setColor] = useState("red");

  return (
    <div className="sunshinekissproj-div">
      <h3>This is a test page to run p5.js locally</h3>
      <section className="sunshinekissproj">
        <P5Sketch className="p5sketch" color={color} />

        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("green")}>Green</button>
      </section>
      {/* <div className="sunshinekissproj__button">
        <button className="sunshinekissproj__run-button">Run</button>
        <button className="sunshinekissproj__run-button">Stop</button>
      </div> */}
    </div>
  );
}
export default SunshineKissProj;
