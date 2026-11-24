// Lab1.js - Головний файл програми

function main() {
  const menuBar = document.querySelector(".menu-bar");
  menuBar.addEventListener("click", (e) => {
    const commandId = e.target.dataset.command;
    console.log(commandId);
  });
}

main();
