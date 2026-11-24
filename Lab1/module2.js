// module2.js - Робота2, варіант B2 = 0: діалог з полем вводу

class TextInputDialog {
  #dialog;
  #input;

  show() {
    this.#createWindow();
    document.body.append(this.#dialog);
    this.#dialog.showModal();
  }

  #createWindow() {
    this.#dialog = document.createElement("dialog");
    this.#dialog.className = "dlg";
    this.#dialog.innerHTML = `
        <div class="dlg-title">Робота2 — введення тексту</div>
        <input type="text">
        <div class="dlg-buttons">
            <button data-id="ok">Так</button>
            <button data-id="cancel">Відміна</button>
        </div>
    `;
    this.#input = this.#dialog.querySelector("input");
  }
}

export function openModule2Dialog() {
  new TextInputDialog().show();
}
