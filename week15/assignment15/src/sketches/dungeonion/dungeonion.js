/*
Kevin Pitman, Programming for Web, 03/15/2026
Assignment 8, option 6
Simple text adventure game. Refined with added functionality.
*/

// Import js files to main sketch!!!
import { data } from "./data";
import createGridLocation from "./gridlocation";
import createInventory from "./inventory";
import createMapDraw from "./map";
import createMessages from "./messages";
import createIllustrationTorch from "./torch";
import createUpdateText from "./updatetext";
import createIllustrationWindow from "./window";

export default function dungeonion(p) {
  let img; // Declare a variable to hold the image
  let inputField;
  let inputText = " ";
  let currentLocation = 0;
  let message = " ";
  let message2 = " ";
  let inventory = [];
  let mapLocation = [];
  let offsetX;
  let offsetY;
  let r;
  let g;
  let b;
  let asulFontRegular;
  let asulFontBold;

  // Assign function variable!!!
  let gridLocation;
  let mapDraw;
  let messages;
  let illustrationTorch;
  let updateText;
  let illustrationWindow;

  p.preload = () => {
    asulFontRegular = p.loadFont("assets/Asul/Asul-Regular.ttf");
    asulFontBold = p.loadFont("assets/Asul/Asul-Bold.ttf");
    img = [
      p.loadImage("assets/dungeonion/dungeon_interface_illustration.png"),
      p.loadImage("assets/dungeonion/dungeon_item_illustration_torch.png"),
      p.loadImage("assets/dungeonion/dungeon_item_illustration_sword.png"),
      p.loadImage("assets/dungeonion/dungeon_item_illustration_book.png"),
      p.loadImage("assets/dungeonion/dungeon_item_illustration_note.png"),
      p.loadImage("assets/dungeonion/dungeon_item_illustration_staff.png"),
      p.loadImage("assets/dungeonion/dungeon_item_illustration_key.png"),
    ];
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);

    // Instantiate imported p5 functions!!!
    gridLocation = createGridLocation();
    mapDraw = createMapDraw(p);
    messages = createMessages();
    illustrationTorch = createIllustrationTorch(p);
    updateText = createUpdateText();
    illustrationWindow = createIllustrationWindow(p);

    // Instantiate imported p5 classes!!!
    const Inventory = createInventory(p, inventory, img, () => inputText);

    p.ellipseMode(p.CENTER);
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);
    p.pixelDensity(1);
    inputField = p.createInput();
    p.currentInventory = new Inventory();
    r = p.random(255);
    g = p.random(255);
    b = p.random(255);
  };

  p.draw = () => {
    p.background(0);

    // Interface location centered on canvas.
    offsetX = p.width / 2 - 500;
    offsetY = p.height / 2 - 350;
    p.translate(offsetX, offsetY);

    illustrationWindow(r, g, b, currentLocation);

    p.image(img[0], 0, 0, 1000, 700);

    // Set what function runs when you enter each room.
    p.loadAdventure(currentLocation);

    inputField.position(offsetX + 450, offsetY + 450);
    p.fieldStyle();

    illustrationTorch();

    mapDraw(mapLocation, currentLocation);

    p.inventoryStyle();
    p.currentInventory.show();

    // Message text
    p.messageStyle();
    p.text(message, 670, 510, 400);
    p.text(message2, 660, 535, 380);

    // Testing area for functionality

    // console.log(currentLocation);
    // console.log(inputText);
    // console.log(locationTest[0].room);
    // console.log(locationTest[0].item);
    // console.log(data[currentLocation].id);
    // console.log(data[currentLocation].room);
    // console.log(data[currentLocation].title);
    // console.log(data[currentLocation].description);
    // console.log(data[currentLocation].item);
  };

  // load the keys of the data file.
  p.loadAdventure = (i) => {
    p.push();
    p.adventureStyle();
    p.text(data[i].title, 650, 375, 400, 300);
    // Room identifiers
    // text(data[i].room, 950, 375, 400, 300);
    p.text(data[i].description, 650, 400, 400, 300);
    p.pop();
  };

  // Styling for various functions.
  p.adventureStyle = () => {
    p.textAlign(p.LEFT);
    p.textSize(16);
    p.textStyle(p.NORMAL);
    p.textFont(asulFontRegular);
    p.textWrap(p.WORD);
    p.fill(255);
  };

  p.messageStyle = () => {
    p.textAlign(p.LEFT);
    p.textSize(16);
    p.textStyle(p.ITALIC);
    p.textFont(asulFontBold);
    p.textWrap(p.WORD);
    p.fill(200);
  };

  p.fieldStyle = () => {
    p.push();
    inputField.style("background-color", "#000");
    inputField.style("border-radius", "5px");
    inputField.style("border", "solid");
    inputField.style("border-color", "#E9F0EF");
    inputField.style("color", "#E9F0EF");
    inputField.style("width", "200px");
    inputField.style("height", "25px");
    p.pop();
  };

  p.inventoryStyle = () => {
    p.push();
    p.fill(255);
    p.textSize(20);
    p.text("Inventory", 160, 390);
    p.pop();
  };

  /* Sources and Resources
1. p5.js Reference site: https://p5js.org/reference/
2. Text and Type tutorial: https://creative-coding.decontextualize.com/text-and-type/
3. Exercise source code: Week 7 Lecture slides page 51.
4. MDN Resources: https://developer.mozilla.org/en-US/
5. Chat GPT to troubleshoot: https://chatgpt.com/
6. Claude to troubleshoot: https://claude.ai/
*/

  p.keyPressed = () => {
    if (p.keyCode === 13) {
      inputText = updateText(inputText, inputField);
      p.inputText = inputText;

      console.log(inventory);

      currentLocation = gridLocation(inputText, currentLocation, inventory);
      p.currentInventory.add(currentLocation);
      p.currentInventory.drop(currentLocation);
      ({ message, message2 } = messages(
        inputText,
        currentLocation,
        inventory,
        data,
        message,
        message2,
      ));

      // Suggested by Claude
      inputText = " "; // ← reset so it doesn't keep firing in draw()
      p.inputText = " ";
      inputField.value(""); // ← also clear the input field
    }
    if (p.key === "%") {
      // Save gif for animated programs when a key is pressed
      p.saveGif("pitman_kevin_dungeonion", 5); // "myAnimation.gif", 5-second duration
    }
  };
}
