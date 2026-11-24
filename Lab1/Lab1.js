// Lab1.js - Головний файл програми

import { openModule1Dialog } from "./module1.js";

const IDM_WORK1 = "IDM_WORK1";
const IDM_WORK2 = "IDM_WORK2";

const state = {
    text: "",
};

function paint() {
    const clientArea = document.getElementById("clientArea");
    if (state.text === "") {
        clientArea.textContent = "Оберіть пункт меню 'Робота1' або 'Робота2'";
    } else {
        clientArea.textContent = state.text;
    }
}

function onCommand(commandId) {
  switch (commandId) {
    case IDM_WORK1:
      openModule1Dialog((group) => {
        if (group !== null) {
          state.text = group;
          paint();
        }
      });
      break;
    case IDM_WORK2:
      console.log("Відкрити діалог Робота2");
      break;
    default:
      break;
  }
}

function main() {
  const menuBar = document.querySelector(".menu-bar");
  menuBar.addEventListener("click", (e) => {
    const commandId = e.target.dataset.command;
    onCommand(commandId);
  });
  paint();
}

main();
