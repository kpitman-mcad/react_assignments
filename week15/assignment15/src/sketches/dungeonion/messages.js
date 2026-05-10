export default function createMessages() {
  // This message will display of you move in a direction
  // that is blocked or if you type an unknown command.

  return function messages(
    inputText,
    currentLocation,
    inventory,
    data,
    message,
    message2,
  ) {
    if (currentLocation === 0 && inputText === "north") {
      message = "The doorway is very dark...";
    } else if (
      (currentLocation === 1 ||
        currentLocation === 2 ||
        currentLocation === 3) &&
      inputText === "north"
    ) {
      message = "The way " + inputText + " is blocked...";
    } else if (
      (currentLocation === 7 ||
        currentLocation === 8 ||
        currentLocation === 9 ||
        currentLocation === 0) &&
      inputText === "south"
    ) {
      message = "The way " + inputText + " is blocked...";
    } else if (
      (currentLocation === 1 ||
        currentLocation === 4 ||
        currentLocation === 7 ||
        currentLocation === 0) &&
      inputText === "west"
    ) {
      message = "The way " + inputText + " is blocked...";
    } else if (
      (currentLocation === 3 ||
        currentLocation === 6 ||
        currentLocation === 9 ||
        currentLocation === 0) &&
      inputText === "east"
    ) {
      message = "The way " + inputText + " is blocked...";
    } else if (
      currentLocation === 10 &&
      (inputText === "north" ||
        inputText === "south" ||
        inputText === "east" ||
        inputText === "west")
    ) {
      message = "The world is your oyster";
    } else if (
      inputText !== "north" &&
      inputText !== "south" &&
      inputText !== "east" &&
      inputText !== "west" &&
      inputText !== "enter" &&
      inputText !== "exit" &&
      inputText !== "take torch" &&
      inputText !== "drop torch" &&
      inputText !== "take book" &&
      inputText !== "drop book" &&
      inputText !== "take note" &&
      inputText !== "drop note" &&
      inputText !== "take staff" &&
      inputText !== "drop staff" &&
      inputText !== "take key" &&
      inputText !== "drop key" &&
      inputText !== "take sword" &&
      inputText !== "drop sword" &&
      inputText !== "exit painting"
    ) {
      message = "I don't understand " + inputText;
    } else {
      message = " ";
    }

    let i = currentLocation;

    // Action messages
    if (
      // Show item pickup messages
      inputText === "take torch" &&
      inventory.includes("torch")
    ) {
      message2 = data[i].itempickup;
    } else if (inputText === "take book" && inventory.includes("book")) {
      message2 = data[i].itempickup;
    } else if (inputText === "take note" && inventory.includes("note")) {
      message2 = data[i].itempickup;
    } else if (inputText === "take staff" && inventory.includes("staff")) {
      message2 = data[i].itempickup;
    } else if (inputText === "take key" && inventory.includes("key")) {
      message2 = data[i].itempickup;
    } else if (inputText === "take sword" && inventory.includes("sword")) {
      message2 = data[i].itempickup;
    } else if (
      // Show item drop messages
      inputText === "drop torch" &&
      inventory.includes("torch")
    ) {
      message2 = data[0].itemdrop;
    } else if (inputText === "drop book" && !inventory.includes("book")) {
      message2 = data[1].itemdrop;
    } else if (inputText === "drop note" && !inventory.includes("note")) {
      message2 = data[3].itemdrop;
    } else if (inputText === "drop staff" && !inventory.includes("staff")) {
      message2 = data[5].itemdrop;
    } else if (inputText === "drop key" && !inventory.includes("key")) {
      message2 = data[6].itemdrop;
    } else if (inputText === "drop sword" && !inventory.includes("sword")) {
      message2 = data[7].itemdrop;

      // Room description
    } else if (
      inventory.includes(data[i].item) === false &&
      data[i].item !== false
    ) {
      message2 = data[i].itemdescription;

      // Escape messages
    } else if (
      inputText === "exit painting" &&
      data[i].id === 2 &&
      inventory.length !== 6
    ) {
      message2 = data[10].itemdescription;
    } else if (inputText === "exit painting" && inventory.length === 6) {
      message2 = data[10].endingdescription;
    } else {
      message2 = "";
    }

    return { message, message2 };

    //   console.log(message);
    //   console.log(message2);
    //   console.log(data[i].item);
    //   console.log(data[i].itemdescription);
  };
}
