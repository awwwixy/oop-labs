// module2.js - Робота2, варіант B2 = 0: діалог з полем вводу

class TextInputDialog {
  #dialog;

  show() {
    console.log("module2: показую вікно");
  }
}

export function openModule2Dialog() {
  new TextInputDialog().show();
}