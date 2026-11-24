// module2.js - Робота2, варіант B2 = 0: діалог з полем вводу

class TextInputDialog {
  #dialog;
  #input;

  show() {
    this.#createWindow();
    this.#bindEvents();
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

  #bindEvents() {
    this.#dialog.addEventListener("click", (e) => {
      switch (e.target.dataset.id) {
        case "ok":
          this.#onOk();
          break;
        case "cancel":
          this.#onCancel();
          break;
      }
    });
  }

  #onOk() {
    if (this.#input.value.trim() === "") return;
    console.log(this.#input.value.trim());
    this.#dialog.close();
  }

  #onCancel() {
    this.#dialog.close();
  }
}

export function openModule2Dialog() {
  new TextInputDialog().show();
}
