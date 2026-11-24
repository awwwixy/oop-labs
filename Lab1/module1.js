// module1.js - Робота1, варіант В1 = 3: діалог зі списком груп

const FIOT_GROUPS = [
  "ІМ-51",
  "ІМ-52",
  "ІМ-53",
  "ІМ-54",
  "ІМ-55",
  "ІП-51",
  "ІП-52",
  "ІП-53",
  "ІП-54",
  "ІП-55",
  "ІС-51",
  "ІО-51",
  "ІК-51",
];

class GroupListDialog {
  #dialog;
  #list;
  #result = null;
  #onResult;

  show(onResult) {
    this.#onResult = onResult;
    this.#createWindow();
    this.#fillList();
    this.#bindEvents();
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
    this.#list = this.#dialog.querySelector("select");
  }

  #fillList() {
    for (const group of FIOT_GROUPS) {
      this.#list.add(new Option(group));
    }
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

    this.#dialog.addEventListener("close", () => {
      this.#dialog.remove(); 
      this.#onResult(this.#result); 
    });
  }

  #onOk() {
    if (this.#list.selectedIndex < 0) return;
    this.#result = this.#list.value;
    this.#dialog.close();
  }

  #onCancel() {
    this.#dialog.close();
  }
}

export function openModule1Dialog(onResult) {
  new GroupListDialog().show(onResult);
}
