import { data } from "./data";

export default function createInventory(p, inventory, img, getInputText) {
  return class Inventory {
    constructor() {}

    show() {
      p.push();
      if (inventory.includes("torch") === true) {
        p.image(img[1], 0, 0, 1000, 700);
      }

      if (inventory.includes("sword") === true) {
        p.image(img[2], 0, 0, 1000, 700);
      }

      if (inventory.includes("book") === true) {
        p.image(img[3], 0, 0, 1000, 700);
      }

      if (inventory.includes("note") === true) {
        p.image(img[4], 0, 0, 1000, 700);
      }

      if (inventory.includes("staff") === true) {
        p.image(img[5], 0, 0, 1000, 700);
      }

      if (inventory.includes("key") === true) {
        p.image(img[6], 0, 0, 1000, 700);
      }
      p.pop();
    }

    add(i) {
      const inputText = getInputText();

      if (
        inputText === "take torch" &&
        data[i].item &&
        !inventory.includes("torch") &&
        data[i].id === 0
      ) {
        inventory.splice(0, 0, "torch");
      } else if (
        inputText === "take book" &&
        data[i].item &&
        !inventory.includes("book") &&
        data[i].id === 1
      ) {
        inventory.splice(0, 0, "book");
      } else if (
        inputText === "take note" &&
        data[i].item &&
        !inventory.includes("note") &&
        data[i].id === 3
      ) {
        inventory.splice(0, 0, "note");
      } else if (
        inputText === "take staff" &&
        data[i].item &&
        !inventory.includes("staff") &&
        data[i].id === 5
      ) {
        inventory.splice(0, 0, "staff");
      } else if (
        inputText === "take key" &&
        data[i].item &&
        !inventory.includes("key") &&
        data[i].id === 6
      ) {
        inventory.splice(0, 0, "key");
      } else if (
        inputText === "take sword" &&
        data[i].item &&
        !inventory.includes("sword") &&
        data[i].id === 7
      ) {
        inventory.splice(0, 0, "sword");
      }
    }

    drop() {
      const inputText = getInputText();

      if (inputText === "drop torch") {
        // cannot remove torch from inventory
      } else if (
        inputText === "drop book" &&
        inventory.includes("book")
        // && data[1].id === false
      ) {
        const index = inventory.indexOf("book");
        inventory.splice(index, 1);
      } else if (inputText === "drop note" && inventory.includes("note")) {
        const index = inventory.indexOf("note");
        inventory.splice(index, 1);
      } else if (inputText === "drop staff" && inventory.includes("staff")) {
        const index = inventory.indexOf("staff");
        inventory.splice(index, 1);
      } else if (inputText === "drop key" && inventory.includes("key")) {
        const index = inventory.indexOf("key");
        inventory.splice(index, 1);
      } else if (inputText === "drop sword" && inventory.includes("sword")) {
        const index = inventory.indexOf("sword");
        inventory.splice(index, 1);
      }
    }
  };
}
