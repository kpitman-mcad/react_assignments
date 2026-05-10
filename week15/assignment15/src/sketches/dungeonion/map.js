export default function createMapDraw(p) {
  // Render map by splicing map location to array.
  return function mapDraw(mapLocation, currentLocation) {
    p.push();
    if (mapLocation.includes("enter") === true) {
      p.stroke(255);
      p.noFill();
      p.circle(195, 310, 20);
    }
    if (mapLocation.includes("1A") === true) {
      p.stroke(255);
      p.noFill();
      p.square(158, 203, 30, 5);
    }
    if (mapLocation.includes("1B") === true) {
      p.stroke(255);
      p.noFill();
      p.square(195, 203, 30, 5);
    }
    if (mapLocation.includes("1C") === true) {
      p.stroke(255);
      p.noFill();
      p.square(232, 203, 30, 5);
    }
    if (mapLocation.includes("2A") === true) {
      p.stroke(255);
      p.noFill();
      p.square(158, 240, 30, 5);
    }
    if (mapLocation.includes("2B") === true) {
      p.stroke(255);
      p.noFill();
      p.square(195, 240, 30, 5);
    }
    if (mapLocation.includes("2C") === true) {
      p.stroke(255);
      p.noFill();
      p.square(232, 240, 30, 5);
    }
    if (mapLocation.includes("3A") === true) {
      p.stroke(255);
      p.noFill();
      p.square(158, 277, 30, 5);
    }
    if (mapLocation.includes("3B") === true) {
      p.stroke(255);
      p.noFill();
      p.square(195, 277, 30, 5);
    }
    if (mapLocation.includes("3C") === true) {
      p.stroke(255);
      p.noFill();
      p.square(232, 277, 30, 5);
    }
    if (mapLocation.includes("exit") === true) {
      p.stroke(255);
      p.noFill();
      p.circle(195, 170, 20);
    }

    if (currentLocation === 0) {
      mapLocation.splice(0, 1, "enter");
      p.fill(255);
      p.circle(195, 310, 16);
    } else if (currentLocation === 1) {
      mapLocation.splice(1, 1, "1A");
      p.fill(255);
      p.square(158, 203, 22, 5);
    } else if (currentLocation === 2) {
      mapLocation.splice(2, 1, "1B");
      p.fill(255);
      p.square(195, 203, 22, 5);
    } else if (currentLocation === 3) {
      mapLocation.splice(3, 1, "1C");
      p.fill(255);
      p.square(232, 203, 22, 5);
    } else if (currentLocation === 4) {
      mapLocation.splice(4, 1, "2A");
      p.fill(255);
      p.square(158, 240, 22, 5);
    } else if (currentLocation === 5) {
      mapLocation.splice(5, 1, "2B");
      p.fill(255);
      p.square(195, 240, 22, 5);
    } else if (currentLocation === 6) {
      mapLocation.splice(6, 1, "2C");
      p.fill(255);
      p.square(232, 240, 22, 5);
    } else if (currentLocation === 7) {
      mapLocation.splice(7, 1, "3A");
      p.fill(255);
      p.square(158, 277, 22, 5);
    } else if (currentLocation === 8) {
      mapLocation.splice(8, 1, "3B");
      p.fill(255);
      p.square(195, 277, 22, 5);
    } else if (currentLocation === 9) {
      mapLocation.splice(9, 1, "3C");
      p.fill(255);
      p.square(232, 277, 22, 5);
    } else if (currentLocation === 10) {
      mapLocation.splice(10, 1, "exit");
      p.fill(255);
      p.circle(195, 170, 16);
    }
    p.pop();
  };
}
