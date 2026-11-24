// module1.js - Робота1, варіант В1 = 3: діалог зі списком груп

class GroupListDialog {
    #dialog;

    show() {
        console.log("показую вікно");
    }
}

export function openModule1Dialog() {
    new GroupListDialog().show();
}