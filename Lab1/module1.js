// module1.js - Робота1, варіант В1 = 3: діалог зі списком груп

class GroupListDialog {
  #dialog;

  show() {
    this.#createWindow();
    document.body.append(this.#dialog);
    this.#dialog.showModal();
  }

  #createWindow() {
    this.#dialog = document.createElement("dialog");
    this.#dialog.className = "dlg";
    this.#dialog.innerHTML = `
        <div class="dlg-title">Робота1 — вибір групи</div>
            <select size="10"></select>
            <div class="dlg-buttons">
                <button data-id="ok">Так</button>
                <button data-id="cancel">Відміна</button>
        </div>
    `;
  }
}

export function openModule1Dialog() {
  new GroupListDialog().show();
}
