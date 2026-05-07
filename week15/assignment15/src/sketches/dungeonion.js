/*
Kevin Pitman, Programming for Web, 03/15/2026
Assignment 8, option 6
Simple text adventure game. Refined with added functionality (Unfinished!).
*/

export default function dungeonion(p) {
  let img; // Declare a variable to hold the image
  let adventureLines;
  let inputField;
  let submitButton;
  let inputText = " ";
  let alignBox = 30;
  let currentLocation = "enter";
  let message = "";
  let items = ["book", "staff", "torch", "key", "note", "sword"];
  let inventory = [];
  let mapLocation = [];
  let offsetX;
  let offsetY;

  p.preload = () => {
    asulFontRegular = p.loadFont("assets/Asul/Asul-Regular.ttf");
    asulFontBold = p.loadFont("assets/Asul/Asul-Bold.ttf");
    adventureLines = p.loadStrings("assets/adventure.txt");
    adventureLinesEnterExit = p.loadStrings("assets/enter-exit.txt");
    img = p.loadImage("assets/dungeon_interface_illustration.png");
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.ellipseMode(p.CENTER);
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
    p.pixelDensity(1);
    inputField = p.createInput();
  };

  p.draw = () => {
    p.background(0);

    // Interface location centered on canvas.
    offsetX = p.width / 2 - 500;
    offsetY = p.height / 2 - 350;
    p.translate(offsetX, offsetY);

    illustrationWindow();

    p.image(img, 0, 0, 1000, 700);

    inputField.position(offsetX + 450, offsetY + 450);

    // console.log(currentLocation);
    // console.log(inputText);

    // Set what function runs when you enter each room.
    if (currentLocation === "1A") {
      loadAdventure1A();
      illustrationTorch();
    } else if (currentLocation === "2A") {
      loadAdventure2A();
      illustrationTorch();
    } else if (currentLocation === "3A") {
      loadAdventure3A();
      illustrationTorch();
    } else if (currentLocation === "1B") {
      loadAdventure1B();
      illustrationTorch();
    } else if (currentLocation === "2B") {
      loadAdventure2B();
      illustrationTorch();
    } else if (currentLocation === "3B") {
      loadAdventure3B();
      illustrationTorch();
    } else if (currentLocation === "1C") {
      loadAdventure1C();
      illustrationTorch();
    } else if (currentLocation === "2C") {
      loadAdventure2C();
      illustrationTorch();
    } else if (currentLocation === "3C") {
      loadAdventure3C();
      illustrationTorch();
    } else if (currentLocation === "enter") {
      loadAdventureEnter();
      illustrationTorch();
    } else if (currentLocation === "exit") {
      loadAdventureExit();
      illustrationTorch();
    }

    mapDraw();

    inventoryStyle();

    // loadAdventure1A();
    // loadAdventure3C();
    // loadAdventureEnter();
    // loadAdventureExit();
    // currentLocation = "3B";

    blockedMessage();

    fieldStyle();

    // Message text
    messageStyle();
    p.text(message, 470, 510);
  };

  // Track the location of each room on a grid. There are 9 total rooms.
  p.gridLocation = (inputText) => {
    // noLoop();
    if (inputText === "north") {
      if (currentLocation === "2A") {
        currentLocation = "1A";
      } else if (currentLocation === "2B") {
        currentLocation = "1B";
      } else if (currentLocation === "2C") {
        currentLocation = "1C";
      } else if (currentLocation === "3A") {
        currentLocation = "2A";
      } else if (currentLocation === "3B") {
        currentLocation = "2B";
      } else if (currentLocation === "3C") {
        currentLocation = "2C";
      } else if (currentLocation === "enter") {
        currentLocation = "3B";
      }
    } else if (inputText === "south") {
      if (currentLocation === "1A") {
        currentLocation = "2A";
      } else if (currentLocation === "1B") {
        currentLocation = "2B";
      } else if (currentLocation === "1C") {
        currentLocation = "2C";
      } else if (currentLocation === "2A") {
        currentLocation = "3A";
      } else if (currentLocation === "2B") {
        currentLocation = "3B";
      } else if (currentLocation === "2C") {
        currentLocation = "3C";
      }
    } else if (inputText === "east") {
      if (currentLocation === "1A") {
        currentLocation = "1B";
      } else if (currentLocation === "2A") {
        currentLocation = "2B";
      } else if (currentLocation === "3A") {
        currentLocation = "3B";
      } else if (currentLocation === "1B") {
        currentLocation = "1C";
      } else if (currentLocation === "2B") {
        currentLocation = "2C";
      } else if (currentLocation === "3B") {
        currentLocation = "3C";
      }
    } else if (inputText === "west") {
      if (currentLocation === "1C") {
        currentLocation = "1B";
      } else if (currentLocation === "2C") {
        currentLocation = "2B";
      } else if (currentLocation === "3C") {
        currentLocation = "3B";
      } else if (currentLocation === "1B") {
        currentLocation = "1A";
      } else if (currentLocation === "2B") {
        currentLocation = "2A";
      } else if (currentLocation === "3B") {
        currentLocation = "3A";
      }
    } else if (inputText === "enter") {
      currentLocation = "enter";
    } else if (inputText === "exit") {
      currentLocation = "exit";
    }
  };
}
