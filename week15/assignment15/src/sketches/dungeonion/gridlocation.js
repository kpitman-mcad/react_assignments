export default function createGridLocation() {
  // Track the location of each room on a grid. There are 11 total locations.
  return function gridLocation(inputText, currentLocation, inventory) {
    // noLoop();
    if (inputText === "north") {
      if (currentLocation === 4) {
        currentLocation = 1;
      } else if (currentLocation === 5) {
        currentLocation = 2;
      } else if (currentLocation === 6) {
        currentLocation = 3;
      } else if (currentLocation === 7) {
        currentLocation = 4;
      } else if (currentLocation === 8) {
        currentLocation = 5;
      } else if (currentLocation === 9) {
        currentLocation = 6;
      } else if (currentLocation === 0 && inventory.includes("torch")) {
        currentLocation = 8;
      }
    } else if (inputText === "south") {
      if (currentLocation === 1) {
        currentLocation = 4;
      } else if (currentLocation === 2) {
        currentLocation = 5;
      } else if (currentLocation === 3) {
        currentLocation = 6;
      } else if (currentLocation === 4) {
        currentLocation = 7;
      } else if (currentLocation === 5) {
        currentLocation = 8;
      } else if (currentLocation === 6) {
        currentLocation = 9;
      }
    } else if (inputText === "east") {
      if (currentLocation === 1) {
        currentLocation = 2;
      } else if (currentLocation === 4) {
        currentLocation = 5;
      } else if (currentLocation === 7) {
        currentLocation = 8;
      } else if (currentLocation === 2) {
        currentLocation = 3;
      } else if (currentLocation === 5) {
        currentLocation = 6;
      } else if (currentLocation === 8) {
        currentLocation = 9;
      }
    } else if (inputText === "west") {
      if (currentLocation === 3) {
        currentLocation = 2;
      } else if (currentLocation === 6) {
        currentLocation = 5;
      } else if (currentLocation === 9) {
        currentLocation = 8;
      } else if (currentLocation === 2) {
        currentLocation = 1;
      } else if (currentLocation === 5) {
        currentLocation = 4;
      } else if (currentLocation === 8) {
        currentLocation = 7;
      }
    } else if (
      inputText === "exit painting" &&
      currentLocation === 2 &&
      inventory.length === 6
    ) {
      currentLocation = 10;
    }

    //Testing input and location

    if (inputText === "enter") {
      currentLocation = 0;
    }

    if (inputText === "exit") {
      currentLocation = 10;
    }

    return currentLocation;
  };
}
