// utils.js - спільна логіка

let activeDialog = null;

export function setActiveDialog(dialog) {
  if (activeDialog !== null && activeDialog.open) {
    activeDialog.close();
  }
  activeDialog = dialog;
}