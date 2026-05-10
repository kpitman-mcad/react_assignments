export default function createUpdateText() {
  // Converts and standardizes the string input.
  return function updateText(inputText, inputField) {
    inputText = inputField.value().toLowerCase(); // Suggested by ChatGPT

    if (inputText === "n" || inputText === "north") {
      inputText = "north";
    } else if (inputText === "s" || inputText === "south") {
      inputText = "south";
    } else if (inputText === "e" || inputText === "east") {
      inputText = "east";
    } else if (inputText === "w" || inputText === "west") {
      inputText = "west";
    } else if (inputText === "enter" || inputText === "return") {
      inputText = "enter";
    } else if (inputText === "exit" || inputText === "escape") {
      inputText = "exit";
    } else if (
      inputText === "take torch" ||
      inputText === "pick up torch" ||
      inputText === "grab torch"
    ) {
      inputText = "take torch";
    } else if (
      inputText === "take book" ||
      inputText === "pick up book" ||
      inputText === "grab book"
    ) {
      inputText = "take book";
    } else if (
      inputText === "take note" ||
      inputText === "pick up note" ||
      inputText === "grab note"
    ) {
      inputText = "take note";
    } else if (
      inputText === "take staff" ||
      inputText === "pick up staff" ||
      inputText === "grab staff"
    ) {
      inputText = "take staff";
    } else if (
      inputText === "take key" ||
      inputText === "pick up key" ||
      inputText === "grab key"
    ) {
      inputText = "take key";
    } else if (
      inputText === "take sword" ||
      inputText === "pick up sword" ||
      inputText === "grab sword"
    ) {
      inputText = "take sword";
    } else if (
      inputText === "drop torch" ||
      inputText === "leave torch" ||
      inputText === "set down torch"
    ) {
      inputText = "drop torch";
    } else if (
      inputText === "drop book" ||
      inputText === "leave book" ||
      inputText === "set down book"
    ) {
      inputText = "drop book";
    } else if (
      inputText === "drop note" ||
      inputText === "leave note" ||
      inputText === "set down note"
    ) {
      inputText = "drop note";
    } else if (
      inputText === "drop staff" ||
      inputText === "leave staff" ||
      inputText === "set down staff"
    ) {
      inputText = "drop staff";
    } else if (
      inputText === "drop key" ||
      inputText === "leave key" ||
      inputText === "set down key"
    ) {
      inputText = "drop key";
    } else if (
      inputText === "drop sword" ||
      inputText === "leave sword" ||
      inputText === "set down sword"
    ) {
      inputText = "drop sword";
    } else if (
      inputText === "exit painting" ||
      inputText === "enter painting" ||
      inputText === "escape painting" ||
      inputText === "touch painting" ||
      inputText === "climb into painting"
    ) {
      inputText = "exit painting";
    }

    return inputText;
  };
}
