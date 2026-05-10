import { useEffect, useRef } from "react";

function P5Sketch({ sketch, className = "", title = "" }) {
  // Reference to the DOM element where p5 will attach the canvas
  const containerRef = useRef(null);

  // Stores the p5 instance so we can clean it up later
  const instanceRef = useRef(null);

  useEffect(() => {
    // Prevent double-mounting in React StrictMode
    if (instanceRef.current) return;

    const init = () => {
      if (!window.p5) {
        console.error("p5 not loaded");
        return;
      }
      instanceRef.current = new window.p5(sketch, containerRef.current);
    };

    if (window.p5) {
      init();
    } else {
      const script = document.querySelector('script[src*="p5"]');
      if (script) {
        script.addEventListener("load", init);
        return () => script.removeEventListener("load", init);
      } else {
        console.error("No p5 script tag found in document");
      }
    }

    return () => {
      instanceRef.current?.remove();
      instanceRef.current = null; // ← reset so re-mount works cleanly
    };
  }, [sketch]);

  // useEffect(() => {
  //   if (!window.p5) {
  //     console.error("p5 not loaded");
  //     return;
  //   }

  //   // Create a new p5 instance and attach it to the container div
  //   instanceRef.current = new window.p5(sketch, containerRef.current);

  //   // Cleanup function runs when component unmounts
  //   // Prevents multiple canvases stacking or memory leaks
  //   return () => {
  //     instanceRef.current?.remove();
  //   };
  // }, [sketch]);

  // Empty div acts as the mounting point for the p5 canvas
  return (
    <div>
      <h3>{title}</h3>
      <div ref={containerRef} className={className}></div>
    </div>
  );
}

export default P5Sketch;
