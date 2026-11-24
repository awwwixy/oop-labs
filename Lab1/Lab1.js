// Lab1.js - Головний файл програми

const IDM_WORK1 = "IDM_WORK1";
const IDM_WORK2 = "IDM_WORK2";

function onCommand(commandId) {
  switch (commandId) {
    case IDM_WORK1:
      console.log("Відкрити діалог Робота1");
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
}

main();
